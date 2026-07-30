import { motion } from "framer-motion";

const Background = () => {

    return (

        <div className="fixed inset-0 -z-50 overflow-hidden">

            <motion.div

                animate={{

                    x:[0,200,0],
                    y:[0,-150,0]

                }}

                transition={{

                    duration:18,
                    repeat:Infinity

                }}

                className="absolute w-137.5 h-137.5
                bg-blue-600/20 blur-[140px]
                rounded-full -top-30 -left-25"

            />

            <motion.div

                animate={{

                    x:[0,-180,0],
                    y:[0,120,0]

                }}

                transition={{

                    duration:22,
                    repeat:Infinity

                }}

                className="absolute w-112.5 h-112.5
                bg-purple-600/20 blur-[130px]
                rounded-full bottom-0 right-0"

            />

        </div>

    )

}

export default Background;