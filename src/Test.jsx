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

function add2(nombre) {
  if (nombre == null) {
    return null;
  }
  return nombre + 2;
}

test("add2 to 6 should be equal to 8", () => {
  jest.expect(add2(6)).toBe(8);
});

test("add2 to null should be equal to null", () => {
  jest.expect(add2(null)).toBe(null);
});

function createDivChild(child) {
  return <div>{child}</div>;
}

test("createDivChild(salut) should be equal to 8", () => {
  jest.expect(createDivChild("salut")).toBe(<div>"salut"</div>);
});

test("add2 to null should be equal to null", () => {
  jest.expect(add2(null)).toBe(null);
});
