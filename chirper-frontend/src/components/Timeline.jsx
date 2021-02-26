import React from 'react';
import Post from './Post';

const Timeline = (props) => {

    return (
        <div className="container border border-primary border-top-0 border-bottom-0">
            <ul className="list-group">
                {props.posts.map((val,index) => <Post key={(index)} name={val.name} text={val.text} />)}
            </ul>
        </div>
    )
}

export default Timeline