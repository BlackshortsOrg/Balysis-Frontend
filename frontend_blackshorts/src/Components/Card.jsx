import React from "react";
import { memo } from "react";
import im from '../assets/BalysisLogo.png';
const Card = function({s,detail,name,designation}){
    return(
        <div className="card">
        <div className="card-img">
   {/* <img src={im} alt="card-img"></img> */}
        </div>
        <div className="card-desc">
          <p>{detail}</p>
        </div>
        <div className="card-name">
            <p style={{color:'#41AFFF',fontWeight: '700', fontSize: '18px'}}>{name}</p>
            <p style={{fontWeight:'100'}}>{designation}</p>
        </div>
        </div>
    )
}
export default memo(Card);