// import { useEffect, useRef } from "react";

// export function Test() {
//   const elementRef = useRef(null);
//   const elementRef2 = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       for (const entry of entries) {
//         if (entry.isIntersecting) {
//           console.log("It works!");
//         }
//       }
//     });

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }
//     if (elementRef2.current) {
//       observer.observe(elementRef2.current);
//     }
//   }, [elementRef]);

//   return (
//     <>
//       <button ref={elementRef}></button>
//       <button ref={elementRef2}></button>
//     </>
//   );
// }
