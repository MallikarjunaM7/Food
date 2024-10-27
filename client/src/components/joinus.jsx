export default function JoinUs(){
    return(
        <>
            <div className="p-5 pb-3 text-center picture">
                <h1 className="text-body-emphasis">Join Us</h1>
                <p className="col-lg-8 mx-auto fs-3 text-muted mt-3 mb-3">
                Join our community today and unlock exclusive deals just for you! Sign up now to experience a seamless shopping journey with personalized offers.
                </p>
                <div className="d-inline-flex gap-2 mb-5 mt-3">
                <button className="login d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                <a href="#login">Login</a>
                </button>
                <button className="btn login btn-outline-secondary btn-lg px-4 rounded-pill register" type="button">
                    <a href="#register">Register</a>
                </button>
                </div>
            </div>
        </>
    )
}