import React, { useEffect } from "react";
import { IList } from "../interfaces";
import Storage from "../provider/storage";
import { fetchList } from "../provider/api";

// use memo
const List = ({ list, setList, setPod }: IList) => {
  useEffect(
    () => {
      if (!list.length) {
        // get from storage
        const storage_value = Storage._get("list");
        if (storage_value) {
          setList(JSON.parse(storage_value));
        }

        // fetch from api
        // const api_value = fetchList();
        // setList(api_value);

        // Storage._set("list", JSON.stringify(api_value));
      }
    },
    [list]
  );

  return (
    <div>
      {console.log(list, "list")}
      <ul>
        {list.map((l: string) => (
          <li onClick={() => setPod(l)}>{l}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
