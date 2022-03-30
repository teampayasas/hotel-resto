import React,{ useState, useEffect } from "react";
import "../alan/adminModal.css";
function ModalData({ setOpenModal}, e) {
  // let id = this.id;
  // fetch("https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/bookingData")
  //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
      //     for (let i = 0; i < data.length; i++) {
        //       let mongoDB = data[i];
        //     }
        //   })
        // https://dev.to/zettadam/how-to-handle-multiple-modals-in-a-react-application-2pei
    
      // console.log(e.target.id)
      return (
        <div className="Container">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button onClick={() => {setOpenModal(false);}}>X</button>
            </div>
            <div className="title">
              <h1>Edit a booking</h1>
            </div>
            <div className="body">
              <p>The next page looks amazing. Hope you want to go there!</p>
            </div>
            <div className="footer">
              <button onClick={() => {setOpenModal(false);}}>Cancel</button>
              <button>Continue</button>
            </div>
          </div>
        </div>
      );
    }

export default ModalData