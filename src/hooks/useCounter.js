import { useState } from 'react/cjs/react.development'

export const useCounter = (initialState = 0) => {
    const [counter, setCounter] = useState(initialState);
    return {
        counter,
        increase: () => setCounter(counter + 1),
        decrease: () => setCounter(counter - 1),
        setCounter,
        reset: () => setCounter(initialState)
    }
}
