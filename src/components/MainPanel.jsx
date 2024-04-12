import {Content} from "./Content";
import {Sidebar} from "./Sidebar";

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