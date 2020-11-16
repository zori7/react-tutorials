import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open modal
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>Modal title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              asperiores consectetur consequatur, deserunt enim illum minima,
              minus, perferendis quia suscipit tempore temporibus? Asperiores
              autem consectetur deleniti laborum nesciunt possimus velit?
            </p>

            <button onClick={() => setIsOpen(false)}>
              Close modal
            </button>
          </div>
        </div>
      )}
    </>
  );
}
