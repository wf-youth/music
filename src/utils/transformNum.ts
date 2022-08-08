export const transformNum = (value: number) => {
  let fr = 1000,
    level = 3;

  while (value / fr >= 1) {
    fr *= 10;
    level += 1;
  }

  if (level < 5) return value;

  if (level < 9) return parseInt(String(value / 10000)) + "万";
  return (value / 100000000).toFixed(1) + "亿";
};
