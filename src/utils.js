// @ts-check

/**
 * To calculate percentage in string
 * @param {number} num
 * @param {number} total
 * @returns
 */
export const calculatePercentage = (num, total) => {
  if (total === 0) return (0).toFixed(2);
  return ((num / total) * 100).toFixed(2);
};
