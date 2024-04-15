const Picture = ({title, src}) => (
    <div className="d-flex m-0 align-items-center flex-column mb-4 p-2 shadow-sm">
        <img className="mx-auto d-block img-fluid mb-1 w-100" src={src}
             alt={title}/>
        <cite className="text-muted">
            <small>{title}</small>
        </cite>
    </div>
)

export default Picture;