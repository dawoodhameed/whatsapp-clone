import React, {useEffect} from 'react'

function Test2Component(props) {
    useEffect(() => {
        console.log("I'm still rerendering");
    })
    return (
        <div>
            <h1>{props.check}</h1>
        </div>
    )
}

export default Test2Component
