import React from 'react';
import ReactDOM from 'react-dom';
import Shaktipic from './images/Shakti.jpg';
import Lokeshpic from './images/Lokesh.jpg';
import Familypic from './images/Family.jpg';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <SingleComment name='Shakti' date='Today at 5:00 Pm' commentstext = 'Hello' picture={Shaktipic}/>
            </UserCard>
            <UserCard>
                <SingleComment name='Lokesh' date='Today at 6:10 Pm' commentstext = 'Watch it ' picture={Lokeshpic}/>
            </UserCard>
            <UserCard>
                <SingleComment name='Family' date='Today at 7:30 Pm' commentstext = 'ok guys ' picture={Familypic}/>
            </UserCard>
        </div>
       
    )
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)

