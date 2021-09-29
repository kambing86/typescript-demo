import { memo } from "react";

interface Props {
  task: {
    id: number;
    desc: string;
    done: boolean;
  };
  onClick: (id: number, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoItem = ({ task, onClick }: Props) => {
  return (
    <div>
      <div>ID: {task.id}</div>
      <div>Task: {task.desc}</div>
      <div>Done: {String(task.done)}</div>
      {!task.done && (
        <button onClick={(event) => onClick(task.id, event)}>Mark done</button>
      )}
    </div>
  );
};

export default memo(TodoItem);
