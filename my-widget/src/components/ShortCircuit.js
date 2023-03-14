import React ,{useState,useEffect} from 'react';


const ShortCircuit = () =>{

    const [text,setText] = useState('');
    const firstvalue= text || 'hello world';
    const secondvalue = text && 'how ';

    return (
        <>
        <h2>{text || 'sahil'}</h2>
        <h2>{text && 'savan'}</h2>
        </>
    );
}

export default ShortCircuit; 