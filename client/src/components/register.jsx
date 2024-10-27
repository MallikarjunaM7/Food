import { useState } from "react"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Register(){

    const [userDetails, setUserDetails] = useState({username: "", email: "", password: ""})
    const backapi = "http://localhost:5000"

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value)
        setUserDetails({...userDetails, [name]: value})
    }
    
    const handleSubmit = async(e) => {
        console.log(userDetails)
        e.preventDefault()
        try {
            const response = await fetch(`${backapi}/api/auth/register`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userDetails)
            })
            const message= await response.json()
            console.log(message)
            if(message.success){
                toast.success(message.msg)
                setUserDetails({username: "", email: "", password: ""})
            }else{
                toast.error(message.msg)
            }
        } catch (error) {
            toast.error("An Error occured")
        }
    }
    
    return(
        <>
            <div id="register" className="mb-5">
                <form onSubmit={handleSubmit} style={{marginTop: "40px"}}  className="form-signin">
                <div style={{width: "50%"}} className="center-login">
                        <div style={{marginLeft: "40px"}} >
                            <h1 className="h3 mb-3 font-weight-normal fs-3 mb-4 loginhead">Register Here</h1>
                            <div className="d-flex">
                                <label  htmlFor="username" className="sr-only mb-3 fs-4">Username</label>
                                <input 
                                
                                    style={{background: "transparent", marginLeft:"17px"}}  
                                    type="text" id="email" className="userinput form-control mb-3" 
                                    onChange={handleChange}
                                    placeholder="Username" 
                                    autoComplete="off" 
                                    required="" 
                                    name="username"
                                    value={userDetails.username}
                                />
                            </div >
                            <div className="d-flex">
                                <label htmlFor="inputEmail" className="sr-only mb-3 fs-4">Email</label>
                                <input 
                                    onChange={handleChange}
                                    style={{background: "transparent", marginLeft:"60px"}}  
                                    type="email" 
                                    id="inputEmail" 
                                    className="form-control mb-3 emailinput" 
                                    placeholder="Email address" 
                                    autoComplete="off" 
                                    required="" 
                                    name="email"
                                    value={userDetails.email}
                                />
                            </div >
                            <div className="d-flex">
                                <label htmlFor="inputPassword" className="sr-only mb-3 fs-4">Password</label>
                                <input 
                                    style={{background: "transparent", marginLeft:"20px"}}  
                                    type="password" 
                                    id="inputPassword" 
                                    className="mb-3 form-control passinput" 
                                    onChange={handleChange}
                                    placeholder="Password" 
                                    autoComplete="off" 
                                    required=""
                                    name="password"
                                    value={userDetails.password}
                                />
                            </div>
                            <button className="btn fs-4 btn-primary btn-block mt-2 loginbtn" type="submit">Sign in</button>
                        </div>
                    </div>
                    <div className="login-text register" style={{width: "50%"}}>
                        <h4 style={{paddingLeft: "30px", paddingRight: "20px"}}>Join our vibrant community by creating an account today! As a registered member, you'll enjoy a personalized shopping experience with tailored recommendations, exclusive discounts. Signing up is quick and easy—simply provide your details, and you'll be on your way to enjoying a seamless shopping journey!</h4>
                    </div>
                </form>
            </div>
        </>
    )
}