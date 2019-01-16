import React, { useEffect } from "react";
import { IList } from "../interfaces";

const List = ({ list, setList, setPod }: IList) => {
  useEffect(() => {
    /*
      1. setList (state)
      2. fetch and setList (storage if exists)
      3. fetch and setList (API)
      4. store in storage
     */
    setList(list);
  });

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
