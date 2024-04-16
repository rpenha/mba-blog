import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHourglassHalf} from "@fortawesome/free-solid-svg-icons";
import DropShadow from "./DropShadow";

const Loading = () => {
    const [state, setState] = useState();

    useEffect(() => {
        const timeout = 250;
        window.setTimeout(() => {
            setState(s => ({
                ...s
            }));
        }, timeout)
    }, []);

    return state && (
        <DropShadow>
            <div className="h1">
                <FontAwesomeIcon icon={faHourglassHalf}/> Loading...
            </div>
        </DropShadow>
    )
}

export default Loading;