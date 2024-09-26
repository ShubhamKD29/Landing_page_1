import './Background.css'
import video from '../../assets/video.webm'
import pic_1 from '../../assets/pic_1.jpg'
import pic_2 from '../../assets/pic_2.jpg'
import pic_3 from '../../assets/pic_3.jpg'


function Background({playstatus, landingpageCount}) {
   if(playstatus){
    return(
       <video className='background' autoPlay loop muted>
         <source src={video} type='video/webm' />
       </video>
    )
   }else if(landingpageCount === 0){
    return <img src={pic_1} className='background' alt="..." />
   }else if(landingpageCount === 1){
    return <img src={pic_2} className='background' alt="..." />
   }else if(landingpageCount === 2){
    return <img src={pic_3} className='background' alt="..." />
   }
}

export default Background
