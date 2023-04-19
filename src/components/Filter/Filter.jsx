import { connect } from 'react-redux';
import { setFilter } from 'redux/contacts/slice';
import { getFilter } from 'redux/contacts/selectors';
import s from './Filter.module.css';

function Filter({ filter, setFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={evt => setFilter(evt.target.value)}
        required
      />
    </label>
  );
}

const mapStateToProps = state => ({
  filter: getFilter(state)
});

const mapDispatchToProps = { setFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
