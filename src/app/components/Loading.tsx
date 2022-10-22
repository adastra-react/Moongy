import Lottie from "lottie-react"
import CircleAnimation from '../assets/loading_animation_2.json'

function Loading() {

    const style = {
        marginTop: 100,
        height: 300
    }

  return (
    <div>
        <Lottie
         animationData={CircleAnimation} 
         loop={true} 
         style={style}
        />
    </div>
  )
}

export default Loading