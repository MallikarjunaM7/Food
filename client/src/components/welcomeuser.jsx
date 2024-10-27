import { useAuth } from "../../store/auth"

export default function WelcomeUser(){

    const {data} = useAuth();
    return(
        <>
            <div className="welcomeflex">
                <div className="welcomecontent">
                    <h1 className="">Heyy {data.username}</h1>
                    {/* <p class="fs-4">Welcome Back!! Our yourFavorite food Now!</p> */}

                </div>
                {/* <div class="imgwel">
                    <img src="/1d930f130826286be6e1eea57546f384.webp"  class="d-block mx-lg-auto img-fluid welcomeimg" alt="Bootstrap Themes" loading="lazy"/>
                </div> */}
            </div>
        </>
    )
}