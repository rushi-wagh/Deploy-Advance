const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,        // true for port 465
  family: 4,            // force IPv4, skip the broken IPv6 route
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
  connectionTimeout: 10_000,
});