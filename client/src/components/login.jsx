import { useState } from "react"
import { useAuth } from "../../store/auth"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login(){

    const {storeTokenInLS} = useAuth()
    const backapi = "http://localhost:5000"

    const [userData, setUserData] = useState({email: "", password: ""})
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const response = await fetch(`${backapi}/api/auth/login`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData)
            })
            const message = await response.json()
            console.log(message)

            if(!message.success){
                toast.error(message.msg)
            }else{
                toast.success(message.sucmsg)
                console.log(message.token)
                storeTokenInLS(message.token)
                navigate("/")
            }
            setUserData({email: "", password: ""})
        } catch (error) {
            console.log(error)
        }
    }

    return(
    <>
        <div id="login" className="mb-5">
            <form onSubmit={handleSubmit}  style={{marginTop: "40px"}}  className="form-signin">
                <div className="login-text" style={{width: "50%"}}>
                    <h4 style={{paddingLeft: "30px", paddingRight: "20px"}}>Welcome back! We’re glad to see you again. Please enter your credentials to access your account and enjoy a personalized shopping experience. If you’re new here, feel free to register and join our community for exclusive offers and updates!</h4>
                </div>
                <div style={{width: "50%"}} className="center-login">
                    <div style={{marginLeft: "40px"}} >
                        <h1 className="h3 loginhead mb-3 font-weight-normal fs-2 mb-4">Login Here</h1>
                        <div className="d-flex">
                            <label  htmlFor="inputEmail" className="sr-only mb-3 fs-4">Email</label>
                            <input onChange={handleChange} name="email" value={userData.email}  style={{background: "transparent", marginLeft:"55px"}}  type="email" id="inputEmailReg" className="emailinput form-control mb-3"  placeholder="Email address" required="" autoComplete="off"/>
                        </div >
                        <div className="d-flex">
                            <label htmlFor="inputPassword" className="sr-only mb-3 fs-4">Password</label>
                            <input onChange={handleChange} name="password" value={userData.password}  style={{background: "transparent", marginLeft:"20px"}}  type="password" id="inputPasswordReg" className="passinput mb-3 form-control"  placeholder="Password" required=""/>
                        </div>
                        <button className="btn loginbtn fs-4 btn-primary btn-block mt-2" type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </>)

}