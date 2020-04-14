import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Optional Textbox */
class ExampleOptional extends React.Component{
    render(){
        return(
            <TextInput 
                htmlId = "example-optional"
                label="First Name"
                name="firstname"
                onChange={() => {}}
                
            />
        );
    }
}

export default ExampleOptional;