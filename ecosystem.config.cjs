module.exports = {
  apps: [
    {
      name: 'duelist-emporium',
      script: 'npx',
      args: 'wrangler pages dev dist --d1=duelist-emporium-production --local --ip 0.0.0.0 --port 3000',
      cwd: '/home/user/webapp',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      restart_delay: 2000,
      max_restarts: 5,
      min_uptime: '10s',
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true
    }
  ]
}