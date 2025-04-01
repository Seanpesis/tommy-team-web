const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kobi203258@gmail.com',
    pass: 'tevs tefn trsm abyz' 
  }
});

app.post('/api/send', async (req, res) => {
  try {
    const { to, from, subject, text } = req.body;
    
    await transporter.sendMail({
      from,
      to,
      subject,
      text
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 