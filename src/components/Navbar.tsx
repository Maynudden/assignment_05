import { useState } from "react";

import { Menu, X } from "lucide-react";

import logo from "../assets/logo-text.png";


const Navbar = () => {


  const [open, setOpen] = useState(false);



  return (

    <nav className="
      sticky
      top-0
      z-50
      bg-white
      border-b
      border-gray-100
    ">


      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
      ">


        {/* Mobile Hamburger */}

        <button

          className="
          md:hidden
          "

          onClick={() => setOpen(!open)}

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

        <div className="
          flex
          items-center
          gap-2
        ">

          <img

            src={logo}

            alt="Dev Stack"

            className="h-8"

          />

        </div>






        {/* Desktop Menu */}

        <div className="
          hidden
          md:flex
          gap-8
          text-sm
        ">


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

        <div className="
          flex
          items-center
          gap-4
        ">


          <button className="
            hidden
            sm:block
            text-sm
          ">

            Sign In

          </button>



          <button className="
            bg-gradient-to-r
            from-orange-500
            via-pink-500
            to-violet-500
            text-white
            px-5
            py-2
            rounded-full
            text-sm
          ">

            Sign Up

          </button>


        </div>



      </div>





      {/* Mobile Menu */}

      {
        open && (

          <div className="
            md:hidden
            px-6
            pb-5
            space-y-4
            text-sm
          ">


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



    </nav>

  );

};


export default Navbar;