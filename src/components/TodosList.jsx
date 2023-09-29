import PropTypes from 'prop-types';
import TodoItem from '@/components/TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
            key={todo.id}
            itemProp={todo}
            handleChange={handleChange}
            delTodo={delTodo}
            setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.defaultProps = {
  todosProps: [],
  handleChange: () => {},
  delTodo: () => {},
  setUpdate: () => {},
};

TodosList.propTypes = {
  todosProps: PropTypes.array,
  handleChange: PropTypes.func,
  delTodo: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodosList;
