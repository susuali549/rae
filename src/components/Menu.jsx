import react from 'react'

function Menu(props){
    return(
        <div className="flex  gap-5 items-center mt-2">

        
        <img className='w-[240px] h-[140px] ' src={props.image} />
        <div className="">
        <h1 className="font-semibold text-lg">{props.name}</h1>
        <p className=''>{props.paragraph}</p>
        <h1 className="font-bold ">{props.price}</h1>
        <button className="bg-yellow-500 py-2 px-5 rounded mt-2 "> Oder New</button>
        </div>
    </div>


    

    )
}
export default Menu;