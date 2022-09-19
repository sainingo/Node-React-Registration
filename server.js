import express from 'express';
// import mongoose from 'mongoose';

import useRoutes from './routes/Register.js'

const app = express()

app.use('/register', useRoutes)

// mongoose.connect('mongodb://localhost:27017/usersdb',
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );


app.get('/', (req, res) => {
    res.send('Registration Form')
})
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))