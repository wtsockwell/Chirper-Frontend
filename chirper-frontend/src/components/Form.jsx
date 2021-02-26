import React, { useState } from 'react';
import Post from "./Post";
import Timeline from "./Timeline"

const Form = () => {
    const [user, userInput] = useState("");
    const [text, textInput] = useState("");
    
    const handleChange = (e) =>{
        userInput(e.target.value)
    
    }
    const handletextChange = (e) =>{
        textInput(e.target.value)
    }
    const handleClick = (e) =>{
        e.preventDefault();
        let newPost = <Post name={user} text={text} />;
        <Timeline post={newPost}/>
        userInput("")
        textInput("")
    }

    return (
        <form className="container">
            <div className="form-group d-flex flex-column">
                <label for="userName">User Name</label>
                <input type="text" id="userName" placeholder="@User name" onChange={handleChange} value={user} />
            </div>
            <div className="form-group d-flex flex-column" >
                <label for="postText" >Post</label>
                <textarea name="postText" id="postText" cols="10" rows="2" placeholder="What do you want to say?" onChange={handletextChange} value={text} ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Post to your feed</button>
        </form>
    )
}

export default Form