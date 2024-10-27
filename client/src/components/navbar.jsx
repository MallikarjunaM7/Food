import { useAuth } from "../../store/auth"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Navbar () {
    let shown = false;
    const {token, LogoutUser} = useAuth()
    const handleLogOut = () => {
        LogoutUser()
    }
    return(
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{ marginLeft: '70px' }}>
                    <h1>ECommerce</h1>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    {token ? 
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">XYZ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={handleLogOut} className="nav-link" href="/">Logout</a>
                            </li>
                        </>:
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="/#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#register">Register</a>
                            </li>
                        </>
                    }
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}