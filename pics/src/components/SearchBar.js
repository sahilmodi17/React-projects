import React from 'react';

class SearchBar extends React.Component {

    state = { term: ' ' };

    onFormSubmit = (event) => {
        event.preventDefault();
        // above satement is used to prevent the page to refresh when enter is pressed to submit
        // console.log(this.state.term);
        this.props.onSub(this.state.term);
    }

    

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={ this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} 
                        // onChange={(e) => this.setState({term : e.target.value.toUpperCase()})} 
                        // this .toUpperCase is used to convert the text in uppercase
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;


/*

    #    Alternate Syntax for event handler    #

    <input type="text" placeholder='Search....' onChange={ (event) => console.log(event.target.value)}/>

    #     Uncontrolled Event Handlers     #


    <input type="text" placeholder='Search....' onChange={this.onInputChange} />

    onInputChange(event) {
        console.log(event.target.value);

        // gives the value which is written in the search bar 
    }

*/