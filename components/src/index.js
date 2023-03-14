import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import faker from 'faker';
import { faker } from '@faker-js/faker';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';
import './style/App.css';
import Data from './data';


// this was function based components

const App = () => {
    
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45 PM"
                    comment="Nice Blog Post!"
                    src={faker.image.avatar()}
                    />
            </ApprovalCard>


            <ApprovalCard>
            <CommentDetail
                author="Mark"
                timeAgo="Today at 6:00 AM"
                comment="It's awsome... "
                src={faker.image.avatar()}
                />
            </ApprovalCard>


            <ApprovalCard>
            <CommentDetail
                author="Julie"
                timeAgo="Yesterday 8:30 PM"
                comment="I like the subject."
                src={faker.image.avatar()}
            />
            </ApprovalCard>

            



        </div>
    );
}

// ReactDOM.render(<App /> ,document.querySelector('#root'));

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <App />
)




// props --> it is the things when we use the function for the duplicacy
//           and change the data according to the users