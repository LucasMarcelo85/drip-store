import PropTypes from "prop-types";

import "./Section.css";

export function Section({ children }) {
    return <section className="section-container">{children}</section>;
}

Section.propTypes = {
    children: PropTypes.node,
};
