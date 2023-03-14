import React from 'react';
import SearchBar from './SearchBar';
import unsplash  from './Api/unsplash';
import ImageList from './ImageList';

/*

const App = () =>{
    return (
        <div className="ui container" style={{ marginTop : '20px'}}>
            <SearchBar />
        </div>
    );
}

*/


class App extends React.Component {

    state ={images : []}
    // async onSearchSubmit (term) {
        onSearchSubmit = async (term) => {

        const response = await unsplash.get( 
            
            //this is asynchronous request
            '/search/photos',
            {
                //  this query means 'https://api.unsplash.com/search/photos?query=terms(cars,forest...)',
                
                params: { query: term },
            /*   headers: {
                    Authorization: 'Client-ID cTTf7ty5FI5TcZaeowFSyxdnk8fgO5NNV2_nBmd0R44'
                }
            */
            }
        );

        // console.log(response.data.results);
        this.setState({images : response.data.results });
    }

    render() { 
        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onSub={this.onSearchSubmit} />
                {/* <SearchBar onSub={(e) => this.onSearchSubmit(e)} /> */}
                <ImageList images={this.state.images}/>    
            </div>
        );
    }
}

export default App;







/*

    #       Alternate method for that response after async     #
    
    onSearchSubmit(term) {
        // console.log(term);
        axios.get( 
            
            //this is asynchronous request
            'https://api.unsplash.com/search/photos',
            {
                // 'https://api.unsplash.com/search/photos?query=terms(cars,forest...)',
                // this query means 
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID cTTf7ty5FI5TcZaeowFSyxdnk8fgO5NNV2_nBmd0R44'
                }
            }
        ).then((response) => {                      // this is promise 
            console.log(response.data.results);
        });
    }


*/