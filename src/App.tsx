import Footer from "./components/Footer";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechList from "./components/TechList";

import type { Technology } from "./types";


function App() {


  const [technologies, setTechnologies] = useState<Technology[]>([]);

  const [loading, setLoading] = useState(true);

  const [stack, setStack] = useState<Technology[]>([]);



  // Load JSON Data

  useEffect(() => {

    fetch("/data.json")

      .then((res) => res.json())

      .then((data: Technology[]) => {

        setTechnologies(data);

        setLoading(false);

      })

      .catch((error) => {

        console.error(error);

        setLoading(false);

      });


  }, []);





  // Add Technology

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



    setStack([...stack, tech]);


    toast.success(
      `${tech.name} added to stack`
    );


  };






  // Remove Single Technology

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







  // Remove All

  const removeAll = () => {


    setStack([]);


    toast.info(
      "Stack cleared"
    );


  };







  return (

    <>


      <Navbar />


      <Hero />



      <section className="max-w-7xl mx-auto px-6 py-20">



        <h2 className="text-4xl font-bold mb-3 text-gray-900">


          Explore{" "}


          <span
            className="
            bg-gradient-to-r
            from-orange-500
            via-pink-500
            to-violet-500
            bg-clip-text
            text-transparent
            "
          >

            Technologies

          </span>


        </h2>





        <p className="text-gray-500 mb-10">

          Pick one technology per category to build your ideal stack.

        </p>






        {

          loading ? (


            <div className="text-center py-10">


              <p className="text-gray-500">

                Loading technologies...

              </p>


            </div>



          ) : (



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