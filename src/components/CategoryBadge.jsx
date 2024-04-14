const CategoryBadge = ({category}) => {
    const getClasses = (slug) => {
        const classes = ["badge", "text-decoration-none"];
        const classMap = {
            general: "bg-danger",
            sports: "bg-success",
            "software-engineering": "bg-smash",
            movies: "bg-info"
        };

        return [...classes, classMap[slug] ?? "bg-dark"];
    }

    const classes = getClasses(category.slug);

    return (
        <span
            className={classes.join(" ")}>
            {category.title}
        </span>
    );
}

export default CategoryBadge;