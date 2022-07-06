import React from "react";

const DisplayBox = ({displayBox}) =>{
    return <span className={displayBox[0]}>{displayBox[1]}</span>
}

export default DisplayBox;