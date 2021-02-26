import React, { useState } from 'react';
import Timeline from './components/Timeline';
import Form from "./components/Form";

const App = () => {
    
    const [posts, setPosts] = useState([
        { name: "Meee", text: "React made me unreasonably frustrated and annoyed" },
        { name: "Mys3lph", text: "I spent close to 20 hours trying to get this stupid thing to work" },
        { name: "andEyE", text: "This was a trial that I am glad is done and over with" }
    ]);

    const [user, setUserInput] = useState("");
    const [text, setTextInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleTextChange = (e) => {
        setTextInput(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        setPosts([...posts, { name: user, text: text }]);
        setUserInput("")
        setTextInput("")
    }

    return (
        <>
            <div className="jumbotron m-4 bg-primary text-white text-center">
                <h1 className="display-4">Welcome to Chirper</h1>
                <p className="text-white">The premier twitter copy, no we don't have a license</p>
            </div>
            <div className="container d-flex justify-content-between mx-5">
                <div className="col-md-4 ">
                    <div className="border p-3">
                        <Form handleChange={handleChange} handleTextChange={handleTextChange} handleClick={handleClick} user={user} text={text} />
                    </div>
                </div>
                <div className="col-md-7">
                    <Timeline posts={posts} />
                </div>
            </div>
        </>
    )
}

export default App;