import React, { useEffect } from "react";
import { IList } from "../interfaces";

const List = (props: IList) => {
  useEffect(() => {
    /*
      1. setList (state)
      2. fetch and setList (storage if exists)
      3. fetch and setList (API)
      4. store in storage
     */
    // setList(list);
  });

  return (
    <div>
      <ul>
        {props.list.map((l: string) => (
          <li onClick={() => props.setPod(l)}>{l}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
