import React, { useState } from 'react'


function useToggler(value) {
    const [toggle, setToggle] = useState(value);

    const toggling = () => {
        setToggle(!toggle)
    }

    return [toggle, toggling];
}

export default useToggler; 