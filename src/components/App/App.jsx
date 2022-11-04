import { useState } from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import { Container } from './App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';


export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleLeaveFeedback = (item) => {    
    switch (item) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  }

  const totalFeedback = () => {
    return good + neutral + bad;
  }

  const positivePercentage = () => {     
    return ((good / totalFeedback()) * 100).toFixed(0);
  }

  return (<>
    <PageTitle>goit react hw 02 feedback</PageTitle>
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback}></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {totalFeedback() ?
          <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback()} positivePercentage={positivePercentage()} /> : <Notification message="There is no feedback" />}
      </Section>
    </Container>
  </>);
}
