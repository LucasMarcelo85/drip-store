import { Link } from "react-router-dom";
import "./Section.css";

import arrowRight from '/svgs/arrow-right.svg';

import PropTypes from "prop-types";

export function Section({ children, title = "", titleAlign = "left", link = '' }) {

    return (
        <section className="section-container" style={{ textAlign: titleAlign }}>
        {(title !== "" || link !== "") && (
            <span>
                {title !== "" && <h1>{title}</h1>}
                {link !== "" && <Link to={link.href}> {link.text} <img src={arrowRight} alt="arrow" /></Link>}
            </span>
        )}
        <div>{children}</div>
    </section>
    );
}

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    titleAlign: PropTypes.string,
    link: PropTypes.object,
};
