import {useNavigate} from "react-router-dom"
import { useParams } from "react-router-dom"
import {useEffect, useState } from "react"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./Loading";

export default function VerifyEmail(){

    const [verifyToken, setVerifyToken] = useState(undefined)
    const [isVerifying, setIsVerifying] = useState(true)
    const [verified, setVerified] = useState(false)
    const [user, setUser] = useState({username: "", email: ""})
    const navigate = useNavigate()
    const { token } = useParams();
    const decodedToken = decodeURIComponent(token);
    console.log(decodedToken)

    const backapi = "http://localhost:5000";

    useEffect(() => {
        setVerifyToken(token)
    }, [])


    const verifyEmail = async() => {

        setIsVerifying(true)

        try {
            const response = await fetch(`${backapi}/api/auth/verifyemail`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({verifyToken: decodedToken})
            })
            const message = await response.json()

            console.log(message)
    
            if(!message.success && message.invalidmsg){
                toast.error(message.invalidmsg, {duration: 800})
                
            }else if(!message.success && message.exceedmsg){
                toast.error(message.exceedmsg, {duration: 800})
                
            }else if(message.msg){
                toast.success(message.msg, {duration: 800})
                setVerified(true)
                
            }
            setTimeout(() => navigate("/"), 2000)
        }catch (error) {
            console.log(error)
        }finally{
            console.log("FINNALY");      
            setIsVerifying(false)
        }
    }

    useEffect(() => {
        if(verifyToken ){
            verifyEmail()
        }
    }, [verifyToken])

    return(
        <>
        <hr />
        <div className="verifying">
            {/* {isVerifying ? <h4>Verifying</h4> : <>{verified ? <h4>Verification Successfull</h4>: <><h4>Verification Failed</h4></>}</>} */}
            <Loading/>
        </div> 
        <hr />    
        </>
    )
}