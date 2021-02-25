import React from 'react';

const Post = (props) =>{
    return(
        <>
        <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </>
    )
}

export default Post