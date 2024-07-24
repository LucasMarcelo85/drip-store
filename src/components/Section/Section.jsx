import { useNavigate } from "react-router-dom";
import "./Section.css";

import PropTypes from "prop-types";

export function Section({ children, title = "", titleAlign = "left", link = '' }) {
    const navigate = useNavigate()

    const handleClick = () => navigate('/produtos');

    return (
        <section
            className="section-container"
            style={{ textAlign: titleAlign }}
        >
            {title != "" || link != "" && 
                <span>
                    {title == "" ? null : <h1>{title}</h1>}
                    {link == "" ? null : <a onClick={handleClick}>{link}</a>}
                </span>
            }   

            <div>{children}</div>
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    titleAlign: PropTypes.string,
    link: PropTypes.string,
};
