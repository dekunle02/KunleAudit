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
        <div className="mx-auto my-auto w-1/2 md:w-1/3 lg:w-1/4" >
            {View}
        </div>
    )
}

export default LoadingPage