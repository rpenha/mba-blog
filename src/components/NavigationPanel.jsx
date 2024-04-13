import {NavLink} from "react-router-dom";

const NavigationPanel = ({heading, items}) => (
    <>
        <div className="h5 border-bottom py-2">{heading}</div>
        <div className="d-flex flex-column p-0">
            {
                items
                    ? items.map(x => <NavLink key={x.id} to={x.to}>{x.caption}</NavLink>)
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