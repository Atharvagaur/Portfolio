import { useEffect, useState } from "react";

const ProgressBar = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {

        const update = () => {

            const total = document.body.scrollHeight - window.innerHeight;

            setWidth((window.scrollY / total) * 100);

        }

        window.addEventListener("scroll", update);

    }, [])

    return (

        <div

            className="fixed
top-0
left-0
h-1
bg-blue-500
z-999"

            style={{

                width: `${width}%`

            }}

        />

    )

}

export default ProgressBar;