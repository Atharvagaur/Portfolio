import { useEffect } from "react";

const MouseGlow = () => {

    useEffect(()=>{

        const glow=document.getElementById("glow");

        window.addEventListener("mousemove",(e)=>{

            glow.style.left=e.clientX+"px";
            glow.style.top=e.clientY+"px";

        })

    },[])

    return(

        <div

            id="glow"

            className="fixed
            w-72
            h-72
            rounded-full
            bg-blue-500/20
            blur-[120px]
            pointer-events-none
            -translate-x-1/2
            -translate-y-1/2
            z-0"

        />

    )

}

export default MouseGlow;