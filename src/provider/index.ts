import { fetchList, fetchContents } from './api';

export const provider = {
  list: fetchList,
  contents: fetchContents,
};
