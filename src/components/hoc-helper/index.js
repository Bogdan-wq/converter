import {Consumer} from "../context";
import React from "react";



const withLabelsInput = (Input) => {
    return (props) => {
        return (
            <Consumer>
                {
                    ({labels}) => {
                        return (
                            <Input {...props} labels={labels}/>
                        )
                    }
                }
            </Consumer>
        )
    }
}

export default withLabelsInput;