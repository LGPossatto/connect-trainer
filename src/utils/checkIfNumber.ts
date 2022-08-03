export const checkIfNumber = (e: string) => {
  const num = Number(e);

  if (num !== num) {
    return false;
  }
  return true;
};
