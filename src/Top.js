import React from 'react'
import './style.css'
const Top = () => {
  return (
    <div>

        <div style={{margin: "50px 0",alignItems:"center",position:"relative",lineHeight:"initial",width:"max-content",padding: "20px 90px",backgroundImage: "linear-gradient(to right,#583333, rgb(0 0 0 / 40%), rgb(0 0 0 / 0%)",zIndex:"10000"}}>
            <span style={{transform: "translateY(-50%)", backfaceVisibility: "visible !important", animation: "flip 2s ease infinite",position: "absolute",top: "50%",left:"20px",transform: "translateY(-50%)",fontSize: "88px"}}>₹</span>
             
             <span >Starting At</span>
            <span style={{color:"white",fontWeight:"700"}} > <span style={{color:"#d0c08c",fontWeight:"700"}}>5.92 </span> Cr<span class="star">*</span></span>
             </div>
             <ul class="banner_offers">
                                    <li>
                                        <div class="cont">
                                            <span class="left"><b>0 KM</b></span>
                                            <span class="right">FROM DELHI</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="cont">
                                            <span class="left"><b>2 </b></span>
                                            <span class="right">UNITS PER FLOOR</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="cont">
                                            <span class="left"><b>4</b></span>
                                            <span class="right">TOWERS ONLY</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="cont">
                                            <span class="left"><b>9</b></span>
                                            <span class="right">HOLE EXECUTIVE GOLF COURSE</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="cont">
                                            <span class="left"><b>24/7</b></span>

                                            <span class="right">SECURITY &amp; POWER 
                                            </span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="cont">
                                            <span class="left"><b>17.5 </b></span>
                                            <span class="right">ACRES PROJECT AREA
                                            </span>
                                        </div>
                                    </li>
                                </ul>
        </div>

  )
}

export default Top