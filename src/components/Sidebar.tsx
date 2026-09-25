import type { Technology } from "../types";


interface Props {

  stack: Technology[];

  removeFromStack: (id: string) => void;

  removeAll: () => void;

}


const Sidebar = ({
  stack,
  removeFromStack,
  removeAll

}: Props) => {


  return (

    <div className="
      border
      border-gray-200
      rounded-xl
      p-5
      bg-white
      h-fit
    ">


      <h2 className="text-xl font-bold">
        Your Stack
      </h2>


      <p className="text-sm text-gray-400 mt-1">

        {stack.length} Technology Selected

      </p>



      {
        stack.length === 0 ? (

          <div className="
            border
            border-dashed
            rounded-lg
            mt-5
            py-8
            text-center
            text-gray-400
          ">

            Your stack is empty.

          </div>

        ) : (


          <div className="mt-5 space-y-3">


            {
              stack.map((item)=>(

                <div

                  key={item.id}

                  className="
                  flex
                  items-center
                  justify-between
                  border
                  rounded-lg
                  p-3
                  "

                >


                  <div className="flex items-center gap-3">


                    <img

                      src={item.icon}

                      alt={item.name}

                      className="w-8 h-8"

                    />


                    <div>

                      <h3 className="text-sm font-semibold">

                        {item.name}

                      </h3>


                      <p className="text-xs text-gray-400">

                        {item.category}

                      </p>


                    </div>


                  </div>



                  <button

                    onClick={() => removeFromStack(item.id)}

                    className="
                    text-gray-400
                    hover:text-red-500
                    "

                  >

                    ✕

                  </button>


                </div>

              ))

            }


          </div>


        )

      }



      {
        stack.length > 0 && (

          <button

            onClick={removeAll}

            className="
            mt-6
            w-full
            border
            border-red-300
            text-red-500
            py-2
            rounded-lg
            "

          >

            Remove All

          </button>

        )
      }



    </div>

  );

};


export default Sidebar;