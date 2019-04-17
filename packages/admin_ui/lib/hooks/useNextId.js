import { useState } from "react";

let i = 0;
export const useNextId = () => {
  const [nextId] = useState(++i);
  return nextId;
};
