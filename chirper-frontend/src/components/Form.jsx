import React from 'react';

const Form = (props) => {
    return (
        <form className="container">
            <div className="form-group d-flex flex-column">
                <label>User Name</label>
                <input type="text" id="userName" placeholder="@User name" onChange={props.handleChange} value={props.user} />
            </div>
            <div className="form-group d-flex flex-column" >
                <label >Post</label>
                <textarea name="postText" id="postText" cols="10" rows="2" placeholder="What do you want to say?" onChange={props.handleTextChange} value={props.text} ></textarea>
            </div>
            <button className="btn btn-primary" onClick={props.handleClick} id="submitbtn">Post to your feed</button>
        </form>
    )
}

export default Form