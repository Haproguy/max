import Button from '../ui/button';
import styles from './results-title.module.scss';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('KR-ko', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles.title}>
      <Button link='/events'>Show all events</Button>
      <h1>Events in {humanReadableDate}</h1>
    </section>
  );
}

export default ResultsTitle;
