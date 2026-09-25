import type { Technology } from "../types";
import { FaStar } from "react-icons/fa";


interface Props {

  tech: Technology;

  stack: Technology[];

  addToStack: (tech: Technology) => void;

}


const TechCard = ({
  tech,
  stack,
  addToStack

}: Props) => {


  const isAdded = stack.some(
    (item) => item.id === tech.id
  );


  return (

    <div className="border border-gray-200 rounded-xl p-5 bg-white">


      <div className="flex justify-between items-start">

        <img
          src={tech.icon}
          alt={tech.name}
          className="w-12 h-12"
        />


        <span className="
          text-xs
          bg-purple-100
          text-purple-600
          px-3
          py-1
          rounded-full
        ">
          {tech.badge}
        </span>


      </div>



      <h2 className="text-xl font-semibold mt-5">
        {tech.name}
      </h2>



      <p className="text-gray-500 text-sm mt-2">
        {tech.description}
      </p>



      <div className="flex justify-between text-sm mt-5">

        <span className="
          bg-gray-100
          px-3
          py-1
          rounded-full
        ">
          {tech.category}
        </span>


        <span>
          {tech.difficulty}
        </span>


      </div>



      <div className="flex items-center gap-1 mt-4">

        <FaStar className="text-yellow-500"/>

        <span>
          {tech.rating}
        </span>

      </div>



      <button

        disabled={isAdded}

        onClick={() => addToStack(tech)}

        className={`
          mt-5
          w-full
          py-2
          rounded-lg
          text-white

          ${
            isAdded
            ?
            "bg-gray-400 cursor-not-allowed"
            :
            "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500"
          }

        `}

      >

        {
          isAdded
          ?
          "✓ Added to Stack"
          :
          "Add to Stack"
        }


      </button>



    </div>

  );

};


export default TechCard;