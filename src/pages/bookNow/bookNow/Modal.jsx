import { FaTimes } from "react-icons/fa";
const Modal = ({ room }) => {
  return (
    <dialog id="id" className="modal">
      <form method="dialog" className="modal-box w-11/12 max-w-5xl">
        {/* modal close btn */}
        <button className="absolute right-3 top-3 bg-red-500 p-2 text-xl text-white rounded-full">
          <FaTimes />
        </button>

        <div></div>
        <h3 className="font-bold text-lg">{room.name}</h3>
        <p className="py-4">Click the button below to close</p>
        {/* <div className="modal-action"></div> */}
      </form>
    </dialog>
  );
};

export default Modal;
