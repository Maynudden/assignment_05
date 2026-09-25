import logo from "../assets/logo-text.png";


const Footer = () => {

  return (

    <footer className="bg-white border-t mt-20">


      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-14
        grid
        grid-cols-1
        md:grid-cols-4
        gap-10
      ">


        {/* Brand */}

        <div>


          <img
            src={logo}
            alt="Dev Stack"
            className="h-8 mb-4"
          />


          <p className="text-gray-500 text-sm leading-6">

            Curated tools, technologies, and resources
            for developers building modern software.

          </p>


          <div className="
            flex
            gap-5
            mt-5
            text-sm
            text-gray-600
          ">

            <a>
              GitHub
            </a>

            <a>
              Twitter
            </a>

            <a>
              LinkedIn
            </a>


          </div>


        </div>





        {/* Product */}

        <div>

          <h3 className="font-semibold mb-4">

            Product

          </h3>


          <ul className="
            space-y-3
            text-sm
            text-gray-500
          ">

            <li>Home</li>

            <li>Technologies</li>

            <li>Projects</li>


          </ul>


        </div>





        {/* Company */}

        <div>


          <h3 className="font-semibold mb-4">

            Company

          </h3>


          <ul className="
            space-y-3
            text-sm
            text-gray-500
          ">


            <li>
              About
            </li>


            <li>
              Contact
            </li>


            <li>
              Careers
            </li>


          </ul>


        </div>





        {/* Legal */}

        <div>


          <h3 className="font-semibold mb-4">

            Legal

          </h3>


          <ul className="
            space-y-3
            text-sm
            text-gray-500
          ">


            <li>
              Privacy Policy
            </li>


            <li>
              Terms of Service
            </li>


          </ul>


        </div>


      </div>





      {/* Bottom Bar */}

      <div className="
        border-t
        py-5
        px-6
        max-w-7xl
        mx-auto
        flex
        justify-between
        text-sm
        text-gray-400
      ">


        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>


        <div className="flex gap-5">

          <span>
            Privacy
          </span>

          <span>
            Terms
          </span>


        </div>


      </div>


    </footer>

  );

};


export default Footer;