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
      <div className="lg:w-1/4 w-1/2 p-3">
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {item.name} {item.surname}
            </h2>
            <p>{item._id.$oid}</p>
          </div>
          <button
            onClick={openModal}
            className="text-white py-2 px-4 text-lg bg-purple-500 rounded hover:bg-purple-700"
          >
            Details
          </button>
        </div>
      </div>
      <StoreItemModal item={item} open={open} closeModal={closeModal} />
    </>
  )
}
