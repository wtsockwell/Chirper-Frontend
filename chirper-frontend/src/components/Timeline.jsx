import React from 'react';
import Post from './Post';

const Timeline = (props) =>{
    const chirpArray = [<Post name="Han Solo" text="I'll get Jaba his money"/>, <Post name="Jaba" text="No you won't Solo, we both know that."/>]

    console.log(chirpArray)
    const chirps = chirpArray.map(val=>{
        return <li className="list-group-item">{val}</li>
    })

    return(
        <div className="container border border-primary border-top-0 border-bottom-0">
            <ul className="list-group">
                {chirps}
            </ul>
            
        </div>
    )
}

export default Timeline