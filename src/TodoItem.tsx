import { memo } from "react";

export type Task = { id: string; desc: string; done: boolean };

interface Props {
  task: Task;
  onClickDone?: (id: string, event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickDelete?: (id: string, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoItem = ({ task, onClickDone, onClickDelete }: Props) => {
  return (
    <div>
      <div>ID: {task.id}</div>
      <div>Task: {task.desc}</div>
      <div>Done: {String(task.done)}</div>
      {!task.done && (
        <button onClick={(event) => onClickDone?.(task.id, event)}>Mark done</button>
      )}
      <button onClick={(event) => onClickDelete?.(task.id, event)}>Delete</button>
    </div>
  );
};

export default memo(TodoItem);
