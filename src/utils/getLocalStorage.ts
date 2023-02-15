export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) {
    return item as string;
  }
  return null;
}