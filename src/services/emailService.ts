interface EmailOptions {
  to: string
  subject: string
  html: string
  from?: string
}

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface OrderDetails {
  orderNumber: string
  customerName: string
  email: string
  phone?: string
  shippingAddress: string
  orderNotes?: string
  cartItems: CartItem[]
  subtotal: number
  shipping: number
  total: number
  orderDate: string
}

export class EmailService {
  private resendApiKey: string
  private fromEmail: string = 'orders@duelistemporium.com'
  private ownerEmail: string = 'owner@duelistemporium.com' // You'll need to update this

  constructor(resendApiKey: string, ownerEmail?: string) {
    this.resendApiKey = resendApiKey
    if (ownerEmail) {
      this.ownerEmail = ownerEmail
    }
  }

  private async sendEmail(options: EmailOptions): Promise<boolean> {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: options.from || this.fromEmail,
          to: options.to,
          subject: options.subject,
          html: options.html,
        }),
      })

      const result = await response.json()
      
      if (!response.ok) {
        console.error('Email send error:', result)
        return false
      }

      console.log('Email sent successfully:', result.id)
      return true
    } catch (error) {
      console.error('Email service error:', error)
      return false
    }
  }

  async sendCustomerConfirmation(orderDetails: OrderDetails): Promise<boolean> {
    const html = this.generateCustomerConfirmationEmail(orderDetails)
    
    return this.sendEmail({
      to: orderDetails.email,
      subject: `Order Confirmation #${orderDetails.orderNumber} - Duelist Emporium`,
      html,
    })
  }

  async sendOwnerNotification(orderDetails: OrderDetails): Promise<boolean> {
    const html = this.generateOwnerNotificationEmail(orderDetails)
    
    return this.sendEmail({
      to: this.ownerEmail,
      subject: `New Order Received #${orderDetails.orderNumber} - $${orderDetails.total.toFixed(2)}`,
      html,
    })
  }

  private generateCustomerConfirmationEmail(order: OrderDetails): string {
    const itemsHtml = order.cartItems.map(item => `
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 12px; text-align: left;">
          <div style="display: flex; align-items: center;">
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px; margin-right: 12px;">
            <div>
              <div style="font-weight: 600; color: #111827;">${item.name}</div>
              <div style="color: #6b7280; font-size: 14px;">Quantity: ${item.quantity}</div>
            </div>
          </div>
        </td>
        <td style="padding: 12px; text-align: right; font-weight: 600; color: #111827;">
          $${(item.price * item.quantity).toFixed(2)}
        </td>
      </tr>
    `).join('')

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Order Confirmation - Duelist Emporium</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        
        <!-- Header -->
        <div style="text-align: center; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">
            ⚡ Duelist Emporium
          </h1>
          <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">Order Confirmation</p>
        </div>

        <!-- Order Details -->
        <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
          <h2 style="margin: 0 0 15px 0; color: #111827; font-size: 20px;">
            ✅ Thank you for your order!
          </h2>
          <p style="margin: 0 0 10px 0; color: #4b5563;">
            Hi <strong>${order.customerName}</strong>, we've received your order and will process it shortly.
          </p>
          <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <strong style="color: #111827;">Order #${order.orderNumber}</strong><br>
            <span style="color: #6b7280;">Placed on ${order.orderDate}</span>
          </div>
        </div>

        <!-- Order Items -->
        <div style="background: white; border-radius: 12px; overflow: hidden; margin-bottom: 25px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <div style="background: #374151; color: white; padding: 15px;">
            <h3 style="margin: 0; font-size: 18px;">Order Items</h3>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            ${itemsHtml}
          </table>
        </div>

        <!-- Order Summary -->
        <div style="background: white; padding: 20px; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="margin: 0 0 15px 0; color: #111827;">Order Summary</h3>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span>Subtotal:</span>
            <span>$${order.subtotal.toFixed(2)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span>Shipping:</span>
            <span>$${order.shipping.toFixed(2)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: 8px; border-top: 2px solid #e5e7eb; font-weight: bold; font-size: 18px; color: #111827;">
            <span>Total:</span>
            <span>$${order.total.toFixed(2)}</span>
          </div>
        </div>

        <!-- Shipping Info -->
        <div style="background: white; padding: 20px; border-radius: 12px; margin-bottom: 25px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="margin: 0 0 15px 0; color: #111827;">Shipping Address</h3>
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; white-space: pre-line; color: #4b5563;">
${order.shippingAddress}
          </div>
          ${order.orderNotes ? `
          <h4 style="margin: 20px 0 10px 0; color: #111827;">Order Notes</h4>
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; color: #92400e; border-left: 4px solid #f59e0b;">
            ${order.orderNotes}
          </div>
          ` : ''}
        </div>

        <!-- Next Steps -->
        <div style="background: #ecfdf5; border: 1px solid #d1fae5; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
          <h3 style="margin: 0 0 15px 0; color: #047857;">📦 What's Next?</h3>
          <ul style="margin: 0; padding-left: 20px; color: #065f46;">
            <li>We'll review and process your order within 1-2 business days</li>
            <li>You'll receive a shipping confirmation with tracking details</li>
            <li>Your items will be carefully packaged and shipped</li>
            <li>Questions? Reply to this email or contact us</li>
          </ul>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 20px; color: #6b7280; font-size: 14px;">
          <p style="margin: 0 0 10px 0;">
            Thank you for shopping with <strong>Duelist Emporium</strong>!<br>
            Your premier destination for Yu-Gi-Oh! accessories.
          </p>
          <p style="margin: 0;">
            This email was sent regarding order #${order.orderNumber}
          </p>
        </div>

      </body>
      </html>
    `
  }

  private generateOwnerNotificationEmail(order: OrderDetails): string {
    const itemsHtml = order.cartItems.map(item => `
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 10px; text-align: left;">
          <strong>${item.name}</strong><br>
          <small style="color: #6b7280;">ID: ${item.id}</small>
        </td>
        <td style="padding: 10px; text-align: center;">$${item.price.toFixed(2)}</td>
        <td style="padding: 10px; text-align: center;">${item.quantity}</td>
        <td style="padding: 10px; text-align: right; font-weight: bold;">$${(item.price * item.quantity).toFixed(2)}</td>
      </tr>
    `).join('')

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>New Order - Duelist Emporium</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; padding: 20px;">
        
        <!-- Header -->
        <div style="background: #dc2626; color: white; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
          <h1 style="margin: 0; font-size: 24px; font-weight: bold;">
            🚨 NEW ORDER RECEIVED
          </h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
            Order #${order.orderNumber} • $${order.total.toFixed(2)} • ${order.cartItems.length} items
          </p>
        </div>

        <!-- Customer Info -->
        <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <h2 style="margin: 0 0 15px 0; color: #111827; font-size: 18px; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">
            👤 Customer Information
          </h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
              <strong>Name:</strong> ${order.customerName}<br>
              <strong>Email:</strong> <a href="mailto:${order.email}">${order.email}</a>
              ${order.phone ? `<br><strong>Phone:</strong> <a href="tel:${order.phone}">${order.phone}</a>` : ''}
            </div>
            <div>
              <strong>Order Date:</strong> ${order.orderDate}<br>
              <strong>Order #:</strong> ${order.orderNumber}
            </div>
          </div>
        </div>

        <!-- Shipping Address -->
        <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <h3 style="margin: 0 0 15px 0; color: #111827; font-size: 18px; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">
            📍 Shipping Address
          </h3>
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; white-space: pre-line; font-family: monospace;">
${order.shippingAddress}
          </div>
          ${order.orderNotes ? `
          <h4 style="margin: 15px 0 10px 0; color: #111827;">📝 Customer Notes</h4>
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
            ${order.orderNotes}
          </div>
          ` : ''}
        </div>

        <!-- Order Items -->
        <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; margin-bottom: 20px;">
          <div style="background: #374151; color: white; padding: 15px;">
            <h3 style="margin: 0; font-size: 18px;">🛍️ Order Items (${order.cartItems.length} items)</h3>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f9fafb; border-bottom: 2px solid #e5e7eb;">
                <th style="padding: 12px; text-align: left; font-weight: 600;">Product</th>
                <th style="padding: 12px; text-align: center; font-weight: 600;">Price</th>
                <th style="padding: 12px; text-align: center; font-weight: 600;">Qty</th>
                <th style="padding: 12px; text-align: right; font-weight: 600;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
        </div>

        <!-- Order Summary -->
        <div style="background: white; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
          <h3 style="margin: 0 0 15px 0; color: #111827; font-size: 18px; border-bottom: 2px solid #f3f4f6; padding-bottom: 8px;">
            💰 Order Summary
          </h3>
          <div style="font-size: 16px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span>Subtotal:</span>
              <span>$${order.subtotal.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span>Shipping:</span>
              <span>$${order.shipping.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 12px 0; border-top: 2px solid #e5e7eb; font-weight: bold; font-size: 20px; color: #dc2626;">
              <span>TOTAL:</span>
              <span>$${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <!-- Action Required -->
        <div style="background: #fef3c7; border: 2px solid #f59e0b; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
          <h3 style="margin: 0 0 15px 0; color: #92400e;">⚡ Action Required</h3>
          <ul style="margin: 0; padding-left: 20px; color: #92400e; font-weight: 500;">
            <li>Review order details above</li>
            <li>Check product availability</li>
            <li>Process payment if required</li>
            <li>Prepare items for shipping</li>
            <li>Send customer shipping confirmation</li>
          </ul>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 15px; color: #6b7280; font-size: 14px; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0;">
            <strong>Duelist Emporium</strong> - Order Management System<br>
            Order received on ${order.orderDate}
          </p>
        </div>

      </body>
      </html>
    `
  }
}

// Helper function to format date
export function formatOrderDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}