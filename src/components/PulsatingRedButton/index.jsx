import "./pulsate.css";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function PulsationRedButton({ children }) {
  return (
    <button className="pulsate flex items-center rounded-lg bg-red-500 px-2 py-3 text-white shadow-lg hover:bg-red-600">
      <IoIosAddCircleOutline />
      <span className="ml-2">{children}</span>
    </button>
  );
}
