export const _set = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const _get = (key: string): string => {
  return localStorage.getItem(key) || "";
};
