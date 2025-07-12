// import React from 'react'
// import { useState } from 'react';

// const Navbar = () => {
//   const [bgActive, setbgActive] = useState(false)
//   const [menu, setmenu] = useState(false)

//   const handleImageClick = () => {
//       setbgActive(true);
//   }
//   const menuitems = {
//       Features: ['Live Chat', 'Voice Calling' , 'Screen Screen'],
//       Option: ['Upgrade Plan', 'Analytics' , 'Working'],
//       Learn: ['Courses', 'Tutorials' , 'Lecture'],
//       WhoWeAre: ['Team', 'Vision', 'teamBonding'],
//       Partnerships: ['Affiliates', 'Resellers', 'learnTech'],
//   };
//   const imageArray = [
//      {
//         icon: "📝",
//         title: "Earnings for hard work",
//         description: "Tie allowance to chores or set up direct deposit.",
//      },
  
//     {
//         icon: "💵",
//         title: "Up to 5% on savings*",
//         description: "Set savings goals together and reward their good money habits.",
//         },  
//     {
//           icon: "📈",
//           title: "Investing for the family",
//           description: "Research stocks and ETFs and build long-term wealth. Together.",
//     },
//     {
//           icon: "💳",
//           title: "1% Cash back*",
//           description: "Smart spending doesn’t go unnoticed. It goes to savings.",
//     },
//     {
//           icon: "⭐",
//           title: "Greenlight Level Up™",
//           description: "Fun games teach money skills in bite-sized challenges.",
//         },
//   ]
//   return (
//          <>
//           <nav className="p-5 shadow-md flex gap-3 items-center  justify-between lg:justify-around mycontainer rounded-2xl bg-white font-medium mb-10">
      
//               {/* Logo */}
//               <h2 className="text-green-400 text-2xl font-bold font-sans">
//                 GREENLiGHT
//               </h2>

//               {/* Hamburger Icon (only visible on small screens) */}
//               <button
//                 className="lg:hidden text-3xl text-green-600"
//                 onClick={() => setmenu(!menu)}
//               >
//                 &#9776; {/* Unicode for ☰ */}
//               </button>

//               {/* Menu */}
//               <div className={`w-full lg:w-auto ${menu ? 'block' : 'hidden'} lg:flex`}>
//                 <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:space-x-6 mt-4 lg:mt-0 cursor-pointer">
//                   {Object.entries(menuitems).map(([title, dropdownItems], index) => (
//                     <li key={index} className="relative group cursor-pointer">
//                       <div className="flex items-center space-x-1">
//                         <span className="text-gray-700 font-medium">{title}</span>
//                         <svg
//                           className="w-4 h-4 text-green-600 group-hover:rotate-180 transition-transform duration-200"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </div>

//                       {/* Dropdown */}
//                       <div className="font-bold absolute left-0 mt-2 w-64 bg-white border rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transform transition-all duration-200 z-10 pointer-events-none group-hover:pointer-events-auto">
//                         <ul>
//                           {dropdownItems.map((item, idx) => (
//                             <li
//                               key={idx}
//                               className="px-4 py-2 hover:bg-gray-100 text-gray-700"
//                             >
//                               {item}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Search + Button */}
//               <div className="hidden lg:flex relative mt-4 lg:mt-0 w-full lg:w-auto it lg:top-0 bottom-2">
//                 <input
//                   className="w-full lg:w-auto p-3 border border-green-600 text-lg rounded-2xl outline-none flex items-center"
//                   type="text"
//                   placeholder="Enter Number"
//                 />
//                 <span className="absolute right-1 top-3 lg:right-2 lg:top-2">
//                   <button className="bg-yellow-400  px-2 py-1 lg:px-4 lg:py-2 rounded-2xl lg:text-sm">
//                     Get Started
//                   </button>
//                 </span>
//               </div>
//             </nav>
        
//         <main className='mycontainer p-4 shadow-md rounded-4xl bg-white font-medium items-center'>
//           <section className='flex flex-col lg:flex-row items-center justify-around gap-5 lg:gap-10 ml-5'>
//            <span className='my-20 lg:my-50 text-left max-w-lg'>
//             <h2 className='font-bold text-4xl mb-4 '>The money and
//               <br/>
//               satety app for 
//               <br/>families
//             </h2>
//             <p className='font-medium text-3xl mb-8'>Learn to save, invest ,build create, and 
//               stay safe. Together
//             </p>
//           <div className='relative mb-8'>
//               <input className=" flex justify-between p-3 border border-green-500 text-xl rounded-2xl cursor-pointer outline-0" type="text"  placeholder='Enter Number'
//               />
//               <span className="absolute left-40 top-1.5 cursor-pointer ">
//                 <button className='bg-yellow-400 px-3 py-3 rounded-2xl text-sm font-bold'>Get Started</button>
//               </span>
//           </div>
//             <p className='font-normal text-xl mb-8'>Learn how we collect and use your information by visiting our 
//             <u>Privacy Statement</u>
//             </p>
//            </span>

