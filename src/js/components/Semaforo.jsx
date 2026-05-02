import { useState } from "react"

function Semaforo() {

    const [color, setColor] = useState("")

    return (
        <div className="d-flex flex-column align-items-center gap-3 p-3 bg-dark rounded" style={{ width: "120px" }}>

            <div 
                className={color === "red" ? "rounded-circle bg-danger shadow" : "rounded-circle bg-danger opacity-50"}  
                style={{ width: "60px", height: "60px" }} 
                onClick={()=>  setColor("red")}
            
            ></div>

            <div 
                className={color === "yellow" ? "rounded-circle bg-warning shadow" : "rounded-circle bg-warning opacity-50"} 
                style={{ width: "60px", height: "60px" }} 
                onClick={()=> setColor("yellow")}
            
            ></div>

            <div 
                className={color === "green" ? "rounded-circle bg-success shadow" : "rounded-circle bg-success opacity-50"} 
                style={{ width: "60px", height: "60px" }} 
                onClick={()=> setColor("green")}
            
            ></div>

        </div>
    )
}


export default Semaforo