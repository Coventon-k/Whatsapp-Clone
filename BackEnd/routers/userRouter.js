import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import data from '../data.js';
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils.js';


const userRouter = express.Router();

userRouter.get(
    '/', 
    expressAsyncHandler(async (req, res)=> {
        const users = await User.find({  });
        if(users.length == 0){
          await User.insertMany(data.users);
        }
        res.send(users);
    })
);



userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res)=> {
        await User.remove({}); //to remove all the users 
        const createdUsers = await User.insertMany(data.users);
        res.send({ createdUsers });
    })
);

//Insert New Users
userRouter.post(
    '/insertNewUser',
    expressAsyncHandler(async (req, res)=> {
        await User.remove({}); //to remove all the users 
        const createdUsers = await User.insertMany(data.users);
        res.send({ createdUsers });
    })
);

//SIGNIN
userRouter.post('/signin',
    expressAsyncHandler(async (req, res) =>{
        const user = await User.findOne({ pseudo: req.body.pseudo });
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                res.send({
                    pseudo: user.pseudo,
                    token: generateToken(user),
            
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid User email or Password'})
    })
);



export default userRouter;