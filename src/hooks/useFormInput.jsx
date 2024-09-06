import { useState } from "react"

export default function useFormInput(initailValue) {
    const [value, setValue] = useState(initailValue);
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange: handleChange,
    }
}