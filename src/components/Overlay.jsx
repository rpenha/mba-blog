import {useEffect} from "react";

const Overlay = ({children}) => {
    useEffect(() => {
    }, []);
    return children && (
        <div className="d-flex justify-content-center align-items-center vw-100 vh-100 position-absolute top-0 start-0 bg-body">
            {children}
        </div>
    )
}

export default Overlay;