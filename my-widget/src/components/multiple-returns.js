import React,{useState,useEffect} from 'react';
import axios from'axios';
const url='https://api.github.com/users';

const MultipleReturns = () =>{

    const [isloading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(true);
    const [data, setData] = useState([]);
    // const [user,setUser] = useState({first: "" , second: ""});
    const [temp, setTemp] = useState({})

   const fetchData = async(url) => {
        const res = await axios.get(url);
            setData(res.data);
            setTemp(data);
    }

    useEffect(()=>{
       fetchData(url);
    },[])


    if(isloading){
        return (
            <div>
                <h1>{temp.login}</h1>
            </div>
        );
    }


    // if(isError){
    //     return (
    //         <div>
    //             {user}
    //         </div>
    //     );
    // }
    

    // return (
    //     <div>
    //         {temp}
    //     </div>
    // )
}

export default MultipleReturns;