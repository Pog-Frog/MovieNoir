import "./css/backdrop.css";

interface BackdropProps {
    className?: string,
    onClose: React.MouseEventHandler<HTMLDivElement>,
    children?: React.ReactNode
}

const Backdrop: React.FC<BackdropProps> = ({ className, children, onClose }) => {
    return (
        <div className={className} onClick={onClose}>
            {children}
        </div>
    );
}

export default Backdrop;