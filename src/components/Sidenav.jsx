import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const Sidenav = () => {

    const [nav, setNav] = useState(false)


    return (
        <div>
            <AiOutlineMenu />

        </div>
    )
}


export default Sidenav