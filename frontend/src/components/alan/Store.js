import StoreItem from "./StoreItem"
import React,{ useState, useEffect } from "react";
export default function Store({ items }) {
  const [users, setUsers] = useState([])
// FETCHING DATA FROM DATABASE
    const fetchData = () => {
      fetch("https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/bookingData")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)      
          // console.log(data)
        })
    }
    // ACCESSING DATA
    useEffect(() => {
      fetchData()
    }, [])

  return (
    <section className="dataDisplay">
          {users.map(item => (
            <StoreItem key={item.id} item={item} />
          ))}
    </section>
  )
}
