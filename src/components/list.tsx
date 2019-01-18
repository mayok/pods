import React, { useEffect } from "react";
import { IList } from "../interfaces";
import Storage from "../provider/storage";
import { fetchList } from "../provider/api";

// use memo
const List = ({ list, setList, setPod }: IList) => {
  useEffect(
    () => {
      if (list.length === 0) {
        // get from storage
        const storage_value = Storage._get("list");
        if (storage_value) {
          setList(JSON.parse(storage_value));
        }

        // fetch from api
        fetchList().then(v => {
          setList(v);
          Storage._set("list", JSON.stringify(v));
        });
      }
    },
    [list]
  );

  return (
    <div>
      <ul>
        {list.map((l: string) => (
          <li onClick={() => setPod(l)}>{l}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
