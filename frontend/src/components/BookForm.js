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
                <label for="name"> Name: </label> 
                <input type="text"></input> <br/>
                <label for="surname"> Surname: </label>
                <input type="text"></input> <br/>
                <label for="date"> Date: </label>
                <input type="date"></input> <br/>
                <label for="rooms"> Rooms: </label>
                <input type="number" min="1" step="1"></input> <br/>
                <label for="adults"> Adults: </label>
                <input type="number" min="1" step="1"></input> <br/>
                <label for="kids"> Kids: </label>
                <input type="number" min="0" step="0"></input> <br/>
                <button type="submit"> Book </button>
            </form>
        </section>
    )
}

export default Form;