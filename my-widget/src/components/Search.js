import React,{useEffect, useState} from 'react';
import axios from 'axios';

const Search = () =>{
    const [term,setTerm] = useState('programming');
    const [results,setResults] = useState([]);

    // console.log(results);

    useEffect(() => {

        const search = async () => {
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params : {
                    action : 'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch: term,
                }
          });

          setResults(data.query.search);
        }

        if(term && !results.length){
            search();
        }
        else{

            const timeoutId = setTimeout(()=>{
                if(term)
                {
                    search();
                }
            },500);
    
            return () =>{
                clearTimeout(timeoutId); 
            };
        }

    }, [term] );
    
    
    // This is cleanUP example

    /*
    useEffect(() => {
        console.log('hi');
        return () =>{
            console.log('cleanup');
        }
    },[term]);

    1) intially function provided to useEffect is called 
    2) return the clean up

    next time 
    1) cleanup is invoked 
    2) func provided to useEffect is called 
    3) return the cleanup

*/


    const renderedResults = results.map((result)=> {
        return <div key={result.pageid} className="item">
            <div className="right floated content">
                <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >
                    Go
                </a>
            </div>
            <div className="content">
                <div className="header">{result.title}</div>
                <span dangerouslySetInnerHTML={{__html : result.snippet}}></span>
            </div>
        </div>
    });


    return (
       <div>
         <div className='ui form'>
            <div className='field'>
                <label>Enter Search Term</label>
                <input
                    value={term} 
                    onChange={e => setTerm(e.target.value)} 
                    className='input' 
                />
            </div>
         </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
       </div>
    );
}

export default Search;