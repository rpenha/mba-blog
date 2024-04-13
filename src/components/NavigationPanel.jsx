import {NavLink} from "react-router-dom";

const NavigationPanel = ({heading, items}) => (
    <>
        <div className="h5 border-bottom py-2">{heading}</div>
        <div className="d-flex flex-column p-0">
            {
                items
                    ? items.map(x => <NavLink className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" key={x.id} to={x.to}>{x.caption}</NavLink>)
                    : <TextPlaceholder/>
            }
        </div>
    </>
)

const TextPlaceholder = () => (
    <div className="d-grid gap-2">
        <span className="placeholder col-6"></span>
        <span className="placeholder w-75"></span>
        <span className="placeholder w-75"></span>
        <span className="placeholder w-25"></span>
        <span className="placeholder w50"></span>
    </div>
)

export default NavigationPanel;