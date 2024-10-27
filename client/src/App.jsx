import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home"
import VerifyEmail from "./components/verifyemail";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/#login" element={<Home/>}/>
          <Route path="/#about" element={<Home/>}/>
          <Route path="/#register" element={<Home/>}/>
          <Route path="/verifyemail/:token" element={<VerifyEmail/>}/>
        </Routes>
      </BrowserRouter>
    
      // <div>
      //   <Navbar/>
      //   <hr />
      //   <JoinUs/>
      //   <hr />
      //   <AboutUs/>
      //   <hr />
      //   <Login/>
      //   <hr />
      //   <Register/>
      //   <hr />
      // </div>
    
  );
}
