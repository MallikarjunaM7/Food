export default function AboutUs(){
    return(
        <>
            <div id="about" className=" aboutres container px-4 py-5">
                <h2 className="responabout">About Us</h2>
                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 pt-5">
                <div style={{marginTop: "-20px"}} className="intro col d-flex flex-column align-items-start gap-2">
                    <h2 className="fw-bold text-body-emphasis">Introducing Ourselves</h2>
                    <p className="text-body-secondary">Welcome to our Website, your ultimate destination for all your shopping needs! Founded in [Year], we are dedicated to providing our customers with a seamless online shopping experience, offering a wide range of products that cater to every taste and lifestyle.</p>
                </div>

                <div className="col">
                    <div style={{marginTop: "-100px"}} className="row row-cols-1 row-cols-sm-2 g-4">
                    <div className="col d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                        </div>
                        <h4 className="fw-semibold mb-0 text-body-emphasis">Personalized Shopping Experience</h4>
                        <p className="text-body-secondary">Leverage advanced algorithms to provide tailored product recommendations based on user behavior and preferences.</p>
                    </div>

                    <div className="col d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                        </div>
                        <h4 className="fw-semibold mb-0 text-body-emphasis">Seamless Checkout Process</h4>
                        <p className="text-body-secondary">Checkout experience with multiple payment options, reducing cart abandonment rates and enhancing user satisfaction.</p>
                    </div>

                    <div className="col d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                        </div>
                        <h4 className="fw-semibold mb-0 text-body-emphasis">Real-Time Order Tracking</h4>
                        <p className="text-body-secondary">Keep customers informed with their orders, thus monitor their shipments and enhancing transparency and trust.</p>
                    </div>

                    <div className="col d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                        </div>
                        <h4 className="fw-semibold mb-0 text-body-emphasis">In-App Customer Support</h4>
                        <p className="text-body-secondary">Provide immediate assistance, enabling users to resolve queries quickly and improving overall customer support satisfaction.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}