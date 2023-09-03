import React, { useEffect, useRef, useState } from 'react'


export default function useDragDivider() {
    const [width, setWidth] = useState(50);
    const dragging = useRef(false);
    const divider_position = useRef(null);

    const onMouseDown = (e) => {
        dragging.current = true;
        divider_position.current = e.clientX
        console.log(`Divider Position :- ${e.clientX}`)
    }

    useEffect(() => {
        const onMouseUp = (e) => {
            dragging.current = false
        }

        const onMouseMove = (e) => {
            if (dragging.current) {
                const percentage_change = (e.clientX / window.innerWidth) * 100;
                setWidth(percentage_change)
                document.getElementById("leftplane").style.width = width + "%"
            }
        }
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mousemove", onMouseMove);
        return () => {
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mousemove", onMouseMove);
        }
    }, [width, setWidth])

    return onMouseDown
}