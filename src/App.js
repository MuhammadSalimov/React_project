import React from "react";
import Expenses from "./component/Expenses";
import Card from "./UI/Card";
import "./App.css";
import NewExpens from "./component/NewExpens/NewExpens";
import { useState } from "react";

const aRR = [
  {
    name: "Lamborghini",
    price: 450000,
    date: new Date("05-05-2022"),
  },
  {
    name: "Ferrari",
    price: 300000,
    date: new Date("12-27-2022"),
  },
  {
    name: "BMW",
    price: 150000,
    date: new Date("10-08-2021"),
  },
  {
    name: "Mers",
    price: 170000,
    date: new Date("05-05-2020"),
  },
  {
    name: "Bugatti",
    price: 250000,
    date: new Date("04-04-2022"),
  },
  {
    name: "Malibu",
    price: 30000,
    date: new Date("03-03-2020"),
  },
  {
    name: "Nexia",
    price: 9000,
    date: new Date("10-01-2019"),
  },
];

const App = () => {
  const [state, setState] = useState(aRR);
  const getData = (inform) => {
    setState((item) => [...item, inform]);
  };
  return (
    <Card>
      <NewExpens information={getData}  />
      <Expenses data={state} />
    </Card>
  );
};

export default App;
