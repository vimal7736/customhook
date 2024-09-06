import { useState } from "react";

export default function useToggle(initaialValue= false){
const [state , setState]= useState(initaialValue)

const toggle = ()=> setState(!state)

return [state , toggle]
}