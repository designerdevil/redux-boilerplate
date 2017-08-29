import React from 'react';

const ModuleButton = (props) => {
        return( 
            <div>
            <h1>Open console and click on button to init the Module</h1>
            <button onClick={props.onClickVal}>Click Me</button>
            <ul>
                <li>this will show you previous state</li>
                <li>action triggered</li>
                <li>next state after init action</li>
            </ul>
            </div>
        )
    };

export default ModuleButton;
