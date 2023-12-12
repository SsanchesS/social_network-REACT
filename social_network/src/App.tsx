//Sanches Network/Exchange

import { FC, useEffect } from "react";
import {Routes,Route,Link} from 'react-router-dom'

import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import MessengerPage from "./Pages/MessengerPage/MessengerPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DialogPage from "./Pages/DialogPage/DialogPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";


const App:FC=()=> {
  useEffect(()=>{

  },[])
  return (
<div className="App">         {/* 141414 */}
{/* <Routes>
  <Route path ='/profile' element = {<ProfilePage/>}/>
  <Route path="/messenger" element={<MessengerPage/>}/>
  <Route path="/dialog" element={<DialogPage/>}/>
  <Route path="/auth" element={<AuthPage/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="*" element={<NotFoundPage/>}/>
</Routes> */}
<ProfilePage/>
<MessengerPage/>
<DialogPage/>
<AuthPage/>
<LoginPage/>
</div>
  );
}

export default App;