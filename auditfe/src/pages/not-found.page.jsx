import Lottie from 'react-lottie'
import animation from '../assets/404.json'

function NotFoundPage() {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    return (
        <div className="w-screen h-screen flex">
            <div className="mx-auto my-auto" >
                <Lottie options={lottieOptions} height={300}/>
            </div>
        </div>
    )
}

export default NotFoundPage