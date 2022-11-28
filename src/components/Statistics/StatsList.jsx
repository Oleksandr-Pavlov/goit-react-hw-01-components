import PropTypes from 'prop-types';
import { Statistics } from '../Statistics/Statistics';
import css from '../Statistics/StatsList.module.css'

export function StatsList({ stats, title }) {
  return (
    <section className={css.statWrapper}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map(stat => (
          <li
            className={css.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={stat.id}
          >
            <Statistics stat={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
}


