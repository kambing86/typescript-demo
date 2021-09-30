import { memo } from "react";

/**
 * Dashboard
 * @param {{
 * tasks: Array<{id: string; desc: string; done: boolean }>
 * }} props
 */
const Dashboard = ({ tasks }) => {
  const completed = tasks.filter((t) => t.done).length;
  return (
    <div>
      <div>Task completed: {`${completed} / ${tasks.length}`}</div>
    </div>
  );
};

export default memo(Dashboard);
