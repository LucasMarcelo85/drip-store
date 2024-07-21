import PropTypes from "prop-types";

import "./Section.css";

export function Section({ children, title = "" }) {
    return (
        <section className="section-container">
            <h1>{title}</h1>
            {children}
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
};
