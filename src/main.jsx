import React from "react";
import { createRoot } from "react-dom/client"
import './index.css'
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./components/Menu";
import Light from "./component2/Light"

const root = document.getElementById("root")

createRoot(root).render(


  //     <div className="">
  //       <div className="flex justify-around mt-4">
  //       <div >
  //         <img className="w-[130px]" src="src/logo.png" alt="" />
  //       </div>
  //       <ul className="flex gap-16">
  //         <li>Home</li>
  //         <li>About</li>
  //         <li>Products</li>
  //       </ul>
  //       </div>
  //       <div className="flex justify-around mx-32 mt-14">
  //       <div className="w-[400px] mt-8">
  //       <p className="font-semibold">New Products</p>
  //       <h1 className="text-4xl font-semibold mt-2">Flexible Chair</h1>
  //       <p className="mt-2">Lorem quam quae corporis repellat veritatis cupiditate inventore ratione temporibus!</p>
  //     <button className="px-4 py-2 bg-orange-600 text-white mt-2">Show Now</button>

  //     </div>
  //     <div className="">
  //     <div >
  //         <img className="w-[300px] h-[260px]" src="sawirada/homeImage.png" alt="" />
  //       </div>
  //       </div>
  //     </div>

  //     <p className="text-center mt-9">feutures</p>

  //     <div className=" flex gap-24 ml-[19%] mt-11">
  // <div className="w-[120px] h-[120px] border-[1px] border-black rounded-full">
  // <img className="w-[40px] h-[30px] mt-7 ml-9" src="sawirada/bed.png" alt="" />
  //   <h1 className="text-center">Badroom</h1>
  // </div>

  // <div className="w-[120px] h-[120px] border-[1px] border-black rounded-full">
  // <img className="w-[40px] h-[30px] mt-7 ml-9" src="sawirada/living.png" alt="" />
  //   <h1 className="text-center">Badroom</h1>
  // </div>

  // <div className="w-[120px] h-[120px] border-[1px] border-black rounded-full">
  // <img className="w-[40px] h-[30px] mt-7 ml-9" src="sawirada/drinking.png" alt="" />
  //   <h1 className="text-center">Badroom</h1>
  // </div>

  // <div className="w-[120px] h-[120px] border-[1px] border-black rounded-full">
  // <img className="w-[40px] h-[30px] mt-7 ml-9" src="sawirada/lounch.png" alt="" />
  //   <h1 className="text-center">Badroom</h1>
  // </div>

  //     </div>
  //     </div>
  
  // qeebta kle
//   <div>
//     <Header />
// <div className="grid grid-cols-[400px_400px] justify-around mt-2 ">
//     <Menu image="https://img.freepik.com/free-photo/baked-chicken-wings-with-teriyaki-sauce_2829-19754.jpg?t=st=1708978185~exp=1708981785~hmac=f4290d0a9f02972712a3903ceff05fd36b55eb6637f9abd2e0bd38fd8be7255e&w=826" name="Australian Food" paragraph="Paid Delivery" price="20$" />
//     <Menu image="https://img.freepik.com/free-photo/clay-plate-full-appetizers-including-goldy-chicken-nuggets-with-chrispy-crust-delicious-canapes-with-herring-cherry-tomatoes-served-with-garlic-sauce-decorated-with-salad-leaves-cheese_132075-13068.jpg?w=826&t=st=1708981502~exp=1708982102~hmac=af967c39cbd6128f21d23d341310e9389839902e05757f5127399647aaa322f0" name=" Poland Food" paragraph="Paid Delivery" price="20$" />
//     <Menu image="https://img.freepik.com/free-photo/meatballs-with-vegetables-tomato-sauce_1220-7420.jpg?w=826&t=st=1708981002~exp=1708981602~hmac=a3f7d17d0651d4e9e6b4645993107ad113f550cebf1a6ee900c16d96517961e9" name="Kenyan Food" paragraph="Free Delivery" price="30$" />

//     <Menu image="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600" name="Ameracan Food" paragraph="Free Delivery" price="25$" />
//     <Menu image="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" name="Turkish Food" paragraph="Indian Delivery" price="36$" />
// <Menu image="https://img.freepik.com/free-photo/baked-chicken-wings-with-teriyaki-sauce_2829-19754.jpg?t=st=1708978185~exp=1708981785~hmac=f4290d0a9f02972712a3903ceff05fd36b55eb6637f9abd2e0bd38fd8be7255e&w=826" name="Somalian Food" paragraph="Free Delivery" price="40$" />
// </div>
//     <Footer />
   
//   </div>


// compnentiga light //
<div>
<Header />
<Light />
<Footer />
</div>

)

