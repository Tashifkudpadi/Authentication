// import React from "react";
// import "./PortfolioList.scss";

// function PortfolioList({ id, title, active, select }) {
//   const selectHandler = () => {
//     select(id);
//   };

//   return (
//     <li
//       className={active ? "portfolioList active" : "portfoilioList"}
//       onClick={selectHandler}
//     >
//       {title}
//     </li>
//   );
// }

// export default PortfolioList;

import "./OperationsList.scss";

export default function PortfolioList({ id, title, active, select, key }) {
  return (
    <button
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => select(id)}
    >
      <span>{title}</span>
    </button>
  );
}
