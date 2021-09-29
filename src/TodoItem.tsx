import { memo } from "react";

interface Props {
  id: number;
  task: string;
  done: boolean;
  onClick: (id: number, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoItem = ({ id, task, done, onClick }: Props) => {
  return (
    <div>
      <div>ID: {id}</div>
      <div>Task: {task}</div>
      <div>Done: {String(done)}</div>
      {!done && (
        <button onClick={(event) => onClick(id, event)}>Mark done</button>
      )}
    </div>
  );
};

export default memo(TodoItem);
