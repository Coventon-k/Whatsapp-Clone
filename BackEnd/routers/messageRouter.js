import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Message from '../models/messageModel.js';

const messageRouter = express.Router();

//Send MongoDB Data to the frontEnd
messageRouter.get(
    '/:sender/:receiver',
    expressAsyncHandler(async (req, res) =>{
        
        var message = await Message.find({ 
                                sender: req.params.sender ,
                                receiver: req.params.receiver,                            
                            });
        const reverse = await Message.find({ 
                                receiver: req.params.sender ,
                                sender: req.params.receiver,                            
        });
        const messages = message.concat(reverse).sort()  ;
        res.send(messages);
    })
);

messageRouter.post(
    '/send', 
    expressAsyncHandler(async (req, res)=> {
        const insertedMessages = await Message.insertMany(
            {
                sender:  req.body.sender ,
                receiver: req.body.receiver,
                message: req.body.message ,
            }
        );
        res.send(insertedMessages);
    })
); 


//Insert into MongoDB
messageRouter.get(
    '/seed', 
    expressAsyncHandler(async (req, res)=> {
        await Message.remove({}); //to remove all the users 
        const createdMessages = await Message.insertMany(data.messages);
        res.send(data.messages);
    })
);

// 
messageRouter.get(
    '/:id',
    expressAsyncHandler(async(req, res) =>{
        const message = await Message.findById(req.params.id);
        if(message){
            res.send(message);
        }else{
            res.status(404).send({ message: 'Message Not Found' });
        }
    })
);

messageRouter.get(
    '/:sender',
    expressAsyncHandler(async(req, res) =>{
        const message = await Message.findById(req.params.sender);
        if(message){
            res.send(message);
        }else{
            res.status(404).send({ message: 'Message Not Found' });
        }
    })
);

export default messageRouter;