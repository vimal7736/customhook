import { useState } from "react";

export default function useLocalStorage(key, initial) {
  const [storage, setStorage] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initial;
  });

  const setValue = (value) => {
    setStorage(value);
    window.localStorage.setItem(key, JSON.stringify(value));
    console.log(value,"sdfghj");
    
  };

  return [storage, setValue];
}
