import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./ui.css"
import { AuthProvider } from '../store/auth.jsx'
import {ToastContainer} from "react-toastify"
import Navbar from './components/navbar.jsx'
import Footer from "./components/page.jsx"

createRoot(document.getElementById('root')).render(
  
  <AuthProvider>
  <StrictMode>
    <Navbar/>
    <App />
    <Footer/>
    <ToastContainer 
    position="top-center" 
    autoClose={1500} 
    hideProgressBar={false} 
    newestOnTop={false} 
    closeOnClick 
    rtl={false} 
    pauseOnFocusLoss 
    draggable 
    />
  </StrictMode>
  </AuthProvider>
)
