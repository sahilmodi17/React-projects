import React from "react";

class ImageCard extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {spans : 0};
        this.imageRef = React.createRef();
        //  this this.imageRef is instance becuase we cant us ethis in the future
    }

    componentDidMount()
    {
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans = () =>{
        const height= this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);

        this.setState ({spans});
        // it is equal to this.setState({spans : spans})
        // state property having same name
    }

    render()
    {

        const {description ,urls} = this.props.image;

        return(
            // <div style={{ gridRowEnd : `span ${this.state.spans}` }}>
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}

                    
                />
            </div>
        );
    }
}

export default ImageCard ;