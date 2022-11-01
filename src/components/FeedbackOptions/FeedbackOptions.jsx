import PropTypes from 'prop-types';
import { FeedbackList, FeedbackItem, Button } from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {   
    
    return <FeedbackList>
        {options.map(item => <FeedbackItem key={item}>
            <Button type="button" name={item} onClick={() =>onLeaveFeedback(item)}>{item}</Button>
        </FeedbackItem>)}
    </FeedbackList>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}