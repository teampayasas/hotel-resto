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
    <>
        <div className="dataLayout">
            <h2>
              {item.name} {item.surname}
            </h2>
            <p>{item._id.$oid}</p>
          <button
            onClick={openModal}
          >
            Details
          </button>
          </div>
          <div className="alan-btn" item={item}></div>
      <StoreItemModal item={item} open={open} closeModal={closeModal} />
    </>
  )
}
