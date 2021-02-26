import React, { useState, useEffect } from 'react';
const Form = (props) => {
    const [user, userInput] = useState("");
    const [text, textInput] = useState("");
    const [posts, newPosts] = useState([{name:"Han Solo", text:"I'll get Jaba his money"},{name:"Jaba",text:"No you won't we both know that"}])

    
    const handleChange = (e) =>{
        userInput(e.target.value)
        
    }
    const handletextChange = (e) =>{
        textInput(e.target.value)
    }
    const handleClick = (e) =>{
        e.preventDefault();
        // newPosts([...posts,{name:user,text:text}]);
        props.getData({name:user, text:text})
        userInput("")
        textInput("")
    }

    return (
        <form className="container">
            <div className="form-group d-flex flex-column">
                <label>User Name</label>
                <input type="text" id="userName" placeholder="@User name" onChange={handleChange} value={user} />
            </div>
            <div className="form-group d-flex flex-column" >
                <label >Post</label>
                <textarea name="postText" id="postText" cols="10" rows="2" placeholder="What do you want to say?" onChange={handletextChange} value={text} ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleClick} id="submitbtn">Post to your feed</button>
        </form>
    )
}

export default Form