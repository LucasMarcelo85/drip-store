import "./Section.css";

import PropTypes from "prop-types";

export function Section({ children, title = "", titleAlign = "left" }) {
    return (
        <section
            className="section-container"
            style={{ textAlign: titleAlign }}
        >
            <h1>{title}</h1>
            <div>{children}</div>
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    titleAlign: PropTypes.string,
};
