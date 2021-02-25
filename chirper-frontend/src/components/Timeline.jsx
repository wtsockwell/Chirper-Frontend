import React from 'react';
import Post from './Post'

const Timeline = () =>{
    return(
        <div className="container border border-primary border-top-0 border-bottom-0">
            <Post name='Han Solo' text="Tell Jaba I'll have his money" />
        </div>
    )
}

export default Timeline