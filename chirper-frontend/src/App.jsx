import React, { useState } from 'react';
import Timeline from './components/Timeline';
import Form from "./components/Form";

const App = () => {
    const [info, newInfo] = useState("")
    const recieveData = (childData) =>{
        newInfo([...info, childData])
    }
    return(
        <>
        <div className="jumbotron m-4 bg-primary text-white text-center">
        <h1 className="display-4">Welcome to Chirper</h1>
        <p className="text-white">The premier twitter copy, no we don't have a license</p>
        </div>
        <div className="container d-flex justify-content-between mx-5">
                <div className="col-md-4 ">
                <div className="border p-3">
                    <Form getData = {recieveData} />
                </div>
                </div>
                <div className="col-md-7">
                    <Timeline info = {info} />
                </div>
            </div>
        </>
    )
}

export default App;