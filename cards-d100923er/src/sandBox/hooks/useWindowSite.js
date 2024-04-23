import { useEffect, useState } from "react";

export default function useWindowSite() {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        const handelResize = () => {
            setWidth(window.innerWidth); //מה שקורה איך שהעמוד עולה מגדירים את הגובה והרוחב להיות במידה של החלון איך שהעמוד נפתח
            setHeight(window.innerHeight);
        };
        window.addEventListener("resize", handelResize); // השורה הזאת תתבצע בכל שינוי סטייט

        return ()=> {
            window.removeEventListener("resize" , handelResize); // שהקומפוננטה יורדת מתוצגה: נכבה את הליסנר
        }
    }, []);
    return { width, height }; //הסיבה שהיא שולחת סטייט זה כי את הסטיייט הזה נרצה לדפיס. הוא מכיל את המידות: גובה ורוחב.
}

