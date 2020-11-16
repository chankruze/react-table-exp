/*
Author: chankruze (chankruze@geekofia.in)
Created: Fri Nov 06 2020 00:29:20 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  // debounce event listener
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 2000);

  return (
    <span>
      Search:
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};
