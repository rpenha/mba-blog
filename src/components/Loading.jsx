import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHourglassHalf} from "@fortawesome/free-solid-svg-icons";
import Overlay from "./Overlay.jsx";

const Loading = () => {
    const [state, setState] = useState(false);

    useEffect(() => {
        setState(() => true);
    }, []);

    return state && (
        <Overlay>
            <div className="h1 w-100 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faHourglassHalf} className="mx-3"/>Loading...
            </div>
        </Overlay>
    )
}

export default Loading;