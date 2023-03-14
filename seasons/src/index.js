import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

/* const App = () => {

     window.navigator.geolocation.getCurrentPosition(
         (position) => console.log(position),
         (err)=>console.log(err)   
     );

     return (
         <div>Latitude :</div>
     );
 };
*/


class App extends React.Component {

    constructor(props) {

/*      props must be compulsory pass into super function
        it is the refrence to constructor to the base class React.component
        because the constructor of the base class is overwritten by the class App(child)
        if not written then there will be error 
*/
        super(props);
        // this the only time we use direct assignment to the state
        
        
/*      this.state = {
            lat: null,
            long: null,
            errorMessage: ''
        };
*/

/*       window.navigator.geolocation.getCurrentPosition(
             (position) => {
                 // whenever to update sate we use set state 

                 // we never direct assign state use only {}
                 this.setState({ lat: position.coords.latitude });
                 this.setState({ long: position.coords.longitude });
             },
             (err) => {
                 this.setState({ errorMessage: err.message });
             }
         );
*/
    }

    state={lat:null,errorMessage:''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
                this.setState({ long: position.coords.longitude })
            } ,
            (err) => this.setState({ errorMessage: err.message })
            );
    }

    renderContent (){
        if (this.state.errorMessage && !this.state.lat) {
            return <SeasonDisplay err={this.state.errorMessage}/>
        }
        else if (this.state.lat && this.state.long && !this.state.errorMessage) {
            return (

                <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
            );
        }
        else{
            return <Spinner message="Please  Accept  the  location Request "/>;
        }
    }

    render() {
/*
     return (
         <div>
             Latitude: {this.state.lat}<br />
             Longitude: {this.state.long} <br />
             Error Message : {this.state.errorMessage}
         </div>
         );
*/
  
//      #       conditional errror msg      # 

        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}




const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <App />
);









//  functional based componenet there is little delay


//  so class based is used 



