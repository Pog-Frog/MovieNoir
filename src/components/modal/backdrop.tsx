import "./css/backdrop.css";

interface BackdropProps {
    className?: string,
    onClose: React.MouseEventHandler<HTMLDivElement>
}

const Backdrop: React.FC<BackdropProps> = ({ className, onClose }) => {
    return (
        <div className={className}/>
    );
}

export default Backdrop;