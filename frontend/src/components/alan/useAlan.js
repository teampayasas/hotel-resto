// import {useEffect} from 'react'
import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import ModalData from './dataModel'


export default function useAlan() {
  useEffect(() => {
    // const createBooking = () => {
    //   // ALAN FETCHES DATA FROM DATABASE
    //   fetch("https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/bookingData")
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     for (let i = 0; i < data.length; i++) {
    //       let mongoDB = data[i];
    //       alert("helllo" + mongoDB._id.$oid)
    //     }
    //   })
    // }
    alanBtn({
      key:  
      'e98b154fd089d01807425dd7b3d167e72e956eca572e1d8b807a3e2338fdd0dc/stage',
      // rootEl: document.getElementById("alan-btn")
      });
    }, []);
    return null
}
