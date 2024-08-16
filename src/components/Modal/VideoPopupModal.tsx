import Modal from "@/components/Modal/Modal"
import { MdClose } from "react-icons/md"

interface ModalOpenCloseProps {
    open: boolean;
    handleClose: () => void;
}

const VideoPopupModal = ({ open, handleClose }: ModalOpenCloseProps) => {
    return (
        <Modal open={open} handleClose={handleClose} className="sm:w-[600px] w-full pt-12">
            <div>
                {/* CLOSE BUTTON */}
                <button onClick={handleClose} className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-500">
                    <MdClose size={24} />
                </button>

                {/* VIDEO IFRAME */}
                <iframe
                    className="w-full aspect-video h-[350px] rounded-md"
                    src="https://www.youtube.com/embed/bfDnjbw3DJM?si=q8hsr80IfC6FPVTk"
                    allow="autoplay"
                    allowFullScreen
                ></iframe>
            </div>
        </Modal>
    )
}

export default VideoPopupModal