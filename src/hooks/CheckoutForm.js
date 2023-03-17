import { useState } from "react";

const useCheckout = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const validation = validateValue(enteredValue);
    const inValid = !validation && isTouched;
   const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
   }
   const inputBlurHandler = () => {
        setIsTouched(true);
   }
   const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
   }
    return{
        value: enteredValue,
        inValid,
        inputChangeHandler,
        inputBlurHandler,
        valid: validation,
        reset,

    }
};
export default useCheckout;