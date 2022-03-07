import { useLottie } from "lottie-react";
import animation from '../assets/loading.json'

function LoadingPage() {
    const lottieOptions = {
        animationData: animation,
        loop: true,
        autoplay: true
    };

    const { View } = useLottie(lottieOptions);
    return (
        <div className="w-screen h-screen z-30 fixed top-0 right-0 bg-colorWhite">
            <div className="popup-child md:w-[30vw]" >
                {View}
            </div>
        </div>
    )
}

export default LoadingPage