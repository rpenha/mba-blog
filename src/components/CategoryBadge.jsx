export const CategoryBadge = ({category}) => {
    const getClasses = (slug) => {
        const classes = ["badge", "text-decoration-none"];
        const classMap = {
            general: "bg-danger",
            cycling: "bg-success",
            tech: "bg-dark",
            movies: "bg-info"
        };

        return [...classes, classMap[slug] ?? "bg-warning"];
    }

    const classes = getClasses(category.slug);

    return (
        <span
            className={classes.join(" ")}>
            {category.title}
        </span>
    );
}