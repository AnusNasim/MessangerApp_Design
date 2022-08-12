import React from 'react'
import { AiFillStar ,AiOutlineCar} from "react-icons/ai"
import { TbWorld } from "react-icons/tb"
import { GoLocation } from "react-icons/go"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdPermMedia,MdFreeBreakfast,MdOutlineHotel } from "react-icons/md"
const Agent = () => {
  return (
 <>
  <div className='agent'>
    <div className='agentprofile'>
    <img src={require('../components/images/agentprofile.jpeg')} style={{width:"60px",height:"60px",borderRadius:"100%"}} />
     <h5 className='marry'>Marry Mathew <br /> <p className='life'>Hi-life agency</p></h5>
     <p className='review'>Reviews <AiFillStar style={{color:"yellow"}}/> <AiFillStar style={{color:"yellow"}}/> <AiFillStar style={{color:"yellow"}}/> <AiFillStar style={{color:"yellow"}}/> <AiFillStar style={{color:"yellow"}}/> 
     </p>     
    </div>

    <div className='aboutme'>
      <h5 className='ab1'>About me</h5>
      <p className='ab2'>‘’Hello! I am Marry, I am an experience 
      Travel agent since 10 years. I love to help 
      people who loves to travel, eat and have fun’’</p>
    </div>

    <div className='contact'>
    <ul>
      <li><TbWorld/> hi-lifeagency.com</li>
      <li><GoLocation/>Street 45,Ball road near cinema </li>
      <li><BsFillTelephoneFill/>+18143008429</li>
    </ul>
     
    </div>

   <div className='agentMedia'>
    <div className='media1'>
        <MdPermMedia style={{color:"#424197"}}/>
        Media(20)
        <div className='pic'>
            <img src={require('../components/images/locations.png')} width="250px" height="170px"  style={{borderRadius:'20px'}} />
        </div>
    </div>

   </div>


   <div className='hi_btn'>
     <div className='hifeagency'>
      <button>Hi-lifeagency.com</button>
     </div>
     <div className='facility'>
      <ul>
        <li><MdFreeBreakfast/></li>
        <li><MdOutlineHotel/></li>
        <li><AiOutlineCar/></li>
      </ul>
     </div>
   </div>



  </div>
 
 </>
  )
}

export default Agent
