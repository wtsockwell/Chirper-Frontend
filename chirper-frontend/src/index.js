import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timeline from './components/Timeline';
import Form from "./components/Form";

const Index = () => {
    return (
        <>
            <App />
            <div className="container d-flex justify-content-between mx-5">
                <div className="col-md-4 ">
                    <div className="border p-3">
                        <Form />
                    </div>
                </div>
                <div className="col-md-7">
                    <Timeline />
                </div>
            </div>
        </>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));