import React,{useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import MultipleReturns from "./components/multiple-returns";
import ShortCircuit from "./components/ShortCircuit";

const items =[
    {
        title : 'What is react',
        content : 'React is a front end js framework'
    },

    {
        title : 'Why use react ?',
        content : 'React is a favourite JS library '
    },
    {
        title : 'How do you use React ?',
        content : 'You use React by creacting components '
    }
]

const options = [
    {
        label: 'The Color Red',
        value : 'red'
    },
    {
        label: 'The Color Blue',
        value : 'blue'
    },
    {
        label: 'The Color Green',
        value : 'green'
    },
]

export default () => {

    // const [selected, setSelected] = useState(options[0]);

    return (
        <div>
           <ShortCircuit />
        </div>
    ); 

};