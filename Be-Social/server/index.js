const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.js')
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
const twilioClient = require('twilio')(accountSid, authToken);

// * Establishing middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// * Building first route
app.get('/', (req, res) => {
    res.status(200).send('hello world')
});
app.post('/', (req, res) => {
    const { message, user: sender, type, members } = req.body;
    if (type === 'message.new') {
        members.filter((member) => member.user_id !== sender.id).forEach(({ user }) => {
            if (!user.online) {
                twilioClient.messages.create({
                    body: `you have a message from ${message.user.name} - ${message.text}`,
                    messagingServiceSid: messagingServiceSid,
                    to: user.phoneNumber
                }).then(() => console.log('message sent')).catch((err) => console.log(err));
            }
        })
        return res.status(200).send('message sent');
    }
    return res.status(200).send('not a new message request');
})

app.use('/auth', authRoutes);
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));