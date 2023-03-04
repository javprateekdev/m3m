import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Banner = () => {
  return (
    <div className='banner' id='banner' >
    <Carousel>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://i.imgur.com/l9XCkyq.jpg"
         alt="First slide"
         
       />
       <Carousel.Caption>
       <div>
        <img src="http://m3m-properties.net/m3m-94/images/developer-logo.jpg" style={{position:"relative",top:"1%",zIndex:"10000"}}/>
        <div style={{width:"22%",background:"white",float:"Right",height:"100vh",position:"fixed",right:"0",marginTop:"-80px",padding:"10px"}} className='sidebar'>
      <div style={{display:"flex",marginLeft:"0px"}}>
      <div style={{background:"#434343",width:"55%",height:"55px",margin:"0px",borderBottomLeftRadius:"30px",borderRight:"1px solid white",color:"white",padding:"5px",display:"flex"}}>
        <div style={{fontSize:"18px"}}><img src="https://i.imgur.com/tWQVbyr.png" style={{width:"35px",textAlign:"center"}}/></div>
        <div style={{fontSize:"18px",textAlign:"center",fontWeight:"500"}}>Organize Site Visit</div>
        </div>
      <div style={{background:"#434343",width:"45%",height:"55px",margin:"0px",borderBottomRightRadius:"30px",color:"white",padding:"5px"}}><img src="https://i.imgur.com/hw5F4AO.png" style={{width:"35px"}}/> <span style={{fontSize:"18px",fontWeight:"500"}}>WhatsApp</span></div>
      </div>
      <div style={{marginTop:"60px",width:"100%",textAlign:"center",fontSize:"20px"}}>Pre-Register Here For Best Offers</div>
      <div style={{fontSize:"18px",fontWeight:"700",background:"white",boxShadow:"5px 10px #888888",padding:"10px",height:"40%",borderRadius:"20px",marginTop:"30px"}}>
   
      <form >
    
      <div style={{margin:"20px"}}><input type="text" name="user_name" placeholder=' Enter your name'  required  style={{width:"100%",height:"40px",borderRadius:"5px",padding:"10px"}}/></div>
      
      <div style={{margin:"20px"}}><input type="text"  name="contact_number" placeholder='Contact number' required title="Error Message" pattern="[1-9]{1}[0-9]{9}" style={{width:"100%",height:"40px",borderRadius:"5px",padding:"10px"}}/></div>
     
      <div style={{margin:"20px"}}><input type='email' name="user_email" placeholder='Email Id' required  style={{width:"100%",height:"40px",borderRadius:"5px",padding:"10px"}}/></div>

      <div style={{margin:"20px"}}><input type="submit" value="Send" required style={{height:"35px",width:"100px",margin:"15px",background:"#161a2d",color:"white",fontSize:"20px",borderRadius:"5px",marginLeft:"15px"}}/></div>
    </form>
        
    </div>
    
    </div>
       </div>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://i.imgur.com/2FZaYr8.jpg"
         alt="Second slide"
         style={{height:"100%"}}
       />
 <Carousel.Caption>
       
       </Carousel.Caption>
     
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         src="https://i.imgur.com/l9XCkyq.jpg"
         alt="Third slide"
       />
 <Carousel.Caption>
       
       </Carousel.Caption>
      
     </Carousel.Item>
   </Carousel>
   </div>
  )
}

export default Banner