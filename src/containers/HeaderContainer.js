import {
  changeText,
  createTodo,
} from '../actions/todoAction';
import { connect } from 'react-redux';
import Header from '../components/Header';
export default connect(
  (state) => ({
    todo: state.getIn(['todo', 'todo'])
  }),
  (dispatch) => ({
    onChangeText: (event) => (
      dispatch(changeText({ text: event.target.value }))
    ),
    onCreateTodo: () => {
      dispatch(createTodo());
      dispatch(changeText({ text: '' }));
    }
  })
)(Header);
