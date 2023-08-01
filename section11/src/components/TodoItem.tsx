import { useTodoDispatch } from '../App';
import { Todo } from '../types';

export default function TodoItem(props: Todo) {

  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  }

  return <div>
    {props.id}번 : {props.content}
    <button onClick={onClickButton}>삭제</button>
  </div>
}