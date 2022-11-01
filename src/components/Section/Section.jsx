import PropTypes from 'prop-types';
import { Paper, SectionTitle } from "./Section.styled";

export const Section = ({ title, children }) => {
    return <Paper>
        <SectionTitle>{title}</SectionTitle>
        {children}
    </Paper>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}