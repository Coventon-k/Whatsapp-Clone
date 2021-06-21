import {BrowserRouter, Switch, Route } from "react-router-dom";
import './Css/App.css';

//Components
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from "./components/Login";
import NotFound from "./components/AuthScreen/NotFound";

//Update with redux 
import { useSelector } from 'react-redux';

 

function App(){
  
  const userSignin = useSelector(state => state.userSignin);
  const { user } = userSignin;


  return (
    <div className="app">

      { !user ? (
          <Login/>
        ) : 
        ( 
          <div className="app_body">
            <BrowserRouter>
              <Switch>
                <Route exact path="/"> 
                <Sidebar user={ user }/> </Route>
                <Route path="/rooms/:receiverName">
                  <Sidebar user={ user }/> 
                  <Chat user={ user }/>
                </Route>

                <Route component={NotFound}/>

              </Switch>
            </BrowserRouter>
          </div>
        )
      }
    </div>
  );
}

export default App;

