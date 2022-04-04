import React, {useState} from 'react';

function UserData() {

    const [users, setUsers] = useState([])

    const handleRequest = (e) => {
        console.log('hola')
        fetch("https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/bookingData")
        .then(response => {
            return response.json()
        })
        .then(result => {
            console.log(result)
            setUsers(result[0])
        })
    }



    return (
    <section className='user-data-holder'>
        {/* <button onClick={handleRequest}> Get Data </button> */}
        
        <h3> Sample Data </h3>
            <ul>
                <p key={users.id}> Name: {users.name} {users.surname} <br/> 
                Date booked: {users.checkIn} to: {users.checkOut} <br/> 
                Rooms: {users.rooms} | Adults: {users.adults} | Kids: {users.kids} </p>
            </ul>
    </section>
  );
}

export default UserData;