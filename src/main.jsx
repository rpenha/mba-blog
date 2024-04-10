import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import * as contentful from "contentful";
import {ContentfulContext} from "./contexts.js";
import App from "./App.jsx";
import "./index.scss";

const client = contentful.createClient({
    space: "xj8ro83rjak0",
    accessToken: "6KOghxHcVYr8fUT9cSZqy09FfC4HXlDEwglrxngkJqM",
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContentfulContext.Provider value={client}>
            <App/>
        </ContentfulContext.Provider>
    </BrowserRouter>,
)