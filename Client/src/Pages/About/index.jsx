import React from "react";
import { useCounter } from "../../Context/Counter";

const About = () => {
  const { count, setCount } = useCounter();
  return (
    <div>
      about page
      {count}
      <button onClick={() => setCount((count =>count + 1))}>++</button>
    </div>
  );
};

export default About;
