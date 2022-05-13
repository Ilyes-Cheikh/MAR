
import React,{useState,useEffect}from "react"
import "../Assets/CSS/Signup.css"

import axios  from "axios"



export default function SignUp() {


    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [language,setLanguage]=useState("")
    const[loginemail,setLoginemail]= useState("")
    const [loginpassword, setLoginpassword] = useState("")
 
    
    //Register Form Handlers

    const handleUsernameChange = (e) =>{
        setUsername(e.target.value)
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }
    const handleLanguageChange = (e) =>{
        setLanguage(e.target.value)
    }

  
    //User Register Handler
    const handleRegisterSubmit = ()  =>  {
 
    var formData = new FormData(); 
    formData.append('username',username)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('Language',language)

   //axios here
}
    
    

    //User Login Handler
    const handleLoginSubmit = () => {  
        var LoginForm = new FormData(); 
        LoginForm.append('email',loginemail)
        LoginForm.append('password',loginpassword)
        //Axios here
    }
    return (
        <div className="loginpage">
            <div className="main">
        
            <input type="checkbox" id="chk" aria-hidden="true" />
                <div className="signup">
                   
                    
                        <label  htmlFor="chk" aria-hidden="true" >Inscrivez-vous</label>
                        <input  type="text" value={username ?? ""} placeholder="Username" required="True" onChange={handleUsernameChange} />
                        <input   type="email" value={email ?? ""} placeholder="Email" required="True" onChange={handleEmailChange} />
                        <input type="password"  value={password ?? ""} placeholder="Password" required="True"  onChange={handlePasswordChange}/>
                        <input   value={language ?? ""} placeholder="Language" required="True" onChange={handleLanguageChange}/>
                        <button className="loginButton" onClick={handleRegisterSubmit}>S'inscrire</button>
                        
                    
                </div>
                  <div className="login">
                        
                        <label  htmlFor="chk" aria-hidden="true" >Connectez-vous</label>
                        <div>
                        <input type="text"  placeholder="Email"  value={loginemail ?? ""} required="True"onChange={(e)=> {setLoginemail(e.target.value)}} />
                        <input type="password"  placeholder="Password"   value={loginpassword ?? ""} required="True"  onChange={(e)=>{setLoginpassword(e.target.value)}}/>
                        <button  className="loginButton" onClick={handleLoginSubmit}>Sign in</button>
                        </div>
                       
                </div> 
                
            </div>
        </div>

    )
}