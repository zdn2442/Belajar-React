import {useLayoutEffect, useEffect} from 'react';

export default function LayoutEff() {
    
    useLayoutEffect(() => {
      console.log("useLayoutEffect");
    }, []);

    useEffect(() => {
      console.log("useEffect");
    }, [])
    
    return <div></div>
}