import * as React from "react";

import SquadListItem from "./SquadListItem";

const SquadList = ({ heroes, removeFromSquad }: any) => {
  console.log(heroes);

  if (heroes === undefined) {
    return null;
  }
  const squadItems = heroes.map((hero: any) => (
    <SquadListItem
      key={hero.id}
      hero={hero}
      removeFromSquad={removeFromSquad}
    />
  ));

  return (
    <div className="squad-list col-5">
      <div className="row">{squadItems}</div>
    </div>
  );
};

export default SquadList;
