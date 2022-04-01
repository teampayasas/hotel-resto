import { useRef } from "react"
import Modal from "react-modal"

Modal.setAppElement("#root")

export default function StoreItemModal({ item, open, closeModal }) {  const quantityRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    const quantity = parseInt(quantityRef.current.value)
    closeModal()
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)"
        },
        content: {
          margin: "10px",
          padding: "0",
          inset: "auto",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }
      }}
    >
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-4 py-4 mx-auto">
          <div className="mx-auto flex items-center">
            <div className="pl-8 py-2">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">You are editing this booking...</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.name} {item.surname}</h1>
              {/* <div className="flex mb-4"> */}
              <ul>
                <li>Name: {item.name} </li>
                <li>Surname: {item.surname}</li>
                <li>Number of Rooms: {item.rooms}</li>
                <li>Number of adults: {item.adults}</li>
                <li>Number of kids: {item.kids}</li>
                <li>Check In date: {item.checkIn}</li>
                <li>Check Out date:{item.checkOut}</li>
                <li>Customer ID: {item._id.$oid}</li>
              </ul>
              <p className="leading-relaxed max-w-lg"></p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </Modal>
  )
}
