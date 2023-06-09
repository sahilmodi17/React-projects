import React, {useState} from "react";


const Accordion = ({items}) =>{

    const [activeIndex,setActiveIndex] = useState(null);

    const onTitleClicked = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map( (item,i) => {

        const active = i === activeIndex ? 'active' : '';

        return (
        <React.Fragment key={item.title}>
            <div 
                className={`title ${active}`}
                onClick={()=>onTitleClicked(i)}

                // onClick={onTitleClicked(index)}
                // if above statement is written then it will be invoked when our list of items is rendered 
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        );
    });

    return <div className="ui styled accordion">
        {renderedItems}

    </div>;
};

export default Accordion;