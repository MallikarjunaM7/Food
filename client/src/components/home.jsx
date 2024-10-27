// import "./globals.css"
import JoinUs from "./joinus"
import AboutUs from "./aboutus"
import Login from "./login"
import Register from "./register"
import { useAuth } from "../../store/auth"
import WelcomeUser from "./welcomeuser"

export default function Home() {

  const {token} = useAuth();
  return (
    
      <div>
        {token ?
          <>
            <hr style={{paddingBottom: 0}}/>
            <WelcomeUser/>
          </>:
          <>
            <hr />
            <JoinUs/>
            <hr />
            <AboutUs/>
            <hr />
            <Login/>
            <hr />
            <Register/>
            <hr />
          </>
        }
      </div>
    
  );
}
