// server/index.js
// Express backend — handles contact / appointment form submissions and sends email via nodemailer.
// Run with: node server/index.js  (or npm run server)

require('dotenv').config();

const dns = require('dns');
dns.setDefaultResultOrder('ipv4first'); // force IPv4 over IPv6 for all connections

require('dotenv').config();

// ...rest of your requires

const express      = require('express');
const cors         = require('cors');
const cookieParser = require('cookie-parser');
const nodemailer   = require('nodemailer');

const app = express();

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow requests from the Vite dev server and the production frontend URL.
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.get("/",(req,res) => {
  res.json({ msg: "Welcome to the Advance Physio's Hub API" });
});

app.use(
  cors({
    origin: (origin, cb) => {
      // Allow requests with no origin (e.g. curl / Postman) or from allowed list
      if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error(`CORS: origin ${origin} not allowed`));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  })
);

// ── Nodemailer transporter ──────────────────────────────────────────────────

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

// ── Routes ──────────────────────────────────────────────────────────────────

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

/**
 * POST /get-form-data
 * Accepts the contact / appointment form and sends an email to the clinic.
 */
app.post('/get-form-data', async (req, res) => {
  try {
    const {
      first,
      middle,
      last,
      email,
      phone,
      city,
      country,
      address,
      message,
    } = req.body;

    // ── Validation ────────────────────────────────────────────────────────
    const missing = [];
    if (!first)   missing.push('first name');
    if (!last)    missing.push('last name');
    if (!email)   missing.push('email');
    if (!phone)   missing.push('phone');
    if (!city)    missing.push('city');
    if (!country) missing.push('country');
    if (!address) missing.push('address');
    if (!message) missing.push('message');

    if (missing.length) {
      return res.status(400).json({ msg: `Missing required fields: ${missing.join(', ')}.` });
    }

    const fullName = [first, middle, last].filter(Boolean).join(' ');

    // ── Email ─────────────────────────────────────────────────────────────
    const mailOptions = {
      from: `"Advance Physio's Hub" <${process.env.EMAIL}>`,
      to: process.env.TO,
      replyTo: email,
      subject: `📩 New Inquiry / Appointment Request — ${fullName}`,
      html: `
        <div style="max-width:620px;margin:auto;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
                    background:#f9fafb;border:1px solid #e5e7eb;padding:32px;border-radius:12px;
                    box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <h2 style="color:#111827;border-bottom:2px solid #111827;padding-bottom:12px;margin-bottom:24px;font-size:20px;">
            📩 New Inquiry — Advance Physio's Hub
          </h2>

          <table style="width:100%;border-collapse:collapse;font-size:14px;color:#374151;">
            <tr>
              <td style="padding:8px 0;font-weight:600;width:130px;">Full Name</td>
              <td style="padding:8px 0;">${fullName}</td>
            </tr>
            <tr style="background:#f3f4f6;">
              <td style="padding:8px 6px;font-weight:600;">Email</td>
              <td style="padding:8px 6px;"><a href="mailto:${email}" style="color:#2563eb;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;">Phone</td>
              <td style="padding:8px 0;">${phone}</td>
            </tr>
            <tr style="background:#f3f4f6;">
              <td style="padding:8px 6px;font-weight:600;">City</td>
              <td style="padding:8px 6px;">${city}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;">Country</td>
              <td style="padding:8px 0;">${country}</td>
            </tr>
            <tr style="background:#f3f4f6;">
              <td style="padding:8px 6px;font-weight:600;">Address</td>
              <td style="padding:8px 6px;">${address}</td>
            </tr>
          </table>

          <div style="margin-top:20px;background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:16px;">
            <p style="font-weight:600;margin:0 0 8px;color:#111827;">Message / Appointment Details</p>
            <p style="margin:0;color:#374151;white-space:pre-line;line-height:1.6;">${message}</p>
          </div>

          <hr style="margin-top:28px;border:none;border-top:1px solid #e5e7eb;">
          <p style="font-size:11px;color:#9ca3af;margin-top:12px;text-align:center;">
            Sent automatically from the Advance Physio's Hub website contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ msg: 'Email sent successfully.' });

  } catch (err) {
    console.error('[/get-form-data]', err);
    return res.status(500).json({ msg: 'Internal server error. Please try again later.' });
  }
});

// ── Start ────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅  Backend running on http://localhost:${PORT}`);
});
