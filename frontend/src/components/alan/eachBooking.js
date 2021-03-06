import { useState } from "react"
import BookingModal from "../modals/BookingModal"

export default function EachBooking({ item }) {
  const [open, setOpen] = useState(false)
  function openModal() {
    setOpen(true)
  }
    function closeModal() {
    setOpen(false)
  }
  
  return (
    <div className="bookingData">
    <div className="internalLayout">
        <h2>{item.name} {item.surname}</h2>
        <p>{item._id.$oid}</p>
        </div>
        <button onClick={openModal}>DETAILS</button>
      <BookingModal item={item} open={open} closeModal={closeModal} />
      </div>
  )
}
