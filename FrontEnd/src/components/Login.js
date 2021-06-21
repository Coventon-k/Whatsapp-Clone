import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { signIn, signInGmail } from '../actions/userActions';
import '../Css/Login.css';

//new
import { useDispatch, useSelector } from 'react-redux';

function Login() {

    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { loading, error, user} = userSignin;

   

    useEffect(() =>{        
        if(error){
            console.log("l'erreur est",error)
        }
    }, [user, error]);


    const dispatch = useDispatch();
    
    const signInWithGmail = () =>{
        dispatch(signInGmail());
    }

    const signInwithCredentials = () =>{
        
        dispatch(signIn(pseudo, password));
    }


    return (
        <div className="login">
            <div className="login_container">
                <img
                    src="https://i.ibb.co/s33h3XZ/Whats-App-social-media-corporate-logo-icon-icons-com-67680.png" alt=""
                />
                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signInWithGmail}>
                    Sign in with Google
                </Button>
            </div>   

            <form className="login_fromBD">
                <input            
                    onChange={(e) => setPseudo(e.target.value)} 
                    placeholder="pseudo"
                    type="text" />
                <input            
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="password"
                    type="password" />
                <Button 
                    onClick= {signInwithCredentials}
                > Sign In
                </Button>
            </form>         
        
            <Button>
                    New Account
            </Button>
        </div>
    )
}

export default Login
