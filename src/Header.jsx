import {useState} from 'react'

function Header(){
    const [isOpen , setIsOpen] = useState(false)
    // function that handle open action
    const handleIsOpen = () =>
{
    setIsOpen(true)
}
  return(
        <div className="">
        <div className="bg-teal-500 p-5 flex justify-between text-white">
            <h1 className="font-semibold text-white text-center text-3xl">Light</h1>
            <i onClick={handleIsOpen} class="fa-solid fa-bars text-5xl font-bold sm:hidden"></i>
             <ul className="hidden sm:flex gap-16 text-2xl ">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
             </ul>
             
             

             </div>
             <div className="">
<ul style={{display : isOpen == true ? "flex" : "" }} className="hidden bg-orange-500 text-white flex-col space-y-5  gap-16 text-2xl ">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
             </ul>

</div>
        </div>
        
    )
}
export default Header;