import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  const [bgActive, setbgActive] = useState(false)
  const [menu, setmenu] = useState(false)

  const handleImageClick = () => {
      setbgActive(true);
  }
  const menuitems = {
      Features: ['Live Chat', 'Voice Calling' , 'Screen Screen'],
      Option: ['Upgrade Plan', 'Analytics' , 'Working'],
      Learn: ['Courses', 'Tutorials' , 'Lecture'],
      WhoWeAre: ['Team', 'Vision', 'teamBonding'],
      Partnerships: ['Affiliates', 'Resellers', 'learnTech'],
  };
  const imageArray = [
     {
        icon: "📝",
        title: "Earnings for hard work",
        description: "Tie allowance to chores or set up direct deposit.",
     },
  
    {
        icon: "💵",
        title: "Up to 5% on savings*",
        description: "Set savings goals together and reward their good money habits.",
        },  
    {
          icon: "📈",
          title: "Investing for the family",
          description: "Research stocks and ETFs and build long-term wealth. Together.",
    },
    {
          icon: "💳",
          title: "1% Cash back*",
          description: "Smart spending doesn’t go unnoticed. It goes to savings.",
    },
    {
          icon: "⭐",
          title: "Greenlight Level Up™",
          description: "Fun games teach money skills in bite-sized challenges.",
        },
  ]
  return (
         <>
          <nav className="p-5 shadow-md flex gap-3 items-center  justify-between lg:justify-around mycontainer rounded-2xl bg-black font-medium mb-10">
      
              {/* Logo */}
              <h2 className="text-green-400 text-2xl font-bold font-sans">
                GREENLiGHT
              </h2>

              {/* Hamburger Icon (only visible on small screens) */}
              <button
                className="lg:hidden text-3xl text-green-600"
                onClick={() => setmenu(!menu)}
              >
                &#9776; {/* Unicode for ☰ */}
              </button>

              {/* Menu */}
              <div className={`w-full lg:w-auto ${menu ? 'block' : 'hidden'} lg:flex`}>
                <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:space-x-6 mt-4 lg:mt-0 cursor-pointer">
                  {Object.entries(menuitems).map(([title, dropdownItems], index) => (
                    <li key={index} className="relative group cursor-pointer">
                      <div className="flex items-center space-x-1">
                        <span className="text-gray-700 font-medium">{title}</span>
                        <svg
                          className="w-4 h-4 text-green-600 group-hover:rotate-180 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {/* Dropdown */}
                      <div className="font-bold absolute left-0 mt-2 w-64 bg-white border rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transform transition-all duration-200 z-10 pointer-events-none group-hover:pointer-events-auto">
                        <ul>
                          {dropdownItems.map((item, idx) => (
                            <li
                              key={idx}
                              className="px-4 py-2 hover:bg-gray-100 text-gray-700"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
                
               <div className="hidden lg:flex relative mt-4 lg:mt-0 w-full lg:w-auto it lg:top-0 bottom-2">
               <input
                  className="w-full lg:w-auto p-3 border border-green-600 text-lg rounded-2xl outline-none flex items-center"
                  type="text"
                  placeholder="Enter Number"
                />
                <span className="absolute right-1 top-3 lg:right-2 lg:top-2">
                  <button className="bg-yellow-400  px-2 py-1 lg:px-4 lg:py-2 rounded-2xl lg:text-sm">
                    Get Started
                  </button>
                </span>
              </div>
            </nav>
            </>
          )
}
export default Navbar
