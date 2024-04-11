export const Sidebar = () => {
    return (
        <section className="col-sm-12 col-md-3 mb-3 mb-md-0">
            <div className="sticky-md-top d-grid gy-2">
                <div className="py-2 ">
                    <div className="h5 border-bottom py-2">Categories</div>
                    <div className="d-flex flex-column p-0">
                        <a href="#">Lorem ipsum</a>
                        <a href="#">Dolor sit amet</a>
                        <a href="#">Consectetur adipisicing</a>
                        <a href="#">Architecto autem delectus</a>
                        <a href="#">Facere maxime molestiae</a>
                    </div>
                </div>

                <div className="py-2 ">
                    <div className="h5 border-bottom py-2">Authors</div>
                    <div className="d-flex flex-column p-0">
                        <a href="#">Lorem ipsum</a>
                        <a href="#">Dolor sit amet</a>
                        <a href="#">Consectetur adipisicing</a>
                        <a href="#">Architecto autem delectus</a>
                        <a href="#">Facere maxime molestiae</a>
                    </div>
                </div>
            </div>
        </section>
    );
}