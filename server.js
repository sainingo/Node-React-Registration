import express from 'express';
import mongoose from 'mongoose';

import useRoutes from './routes/Register.js'

const app = express()

const mongoUrl = 'mongodb://localhost:27017/userRegistration'

app.use('/register', useRoutes)

mongoose.connect(mongoUrl)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


app.get('/', (req, res) => {
    res.send('Registration Form')
})
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))