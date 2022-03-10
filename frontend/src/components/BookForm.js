import React, { useState } from "react";

function Form() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [date, setDate] = useState('');
    const [rooms, setRooms] = useState('');
    const [adults, setAdults] = useState('');
    const [kids, setKids] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("This form has been submitted");

        fetch('https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/PostBooking', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({name:name, surname:surname, date:date, rooms:rooms, adults:adults, kids:kids})
        })

        setName("")
        setSurname("")
        setDate("")
        setRooms("") 
        setAdults("")
        setKids("")
    }

    return (
        <section className="form">
            <form onSubmit={(e) => { handleSubmit(e) }} action="/booking" method='POST' className="submit-booking">
                <label for="name"> Name: </label> 
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input> <br/>
                <label for="surname"> Surname: </label>
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}></input> <br/>
                <label for="date"> Date: </label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input> <br/>
                <label for="rooms"> Rooms: </label>
                <input type="number" min="1" step="1" value={rooms} onChange={(e) => setRooms(e.target.value)}></input> <br/>
                <label for="adults"> Adults: </label>
                <input type="number" min="1" step="1" value={adults} onChange={(e) => {setAdults(e.target.value)}}></input> <br/>
                <label for="kids"> Kids: </label>
                <input type="number" min="0" step="0" value={kids} onChange={(e) => {setKids(e.target.value)}}></input> <br/>
                <button type="submit"> Book </button>
            </form>
        </section>
    )
}

export default Form;