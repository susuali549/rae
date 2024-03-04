import { useState } from "react";
function Light(){
    const [color, setColor] = useState("")
    // kan daminaayo
    const handleOn = () => {
        setColor("pink")
    }
    // kan daminaayo
    const handleof = () => {
        setColor("")
    }
    return(
        <div className="flex justify-center mt-5">
        <div>
        <div style={{backgroundColor : color}} className="h-[300px] w-[300px] border-2 border-black rounded-full "> </div>
           <button onClick={handleOn} className="bg-orange-500 text-3xl text-white px-3 py-3 rounded ml-16">ON</button>
           <button onClick={handleof} className="bg-orange-500 text-3xl text-white px-3 py-3 rounded m-3">OF</button>
             

             
           
       
        </div>
        </div>
    )
}
export default Light;