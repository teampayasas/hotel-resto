import {useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';

const COMMANDS = {
  NEXT_WEEK: 'next week'
}

export default function useAlan() {
function changeWeek (){
  alanBtn.playText('changing')
}

    useEffect(() => {
        alanBtn({
            key:  
              process.env.REACT_APP_ALAN_KEY,
            onCommand: (commandData) => {
              if(commandData.comand === COMMANDS.NEXT_WEEK)
              {
                changeWeek()
              }
              console.log(commandData)
            }
        });
      }, []);
    return null
}
