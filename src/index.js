import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login"
import Navigation from "./Components/Navigation";
import Header from "./Header";

ReactDOM.render(
    <Router>
        {/*<Navigation />*/}
        <Header/>
        <Routes>
            {/*<Route path="/" element={<Header />} />*/}
            <Route path="/login" element={<Login />} />
            <Route path="/navigation" element={<Navigation />} />
           {/* <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />}>
                <Route path="" element={<Posts />} />
                <Route path=":postSlug" element={<Post />} />
            </Route>*/}
        </Routes>
        {/*<Footer />*/}
    </Router>,

    document.getElementById("root")
);

serviceWorker.unregister();
