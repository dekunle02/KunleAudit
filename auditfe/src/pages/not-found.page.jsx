import { useLottie } from "lottie-react";
import animation from '../assets/404.json'

function NotFoundPage() {
    const lottieOptions = {
        animationData: animation,
        loop: true,
        autoplay: true
      };
    
    const { View } = useLottie(lottieOptions);
    return (
        <div className="w-screen h-screen flex">
            <div className="mx-auto my-auto" >
            {View}
            </div>
        </div>
    )
}

export default NotFoundPage