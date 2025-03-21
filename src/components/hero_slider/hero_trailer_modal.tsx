import React, { useEffect, useState } from "react";
import useMovie from "../../hooks/useMovie";
import Modal from "../modal/modal";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

interface HeroTrailerModalProps {
    movieId: number;
    IsOpen: boolean;
    close: () => void;
}


const HeroTrailerModal: React.FC<HeroTrailerModalProps> = ({ movieId, IsOpen, close }) => {
    const [videoSRC, setVideoSRC] = useState<string | undefined>(undefined);
    const { data, error, isLoading } = useMovie(movieId);

    useEffect(() => {
        if (error) {
            toast.error("Failed to fetch movies");
        }

        if (data && data.results.length > 0) {
            setVideoSRC(`https://www.youtube.com/embed/${data.results[0].key}`);
        }
    }, [data, error]);

    const closeModal = () => {
        close();
    }

    if (isLoading) {
        return (
            <Modal isOpen={IsOpen} onClose={closeModal} className="flex noBg w-[90%] h-[70%] items-center justify-center">
                <ClipLoader color="#ffffff" loading={true} size={100} />
            </Modal>
        );
    }

    return (
        <Modal isOpen={IsOpen} onClose={closeModal} className="w-[90%] md:w-[80%]">
            <iframe
            className="w-full aspect-video md:aspect-[7/3]"
            title="trailer"
            src={videoSRC}
            ></iframe>
        </Modal>
    );
}

export default HeroTrailerModal;