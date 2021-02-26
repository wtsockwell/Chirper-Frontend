import React, { useState, useEffect } from 'react';
import Post from './Post';
import uuid from "react-uuid"

const Timeline = (props) => {
    
    const [posts, addPosts] = useState([{name:"Meee", text:"React made me unreasonably frustrated and annoyed"},{name:"Mys3lph",text:"I spent close to 16 hours trying to get this stupid thing to work"},{name:"andEyE", text:"This was a trial that I am glad is done and over with"}])
    
    const handleNewPost = () =>{
        addPosts([...posts,props.info])
    }
    console.log(props.info)

    // if(props.info !== ""){
    //     handleNewPost()
    // }

    const chirpArray = posts.map((val,index)=>{
        return val = <Post name={posts[index].name} text={posts[index].text} />
    })
    
    
    const chirps = chirpArray.map(val => {
        return <li className="list-group-item" key={uuid()}>{val}</li>
    })
    
    return (
        <div className="container border border-primary border-top-0 border-bottom-0">
            <ul className="list-group">
                {chirps}
            </ul>

        </div>
    )
}

export default Timeline