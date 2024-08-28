import { useRef } from "react";
import "../style/Loading.css";
import { useEffect } from "react";

export default function Loading() {
  let spanNameRef = useRef(null);
  let spanWork = useRef(null);

  useEffect(() => {
    spanNameRef.current.className;
  }, []);

  return (
    <div className="loadingPage">
      <div className="containerNameWorkLoading">
        <span
          className="spanName"
          ref={spanNameRef}
        >
          EVE DUBUISSON
        </span>
        <span
          className="spanWork"
          ref={spanWork}
        >
          UX Engineer
        </span>
      </div>
    </div>
  );
}
