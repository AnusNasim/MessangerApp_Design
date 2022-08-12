import React from 'react'
import { TiTicket } from "react-icons/ti";
import { MdOutlineLocalHotel } from "react-icons/md";
import { AiOutlineCar,AiOutlinePlusCircle } from "react-icons/ai";
import { GoPackage } from "react-icons/go";
import { FaTripadvisor,FaPray } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsEmojiSmile,BsMicFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
function Chating() {
  return (
    <>
   <div className='mainchat_container'>
    <div className='offers'>
        <ul>
            <li><TiTicket/></li>
            <li><MdOutlineLocalHotel/></li>
            <li><AiOutlineCar/></li>
            <li><GoPackage/></li>
            <li><FaPray/></li>
            <li><FaTripadvisor/></li>
        </ul>
    </div>
     <div className='booking'>
        <button>Book</button>
     </div>

    <div className='chatimage chatting'>
    <div className='imagess'>
      <img src={require('../images/image2.jpeg')} alt="" srcset="" style={{width:"40px",height:"40px" , borderRadius:"50px"}} />
      <h6  className="image_name">Alex Dan <br /> <div className='image_time'><p>Online</p></div></h6>
      </div>
      <div>
        <BiDotsHorizontalRounded/>
      </div>
    </div>

   <div className='chatinside'>
    <div className='chat1'>
      <img src={require('../images/image2.jpeg')} style={{width:"40px",height:"40px" , borderRadius:"50px"}}  />
      <p>Hello Goodafternoon how was your trip?</p>
    </div>
    <div className='chat2'>
      <img src={require('../images/image5.jpeg')} style={{width:"40px",height:"40px" , borderRadius:"50px"}}  />
      <p>it was a great trip through your travel agency</p>
    
   
   </div>
    
   <div className='files'>
        <p>jennay shane share three files</p>
        <div className='file'>
        <div className='file1'></div>
        <div className='file1'></div>     
        <div className='file1'></div>
        </div>
     </div>
     <div className='chat1'>
      <img src={require('../images/image2.jpeg')} style={{width:"40px",height:"40px" , borderRadius:"50px"}}  />
      <p>This sound good.Thankyou</p>
    </div>

       </div>
  
   <div className='sentmsg'>
     <div className='innermsg'>
     <AiOutlinePlusCircle className="emoji" style={{marginRight:"10px"}}/>
     <input type="text" placeholder='Type a message here...'  />
     <BsEmojiSmile  className="emoji"/>
     <FiSend  className="emoji " style={{color:"#424197"}}/>
     </div>
     <div >
      <BsMicFill className='mic'/>
     </div>
   </div>


   </div>
    </>
  )
}

export default Chating;
