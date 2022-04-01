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
      {/* <div> */}
        <div>
          {/* <div> */}
            <h2>
              {item.name} {item.surname}
            </h2>
            <p>{item._id.$oid}</p>
          </div>
          <button
            onClick={openModal}
          >
            Details
          </button>
        {/* </div> */}
      {/* </div> */}
      <StoreItemModal item={item} open={open} closeModal={closeModal} />
    </>
  )
}
