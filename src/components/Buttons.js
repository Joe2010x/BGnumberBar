import React, { useState } from 'react'

const Buttons = () => {
    const [style, setStyle] = useState('style1')
    const handleJump = ()=>{
        setStyle('zoom-in-out-box');
        setTimeout(() => {
            setStyle('style1');
        }, 5000);
    }
    return (
        <div >
            This is Buttons
            <button onClick={handleJump}>Jump Display</button>
            <br/>
            <div className={style}>69</div>

            <br/>
            <div className='zoom-in-out-box'>69</div>
        </div>
    )
}

export default Buttons;