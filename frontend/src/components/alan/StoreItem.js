import { useState } from "react"
import StoreItemModal from "./StoreItemModal"

export default function StoreItem({ item }) {
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
        <button onClick={openModal}>Details</button>
      <StoreItemModal item={item} open={open} closeModal={closeModal} />
      </div>
  )
}
