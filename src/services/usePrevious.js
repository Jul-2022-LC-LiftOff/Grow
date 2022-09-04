import { useRef, useEffect } from "react";



export function usePrevious(value){
    const ref = useRef();
    useEffect(()=>{
        ref.current = value;//assigns value of ref to argument
    },[value]); //runs when value of value changes
    return ref.current; //will return the current ref value
}
