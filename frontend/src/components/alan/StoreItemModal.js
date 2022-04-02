import Modal from "react-modal"


Modal.setAppElement("#root")

export default function StoreItemModal({ item, open, closeModal }) {   

  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.0)",
        },
        content: {
          border: "0",
          margin: "10px",
          padding: "1%",
          inset: "auto",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }
      }}
    >
      <section>
        <div>
          <div>
            <div className = "modalContent">
              <h3>You are editing this booking...</h3>
              <h1>{item.name} {item.surname}</h1>
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
              <div className="alan-btn"></div>
              
            </div>
          </div>
        </div>
      </section>
    </Modal>
  )
}
