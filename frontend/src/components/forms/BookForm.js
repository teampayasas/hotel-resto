import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect } from "react";
// import { application } from "express";

function Form() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [rooms, setRooms] = useState('');
    const [adults, setAdults] = useState('');
    const [kids, setKids] = useState('');
    const [disable, setDisable] = useState(true);

    //Paypal
    // https://www.unimedia.tech/2021/10/09/paypal-checkout-integration-with-react/
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("This form has been submitted");

        fetch('https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/PostBooking', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({name:name, surname:surname, checkIn:checkIn, checkOut:checkOut, rooms:rooms, adults:adults, kids:kids})
        })
        setDisable(false)
        setName("")
        setSurname("")
        setCheckIn("")
        setCheckOut("")
        setRooms("") 
        setAdults("")
        setKids("")
    }

    //Creates a PayPal order
    const createOrder = (data, actions) => {
        return actions.order
        .create({
            purchase_units: [{
                description: "Hotel room",
                amount: {
                    currency_code: "USD",
                    value: 1
                },
            }],

            application_context: {
                shipping_preference: "NO_SHIPPING",
            },
        })
        .then((orderID) => {
            setOrderID(orderID);
            return orderID;
        })
    };
    //Check approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function(details) {
            const { payer } = details;
            setSuccess(true);
        })
    }
    //Capture likely errors
    const onError = (data, actions) => {
        setErrorMessage("An error occured with your payment");
    };

    useEffect(() => {
        if(success) {
            alert('Payment and booking successful :)')
        }
    })

    return (
        <section className="BookingForm">
            <form onSubmit={(e) => { handleSubmit(e) }} action="/booking" method='POST' className="submit-booking">
                <label for="name"> Name: </label> 
                <input type="text" placeholder="Luisa" value={name} required onChange={(e) => setName(e.target.value)}></input>
                <label for="surname"> Surname: </label>
                <input type="text" placeholder="Madrigal" value={surname} required onChange={(e) => setSurname(e.target.value)}></input>
                <label for="date"> Check In: </label>
                <input type="date" value={checkIn} required onChange={(e) => setCheckIn(e.target.value)}></input>
                <label for="date"> Check Out: </label>
                <input type="date" value={checkOut} required onChange={(e) => setCheckOut(e.target.value)}></input>
                <label for="rooms"> Rooms: </label>
                <input type="number" placeholder="1" min="1" step="1" value={rooms} required onChange={(e) => setRooms(e.target.value)}></input>
                <label for="adults"> Adults: </label>
                <input type="number" placeholder="2" min="1" step="1" value={adults} required onChange={(e) => {setAdults(e.target.value)}}></input> <br/>
                <label for="kids"> Kids: </label>
                <input type="number" placeholder="2" min="0" step="0" value={kids} required onChange={(e) => {setKids(e.target.value)}}></input>
                <button type="submit"> Book </button>
                {/* <button disabled={disable}> Pay </button> */}
                <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons disabled={disable} style={{ layout: "horizontal", buttonSize: 'responsive', color:"silver", shape:"pill"}} createOrder={createOrder} onApprove={onApprove} onError={onError} />
                </PayPalScriptProvider>
            </form>
            {/*.paypal-button-container */}
            {/* <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons disabled={disable} style={{ layout: "horizontal" }} createOrder={createOrder} onApprove={onApprove} />
            </PayPalScriptProvider> */}
        </section>
    )
}

export default Form;