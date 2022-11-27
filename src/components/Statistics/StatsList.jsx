import PropTypes from 'prop-types';
import { Statistics } from '../Statistics/Statistics';

export function StatsList({ stats, title }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(stat => (
          <li key={stat.id}>
            <Statistics stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
}

StatsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
}
