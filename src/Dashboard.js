// @ts-check
import { memo } from "react";
import { calculatePercentage } from "./utils";

/**
 * Dashboard
 * @param {{
 * tasks: Array<{id: string; desc: string; done: boolean }>
 * }} props
 */
const Dashboard = ({ tasks }) => {
  const completed = tasks.filter((t) => t.done).length;
  const total = tasks.length;
  const percentage = calculatePercentage(completed, total);
  return (
    <div>
      <div>Task completed: {`${completed} / ${total}`}</div>
      <div>Percentage: {`${percentage}%`}</div>
    </div>
  );
};

export default memo(Dashboard);
