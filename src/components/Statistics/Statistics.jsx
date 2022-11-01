import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return <ul>
        <li>
            <p>good: {good}</p>
        </li>
        <li>
            <p>neutral: {neutral}</p>
        </li>
        <li>
            <p>bad: {bad}</p>
        </li>
        <li>
            <p>total: {total}</p>
        </li>
        <li>
            <p>positive percentage: {positivePercentage}%</p>
        </li>
    </ul>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

