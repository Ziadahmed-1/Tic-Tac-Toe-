import { useState } from "react";

const Player = function ({ intialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(intialName);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleNameChange(e) {
    e.preventDefault();
    setPlayerName(e.target.value);
  }

  let editablewPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablewPlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editablewPlayerName}
        <span className="player-sympol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
