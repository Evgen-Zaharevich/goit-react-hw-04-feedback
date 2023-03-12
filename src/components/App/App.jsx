import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import {
  ContainerApp,
  Container,
  Title,
  SiCoffeescript,
} from 'components/App/App.styled';

import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const arrayButtonName = ['good', 'neutral', 'bad'];

  const handleClick = e => {
    switch (e.target.textContent) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = totalFeedback => {
    if (totalFeedback > 0) {
      return Math.round((good / totalFeedback) * 100);
    } else {
      return 0;
    }
  };

  return (
    <ContainerApp>
      <img
        src="https://phonoteka.org/uploads/posts/2022-01/thumbs/1642968425_1-phonoteka-org-p-kartinki-dlya-fotoshopa-fon-1.jpg"
        alt="pics"
        width="100%"
      />
      <Container>
        <Title>
          <SiCoffeescript />
          Cafe Espresso
        </Title>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={arrayButtonName}
            onLeaveFeedback={handleClick}
          />
        </Section>

        <Section title={'Statistics'}>
          {countTotalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={countTotalFeedback()}
              FeedbackPercentage={countPositiveFeedbackPercentage(
                countTotalFeedback()
              )}
            />
          ) : (
            <Notification massage={'There is no feedback'} />
          )}
        </Section>
      </Container>
    </ContainerApp>
  );
};