//            <div className={`rounded-3xl p-3 cursor-pointer transition duration-300 ${
//               bgActive ? 'bg-ibelick' : ''
//            }`}
//            onClick={handleImageClick}
//            >
//                <img className='rounded-3xl my-6 max-w-full w-[350px] lg:w-[500px] transform transition duration-300 hover:scale-110' src='Image/image27.png'></img>       
//           </div>      
//           </section>

//          <div>
//              <h3 className='font text-4xl text-center mb-10'>A debit card for kids and teens. And then some</h3>
//               <div className="max-w-7xl mx-auto p-4">
//            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center cursor-pointer transform transition duration-100 ">
//           {imageArray.map((item, idx) => (
//             <div key={idx} className="flex flex-col items-center">
//               <div className="bg-gray-100 p-5 rounded-3xl text-5xl ">{item.icon}</div>
//               <h3 className="font mt-4 text-2xl">{item.title}</h3>
//               <p className="text-lg mt-2 font-normal text-black">{item.description}</p>
//             </div>
//           ))}
//         </div>
//        </div>
//           </div>
//           <section className='flex flex-col lg:flex-row items-center justify-around ml-5'>
//             <span className='my-30 lg:my-50 text-left max-w-lg '>
//           <h2 className='font-bold text-4xl mb-3'>Teach smart
//               <br/>
//               spending
//               </h2>
//               <p className='font-semibold text-xl mb-5'
//               >Greenlight is the loved, trusted banking and debit card for kids and teens. Parent set flexible contrils and get real-time 
//                notifications of their kids money activity. Every swipe earn 1% cash back to savings. </p>
//               <button className="bg-blue-600 p-5 border border-blue-600 rounded-3xl px-15 py-3 text-white text-xl">Learn more</button>
//               </span>
//             <div className="ml-2">
//               <img className="transform transition duration-300 hover:scale-110 max-w-full w-[450px] lg:w-[600px]" src='Image/image22.png' />
//             </div>
//           </section>
//         </main>
//       </>
//   )
// }

// export default Navbar

// import React, { useState } from "react";
// import { useRef } from "react";


// const Manage = () => {
//   const [username , setUsername] = useState("");
//   const [password , setPassword] = useState("");
//   const [Confirm , setConfirm] = useState("");
//   const ref = useRef();
//   const ref1 = useRef();
//   const ref2 = useRef();
//   const ref3 = useRef();
//   const showPassword = () => {
//     if (ref.current.type === "password") {
//       ref.current.type = "text";
//       ref2.current.src = "Image/eye.png";
//     } 
//     else {
//        ref.current.type = "password"
//        ref2.current.src = "Image/invisible.png"
//     }
//   }
//   const showPassword1 = () => {
//     if (ref1.current.type === "text") {
//       ref1.current.type = "password"
//       ref3.current.src = "Image/eye.png"
//     } else {
//       ref1.current.type = "text"
//       ref3.current.src = "Image/invisible.png"
//     }
//   }

//   const savePassword = () => {
//     console.log("username:" , username)
//     console.log("password:" , password)
//     console.log("Confirm:" , Confirm)
//   }

//   return (
//     <>
//       <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
//       <div className="mycontainer rounded-3xl max-w-4xl">
//         <h1 className=" text-4xl font-bold text-center">
//           <span className="text-purple-700 "> &lt;</span>
//           Gu
//           <span className="text-purple-700">Ru /&gt;</span>
//         </h1>
//         <p className=" text-lg text-center text-purple-800 font-bold">
//           Its Your own Password Manage
//         </p>
//         <div className="text-black flex flex-col p-3 gap-3 text-xl items-center ">
//           <input  
//             className=" bg-white rounded-full border border-purple-700 w-full p-5 py-1"
//             type="text"
//             name=""
//             id=""
//             placeholder="Username Name"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <div className="flex w-full justify-between p-2 gap-2">
//             <div className="relative">
//             <input
//               ref={ref}
//               className="bg-white rounded-full border border-purple-700 w-full p-5 py-1"
//               type="password"
//               name=""
//               id=""
//               placeholder="Passward"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//               <span onClick={showPassword} className=" absolute right-1 top-2 cursor-pointer" >
//                 <img
//                   ref={ref2}
//                   className="p-1"
//                   width={30}
//                   src="Image/invisible.png"       
//                   alt="eye"
//                 />
//               </span>
//             </div>
//             <div className="relative">
//               <input
//                 ref={ref1}
//                 className="bg-white rounded-full border border-purple-700 w-full p-5 py-1"
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={password}
//                 onChange={(e) => setConfirm(e.target.value)}
//               />
//               <span className=" absolute right-1 top-2 cursor-pointer" onClick={showPassword1} >
//                 <img
//                   ref={ref3}  
//                   className="p-1"
//                   width={30}
//                   src="Image/invisible.png"
//                   alt="eye"
//                   />
//               </span>
//             </div>
//           </div>
//           <button className=" border-2 border-purple-400 text-white font-bold text-xl flex justify-center items-center bg-purple-600 rounded-full px-4 py-2 hover:bg-purple-700 w-fit" onClick={savePassword}>
//             <lord-icon
//               src="https://cdn.lordicon.com/xuoapdes.json"
//               trigger="hover"
//             ></lord-icon>
//             Add Card
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Manage;
