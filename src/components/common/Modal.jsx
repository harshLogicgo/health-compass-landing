"use client";
import { useRef } from "react";

const Modal = ({ isOpen, onHide, children }) => {
  const modalRef = useRef(null);

  // Disable body scroll when modal is open
  //   useEffect(() => {
  //     if (isOpen) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "";
  //     }

  //     // Cleanup on unmount
  //     return () => {
  //       document.body.style.overflow = "";
  //     };
  //   }, [isOpen]);

  // Close modal if clicked outside content
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onHide();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleBackdropClick}
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-[999] ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Modal Content */}
      <div
        className={`fixed px-4 inset-0 flex items-center justify-center z-[1000] transition-transform duration-300 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
        onClick={handleBackdropClick}
      >
        <div
          ref={modalRef}
          className="bg-white rounded-2xl  p-6 sm:p-9  sm:pb-8 w-full max-w-xl shadow-xl relative"
        >
          <button
            onClick={onHide}
            className="absolute top-2 right-4 text-gray-500 hover:text-black text-3xl"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
