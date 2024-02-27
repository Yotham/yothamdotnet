// pages/api/keys.js
export default function handler(req, res) {
  // NEVER do this with private or sensitive keys!
  res.status(200).json({
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
  });
}
