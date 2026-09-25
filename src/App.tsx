import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechList from "./components/TechList";
import Footer from "./components/Footer";

import type { Technology } from "./types";



function App() {


  const [technologies, setTechnologies] = useState<Technology[]>([]);

  const [loading, setLoading] = useState(true);

  const [stack, setStack] = useState<Technology[]>([]);





  // Load technology data

  useEffect(() => {


    fetch("/data.json")

      .then((res) => res.json())

      .then((data: Technology[]) => {

        setTechnologies(data);

        setLoading(false);

      })


      .catch((error) => {


        console.error(
          "Failed to load technologies:",
          error
        );


        setLoading(false);


        toast.error(
          "Failed to load technologies"
        );


      });


  }, []);







  // Add technology

  const addToStack = (tech: Technology) => {


    const alreadyAdded = stack.find(

      (item) => item.id === tech.id

    );



    if (alreadyAdded) {


      toast.warning(
        "Technology already added!"
      );


      return;

    }





    setStack([

      ...stack,

      tech

    ]);



    toast.success(

      `${tech.name} added to your stack`

    );


  };








  // Remove technology

  const removeFromStack = (id: string) => {



    const removed = stack.find(

      (item) => item.id === id

    );




    setStack(

      stack.filter(

        (item) => item.id !== id

      )

    );




    toast.info(

      `${removed?.name} removed`

    );



  };








  // Remove all

  const removeAll = () => {


    setStack([]);



    toast.success(

      "Stack cleared successfully"

    );


  };







  return (

    <>


      <Navbar />


      <Hero />





      <section className="
        max-w-7xl
        mx-auto
        px-6
        py-20
      ">




        <h2 className="
          text-4xl
          font-bold
          mb-3
          text-gray-900
        ">


          Explore{" "}



          <span

            className="
              brand-gradient-text
            "

          >

            Technologies


          </span>



        </h2>






        <p className="
          text-gray-500
          mb-10
        ">


          Pick one technology per category to build your ideal stack.


        </p>







        {


          loading ?



          (

            <div className="
              flex
              justify-center
              py-10
            ">


              <div

                className="
                  w-10
                  h-10
                  border-4
                  border-gray-200
                  border-t-pink-500
                  rounded-full
                  animate-spin
                "

              ></div>



            </div>


          )



          :



          (


            <TechList


              technologies={technologies}


              stack={stack}


              addToStack={addToStack}


              removeFromStack={removeFromStack}


              removeAll={removeAll}


            />


          )


        }




      </section>





      <Footer />



    </>

  );

}



export default App;