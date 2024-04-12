import {Content} from "./Content.jsx";
import {Sidebar} from "./Sidebar.jsx";

const MainPanel = () => {
    return (
        <main className="container p-0">
            <div className="row d-flex mb-3 mb-md-2 mx-2 mx-md-0">
                <Content/>
                <Sidebar/>
            </div>
        </main>
    )
}

export default MainPanel;