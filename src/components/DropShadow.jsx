const DropShadow = ({children}) => {
    return children && (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100 fixed-top w-100 bg-body">
            {children}
        </div>
    )
}

export default DropShadow;