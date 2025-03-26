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

    return (
        <Modal isOpen={IsOpen} onClose={closeModal} className="w-[100%] md:w-[70%] min-h-[40vh] flex items-center justify-center">
            {(isLoading || !videoSRC) ? (
                <div className="flex items-center justify-center h-[40vh]">
                    <ClipLoader color="#ffffff" loading={true} size={100} />
                </div>
            ) :
                (
                    <iframe
                        className="w-full aspect-video md:aspect-[7/3]"
                        title="trailer"
                        src={videoSRC}
                    ></iframe>
                )
            }
            
        </Modal>
    );
}

export default HeroTrailerModal;