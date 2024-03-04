import { useState } from "react";
function Light(){
    const [index, setIndex] = useState(0)
    // function that updetes the state
    const handleNext = () => {
        if(index < images.length -1){
            setIndex(index +1)
    }
}

    // button soo celinaayo
    const handlePrev = () => {
       if(index >0){
        setIndex(index -1)
       }
    }

    const images = [
        "https://img.freepik.com/free-photo/frame-from-flowers-leaves-light-table_23-2148054605.jpg?w=740&t=st=1708342632~exp=1708343232~hmac=389d878aeb8345ab2d3368afd3a780da1fdefaf8f08da2af1a81bcad4d32be63",
        "https://img.freepik.com/free-photo/spectral-light-illuminates-transparent-red-colored-red-roses-abstract-flower-art-generative-ai_157027-1729.jpg?w=996&t=st=1708342658~exp=1708343258~hmac=786664c33e029bc1939c8f9c0b91903736f1918e41bd821cc34f5505b5b7830d",
        "https://img.freepik.com/free-photo/baby-s-breath-flowers-pink-gerbera-flowers-blue-background_23-2148076554.jpg?w=826&t=st=1708342687~exp=1708343287~hmac=26dab1047f5e12b962290255e76633591b78aea69d284a615393ca6f60d13e0e",
        "https://img.freepik.com/free-photo/fresh-pink-petals-beauty-nature-bouquet-generated-by-ai_188544-10355.jpg?w=996&t=st=1708342715~exp=1708343315~hmac=bca1c44e41d4731be670c0807c86ad95bcd6e7668ef8041a97e20f72db88606d"
   
    ]
    
    return (
        <div>
        <div class="bg-pink-500 text-4xl  p-6 text-white">
        <h1 class="ml-10">Explore different images</h1>
    </div>
    <div class="px-14 w-[1150px] py-5 ml-24">
    <img className="w-full h-[450px] rounded-xl" src={images[index]}  alt="" />
    </div>
    <div class="text-center">
        <button onClick={handlePrev} class="bg-pink-500 px-4 py-2 text-4xl text-white rounded hover:bg-pink-200">preview</button>
        <button onClick={handleNext}  class="bg-pink-500 px-4 py-2 text-4xl text-white rounded hover:bg-pink-200 ml-4">next</button>
    </div>
    </div>
      )
}
export default Light;