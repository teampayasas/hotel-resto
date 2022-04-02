import { useEffect, useState, useCallback } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
// import ModalData from './dataModel'
// import { item } from "./Store"

export default function useAlan() {
// const [alanInstance, setAlanInstance] = useState()
// console.log(item)
      useEffect(() => {
        alanBtn({
          key: process.env.REACT_APP_ALAN_KEY,
          onCommand: ({command}) => {
            if (command === 'debug') {
              alert("this code was executed")
            }
          },
          rootEl: document.getElementById("alan-btn"),
    });
  }, []);
// return null
}
