// import React from "react";

// const WorkItems = ({ item }) => {
//   return (
//     <div className="work__card" key={item.id}>
//       <img src={item.image} alt="" className="work__img" />
//       <h3 className="work__title">{item.title}</h3>
//       <a
//         className="work__button"
//         href={item.href}
//         target={item.target}
//       >
//         Demo
//         <i className="bx bx-right-arrow-alt work__button-icon"></i>
//       </a>
//     </div>
//   );
// };

// export default WorkItems;

import React, { useState } from "react";

const WorkItems = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`work__card ${expanded ? "expanded" : ""}`} key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a className="work__button" href={item.href} target={item.target}>
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      <button
        className="work__expand-button"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Collapse" : "Expand"}
      </button>
      {expanded && (
        <div className="work__expand-text">
          <p>{item.description}</p>
          <hr />
          <p>{item.feature}</p>
        </div>
      )}
    </div>
  );
};

export default WorkItems;
