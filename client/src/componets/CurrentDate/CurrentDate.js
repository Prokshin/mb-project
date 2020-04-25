import React from "react";

const CurrentDate = ()=>{
    let dateObj = new Date();
    let month = dateObj.getMonth();
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let output = `${day}/${(month+1)}/${year}`;
    console.log(output)
    return <>{output}</>
}

export default  CurrentDate