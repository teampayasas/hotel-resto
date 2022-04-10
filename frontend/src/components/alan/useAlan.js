import { useEffect, useState, useCallback } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

export default function useAlan() {
      useEffect(() => {
        alanBtn({
          key: process.env.REACT_APP_ALAN_KEY,
          onCommand: ({command}) => {
            if (command === 'logout') {
              window.location.href = '/';
            }
          },
          rootEl: document.getElementById("alan-btn"),
    });
  }, []);
}