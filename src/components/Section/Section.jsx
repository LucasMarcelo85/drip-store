import "./Section.css";

import arrowRight from '../../../public/svgs/arrow-right.svg';

import PropTypes from "prop-types";

export function Section({ children, title = "", titleAlign = "left", link = '' }) {

    return (
        <section className="section-container" style={{ textAlign: titleAlign }}>
        {(title !== "" || link !== "") && (
            <span>
                {title !== "" && <h1>{title}</h1>}
                {link !== "" && <a href={link.href}> {link.text} <img src={arrowRight} alt="arrow" /></a>}
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
