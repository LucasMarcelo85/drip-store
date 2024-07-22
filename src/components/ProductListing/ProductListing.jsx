import "./ProductListing.css";

import PropTypes from "prop-types";

import { Section } from "../Section/Section";

export function ProductListening({ children }) {
    return (
        <Section>
            {children}
        </Section>
    );
}

ProductListening.propTypes = {
    children: PropTypes.node,
};

