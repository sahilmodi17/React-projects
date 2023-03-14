import './seasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer : {
        text: "It's Hot....",
        iconName : 'sun'
    },
    winter :{
        text: "It's cold....",
        iconName : 'snowflake'
    }
}

const getSeason = (lat,month) => {
    // console.log(month);
    if(month>2 && month < 9)
    {
        return lat > 0 ? 'summer' : 'winter'; 
    }else{
        return lat>0 ? 'winter' : 'summer';
    }
}
 


const SeasonDisplay =(props) =>{
/*
// console.log(season);

if(props.err)
{
    return <div> Error : {props.err}<br /> </div>
     }
     return (
         <div>
         Latitude : {props.lat}<br />
         Longitude : {props.long}
         </div>
         
    );
    */
   
   
   
   /*
   Season Config can also be used 
   const text=(season === 'winter' ? "It's cold" : "It's Hot");
   const icon = (season=== 'winter' ? 'snowflake' : 'sun');
   */
  
    const season=getSeason(props.lat, new Date().getMonth());
    const {text,iconName}=seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );

}

export default SeasonDisplay;

// <i class="sun icon"></i>
// <i class="snowflake icon"></i>