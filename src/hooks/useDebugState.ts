import React, { useEffect } from 'react';

export const useDebugState = (state: any, name: string) => {
  useEffect(() => {
    console.log(name, state);
  }, [state]);
};
