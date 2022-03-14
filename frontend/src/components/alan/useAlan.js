// import {useEffect} from 'react'
import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


export default function useAlan() {
  // console.log("part 1 is working")
  useEffect(() => {
    alanBtn({
      key:  
      'e98b154fd089d01807425dd7b3d167e72e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({command}) => {
        if(command === 'testCommand'){
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
