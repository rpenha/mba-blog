import {useEffect, useState} from "react";

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

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100 fixed-top bg-body">
            {state && <div className="h1">⏳ Loading...</div>}
        </div>
    );
}

export default Loading;