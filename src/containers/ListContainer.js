import { deleteTodo } from '../actions/todoAction';
import { connect } from 'react-redux';
import List from '../components/List.js';
export default connect(
  (state) => ({
    todos: state.getIn(['todo', 'todos'])
  }),
  (dispatch) => ({
    onDeleteTodo: (index) => () => (
      dispatch(deleteTodo({ index }))
    )
  })
)(List);
