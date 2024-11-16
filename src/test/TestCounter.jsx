import { createContext, useContext, useState } from "react";

function TestCounter() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}
      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Increase icon="+" />
        <Counter.Decrease icon="-" />
        <Counter.Count />
      </Counter>

      <Counter.Label>label</Counter.Label>
      <div>
        <Counter>
          <Counter.Increase icon="👈" />
          <Counter.Count />
          <Counter.Decrease icon="👉" />
        </Counter>
      </div>
    </div>
  );
}

// 1. create a context
const CounterContext = createContext();
// 2. create parent component
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
  return <span>Counter</span>;
}
// 3. create child components to help implementing the common tasty
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}
function Label({ children }) {
  return <span>{children}</span>;
}
function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

// 4. Add child components as properties to parent component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default TestCounter;
