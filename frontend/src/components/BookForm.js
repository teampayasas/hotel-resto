import React from "react";

function Form() {

    // const [name] = React.useState("");

    const getValues = event => {
        event.preventDefault();
        // console.log(name)
        console.log(`This has been submitted`)
        console.log(`Testing ${event.target.value}`)
        
    }

    return (
        <section className="form" onSubmit={getValues} >
            <form className="submit-booking">
                <label> Name </label> <br/>
                <input type="text"></input> <br/>
                <label> Surname </label> <br/>
                <input type="text"></input> <br/>
                <label> Date: </label> <br/>
                <input type="date"></input> <br/>
                <label> Rooms: </label> <br/>
                <input type="number" min="1" step="1"></input> <br/>
                <label> Adults: </label> <br/>
                <input type="number" min="1" step="1"></input> <br/>
                <label> Kids: </label> <br/>
                <input type="number" min="0" step="0"></input> <br/>
                <button type="submit"> Book </button>
            </form>
        </section>
    )
}

export default Form;