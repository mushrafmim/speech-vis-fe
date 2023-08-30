import { ClipLoader } from "react-spinners";
import { predictEmotion } from "../services/emotionService";

export default function Spinner() {


    return (
        <div style={{ width: '100px', margin: 'auto', display: 'block' }}>
            <ClipLoader color="#52bfd9" size={100} />
        </div>
    )
};
