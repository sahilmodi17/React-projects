// import the react and reactdom libraries

import React from 'react';
import ReactDOM from 'react-dom';

// const buttonText = ()=>{
//     return 'click  me';
// }

//create a react component 
const Ppp= () => {

    // const buttonText='HiThere';
    // const buttonText=['hi','f'];
    // const buttonText=[1,2,3];
    const buttonText ={app:'click me'};

    // object cannot be use as jsx
    // but when .key_name used we can access it

    return (
        <div>
            <label class="label" for="name">Enter name:</label>
            {/* class -----> className
                simple class represented as class (oop concept)

                for -------> htmlFor 
                because only for is considered as simple for loop 

            */}
            <input type="text" id="name" />
            <button style={{backgroundColor:'blue', color:'white'}} >{buttonText.app}</button>
        </div>
    )
}


// Take the react component and show it on the screen 
ReactDOM.render(<Ppp/>,document.querySelector('#root'));
