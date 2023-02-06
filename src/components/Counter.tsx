import { useState } from "react";
import s from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={s.aboba}>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>plus</button>
      <button onClick={() => setCount((prev) => prev - 1)}>minus</button>
    </div>
  );
};
