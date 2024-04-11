import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import * as contentful from "contentful";
import {ContentfulContext} from "./contexts.js";
import App from "./App.jsx";
import "./index.scss";

const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContentfulContext.Provider value={client}>
            <App/>
        </ContentfulContext.Provider>
    </BrowserRouter>,
)