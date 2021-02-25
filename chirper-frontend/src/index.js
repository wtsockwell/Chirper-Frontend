import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Timeline from './components/Timeline'

const Index = () =>{
    return(
        <>
        <App />
        <div className="container">
        <Timeline />
        </div>
        </>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));