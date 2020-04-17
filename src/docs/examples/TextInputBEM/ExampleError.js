import React from 'react';
import TextInput from 'ps-react/TextInputBEM';

/** Required Textbox with error */
class ExampleError extends React.Component{
    render(){
        return(
            <TextInput 
                htmlId = "example-optional"
                label="First Name"
                name="firstname"
                onChange={() => {}}
                required
                error="first name is required"
            />
        );
    }
}

export default ExampleError;