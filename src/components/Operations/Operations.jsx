import React, { useState, useEffect } from "react";
import classes from "./Operations.module.css";

// const data = [
//   {
//     icon: <i class="fas fa-exchange-alt"></i>,
//     title: "Tranfser money to anyone, instantly! No fees, no BS.",
//     para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do,
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut,
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris,
//               nisi ut aliquip ex ea commodo consequat.`,
//   },
//   {
//     icon: <i class="fas fa-home"></i>,
//     title: "Buy a home or make your dreams come true, with instant loans.",
//     para: `   Duis aute irure dolor in reprehenderit in voluptate velit esse
//               cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//               cupidatat non proident, sunt in culpa qui officia deserunt mollit
//               anim id est laborum.`,
//   },
//   {
//     icon: <i class="fas fa-user-times"></i>,
//     title: "No longer need your account? No problem! Close it instantly.",
//     para: `  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//               officia deserunt mollit anim id est laborum. Ut enim ad minim
//               veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
//               ex ea commodo consequat.`,
//   },
// ];

import { InstantTransfer, InstantLoans, InstantClosing } from "../../data";
import OperationsList from "./OperationsList";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "Transfer",
      title: "01 Instant Transfer",
    },
    {
      id: "Loans",
      title: "02 Instant Loans",
    },
    {
      id: "Closing",
      title: "03 Instant Closing",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "Transfer":
        setData(InstantTransfer);
        break;
      case "Loans":
        setData(InstantLoans);
        break;
      case "Closing":
        setData(InstantClosing);
        break;

      default:
        setData(InstantLoans);
    }
  }, [selected]);

  return (
    <>
      <div className={classes.main} id="operation">
        <h2>Operations</h2>
        <p>Everything as simple as possible, but no simpler.</p>
      </div>
      <div className={classes.operation}>
        <div className={classes.btnContainer}>
          {list.map((item) => (
            <OperationsList
              title={item.title}
              active={selected === item.id}
              select={setSelected}
              id={item.id}
              key={item.key}
            />
          ))}
        </div>
        <div className={classes.container}>
          {data.map((d) => (
            <div className={classes.item}>
              <span>{d.icon}</span>
              <h3>{d.title}</h3>
              <p>{d.para}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}
