import { useState } from "react";
import { nextId } from "@eshop/common";

export const useNextId = prefix => {
  const [id] = useState(nextId(prefix));
  return id;
};
