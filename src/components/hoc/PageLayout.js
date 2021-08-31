import React from "react";
import {Link} from "react-router-dom";
import "./PageLayout.scss";

const PageLayout = ({pageTitle, children}) => {
    return (
        <>
            <header>
                <h1>{pageTitle}</h1>
            </header>
            <div className="wrap">
                <div className="sidebar">
                    <Link to="/">Home</Link>
                    <Link to="/cat">Cat</Link>
                    <Link to="/dog">Dog</Link>
                    <Link to="/fox">Fox</Link>
                </div>
                <main className="content">
                    {children}
                </main>
            </div>
        </>
    )
}

export default PageLayout;