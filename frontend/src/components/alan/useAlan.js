// import {useEffect} from 'react'
import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


export default function useAlan() {
  // console.log("part 1 is working")
  useEffect(() => {

    const fetchData = () => {
      fetch("https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/bookingData")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
          console.log(data)
        })
    }

    alanBtn({
      key:  
      'e98b154fd089d01807425dd7b3d167e72e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({command}) => {
        if(command === 'testCommand'){
          console.log('users')
          alert('this is different :)')
            }
        if(command === 'alertCommand'){
          alert('you opened the alert!')
            }
          }
      });
    }, []);
    return null
}
