import { useState } from "react";

import { Menu, X } from "lucide-react";

import logo from "../assets/logo-text.png";


const Navbar = () => {


  const [open, setOpen] = useState(false);



  return (

    <nav
      className="
        sticky
        top-0
        z-50
        bg-white
        border-b
        border-gray-100
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
        "
      >


        <div
          className="
            flex
            items-center
            justify-between
          "
        >



          {/* Mobile Menu */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >

            {
              open
              ?
              <X size={24}/>
              :
              <Menu size={24}/>
            }

          </button>





          {/* Logo */}

          <img
            src={logo}
            alt="Dev Stack"
            className="h-8"
          />






          {/* Desktop Menu */}

          <div
            className="
              hidden
              md:flex
              gap-8
              text-sm
              text-gray-700
            "
          >

            <a className="text-pink-500">
              Home
            </a>

            <a>
              Technologies
            </a>

            <a>
              Projects
            </a>

            <a>
              About
            </a>

            <a>
              Contact
            </a>


          </div>







          {/* Buttons */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >


            <button
              className="
                hidden
                sm:block
                text-sm
              "
            >
              Sign In
            </button>



            <button
              className="
                brand-gradient
                text-white
                px-5
                py-2
                rounded-full
                text-sm
              "
            >
              Sign Up
            </button>


          </div>


        </div>






        {/* Mobile Menu */}

        {
          open && (

            <div
              className="
                md:hidden
                mt-5
                space-y-4
                text-sm
              "
            >

              <a className="block">
                Home
              </a>

              <a className="block">
                Technologies
              </a>

              <a className="block">
                Projects
              </a>

              <a className="block">
                About
              </a>

              <a className="block">
                Contact
              </a>


            </div>

          )
        }



      </div>


    </nav>

  );

};


export default Navbar;