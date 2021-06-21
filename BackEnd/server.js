import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import messageRouter from './routers/messageRouter.js';

const app = express();
const PORT = process.env.PORT || 5002;

//For POST REQUESTS
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose.connect(
    (process.env.MONGODB_URL || 'mongodb://localhost/WhatsappClone'), 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
);

app.get('/', (req,res) =>{
    res.send("Server whatsapp clone is running");
});

app.use('/api/users', userRouter);
app.use('/api/messages', messageRouter);

app.use((err, req, res, next) =>{
    res.status(500).send({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`Serve at http://localhost:${PORT}`);
});