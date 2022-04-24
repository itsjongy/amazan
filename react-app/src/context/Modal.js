import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
    const modal = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modal.current);
    }, []);

    return (
        <>
            <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
            <div ref={modal} />
        </>
    );
}

export function Modal({ onClose, children }) {
    const modal = useContext(ModalContext);
    if (!modal) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content">{children}</div>
        </div>,
        modal
    );
}
