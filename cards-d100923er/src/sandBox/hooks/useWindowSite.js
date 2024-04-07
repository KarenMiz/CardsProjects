import { useEffect, useState } from "react";

export default function useWindowSite() {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        const handelResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener("resize", handelResize);

        return ()=> {
            window.removeEventListener("resize" , handelResize);
        }
    }, []);
    return { width, height }; //הסיבה שהיא שולחת סטייט זה כי את הסטיייט הזה נרצה לדפיס. הוא מכיל את המידות גובה ורוחב.
}

