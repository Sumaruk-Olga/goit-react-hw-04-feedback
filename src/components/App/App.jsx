import { Component } from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import { Container } from './App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  handleLeaveFeedback = (item) => {
    this.setState(prevState => {
      return ({
        ...prevState,
        [item]: prevState[item] + 1,
      })
    });
  };
  
  totalFeedback = () => Object.values(this.state).reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

  
  positivePercentage = () => {
    return Number(((this.state.good / this.totalFeedback()) * 100).toFixed(0));
  }
  
  render() {
    const {state, handleLeaveFeedback, totalFeedback, positivePercentage } = this;
    const { good, neutral, bad } = state;
    const options = Object.keys(state);
    return (<>
    <PageTitle>goit react hw 02 feedback</PageTitle>
      <Container>        
        <Section title="Please leave feedback"> 
          <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback}></FeedbackOptions>
        </Section> 
        <Section title="Statistics">
          {totalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback()} positivePercentage={positivePercentage()} />  : <Notification message="There is no feedback"/>}           
        </Section>
      </Container>
      </>
    );
  }
}