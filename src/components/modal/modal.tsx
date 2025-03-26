import { useEffect, useState } from "react";
import Backdrop from "./backdrop";
import { RiCloseLine } from "react-icons/ri";
import "./css/modal.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
    className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
    const [modalClass, setModalClass] = useState(
        className ? `modal ${className} modal-hidden` : "modal modal-hidden"
    );

    const [backdropClass, setBackdropClass] = useState(
        "backdrop backdrop-hidden"
    );

    const closeModal = () => {
        setModalClass(
            className ? `modal modal-hidden ${className}` :
                "modal modal-hidden");
        setBackdropClass("backdrop backdrop-hidden");
        setTimeout(() => {
            onClose();
        }, 300);
    };

    useEffect(() => {
        if (isOpen) {
            setModalClass(
                className ? `modal modal-visible ${className}` : "modal modal-visible"
            );
            setBackdropClass("backdrop backdrop-visible");
        } else {
            setModalClass(
                className ? `modal modal-hidden ${className}` : "modal modal-hidden"
            );
            setBackdropClass("backdrop backdrop-hidden");
        }
    }, [className, isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <Backdrop className={backdropClass} onClose={closeModal}>
                <div className={modalClass}>
                    <RiCloseLine className="modal-close-icon" onClick={closeModal} />
                    <div className="p-6 md:p-10 w-[100%] h-[100%] overflow-y-auto">
                        {children}
                    </div>
                </div>
            </Backdrop>

        </>
    );
}

export default Modal;