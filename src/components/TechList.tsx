import type { Technology } from "../types";

import TechCard from "./TechCard";
import Sidebar from "./Sidebar";


interface Props {

  technologies: Technology[];

  stack: Technology[];

  addToStack: (tech: Technology) => void;

  removeFromStack: (id: string) => void;

  removeAll: () => void;

}



const TechList = ({
  technologies,
  stack,
  addToStack,
  removeFromStack,
  removeAll

}: Props) => {


  return (

    <div className="grid lg:grid-cols-4 gap-8">


      <div className="lg:col-span-3">


        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">


          {
            technologies.map((tech)=>(

              <TechCard

                key={tech.id}

                tech={tech}

                stack={stack}

                addToStack={addToStack}

              />

            ))
          }


        </div>


      </div>





      <Sidebar

        stack={stack}

        removeFromStack={removeFromStack}

        removeAll={removeAll}

      />



    </div>

  );

};


export default TechList;