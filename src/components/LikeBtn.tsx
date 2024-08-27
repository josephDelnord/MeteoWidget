"use client";
// si on veut un state ou un event (onClick) on doit rendre le composant coté client donc on ajoute la mention ci dessus

import { useState } from "react";

function LikeBtn() {
  const [nbLikes, setNbLikes] = useState(0);
  console.log("rendu du btn likes");

  return (
    <button type="button" onClick={() => setNbLikes(nbLikes + 1)}>
      {nbLikes} ❤️
    </button>
  );
}

export default LikeBtn;
