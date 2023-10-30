import { ClipLoader } from "react-spinners";

export default function Spinner() {

    return (
        <div style={{ width: '100%', height: '100%', margin: 'auto', display: 'block' }}>
            <ClipLoader color="#ffffff" size={100} />
        </div>
    )
}
