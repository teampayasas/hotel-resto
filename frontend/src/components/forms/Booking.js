import React, { useState } from "react";

function BookingForm() {

    return (
    <section className="form-book">
        <form>
            <label for="name"> Name: </label> 
            <input type="text"></input> 
            <label for="surname"> Surname: </label>
            <input type="text"></input>
            <label for="date"> Date: </label>
            <input type="date"></input>
            <label for="rooms"> Rooms: </label>
            <input type="number"></input>
            <label for="adults"> Adults: </label>
            <input type="number"></input>
            <label for="kids"> Kids: </label>
            <input type="number"></input>
            <button type="submit"> Book </button>
        </form>
    </section>
    )

}

export default BookingForm;