export const sleep = (second: number) => new Promise((resolve) => {
  setTimeout(resolve, second * 1000);
});
