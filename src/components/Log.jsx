const Log = function ({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} has played ({turn.square.row},{turn.square.col})
        </li>
      ))}
    </ol>
  );
};

export default Log;
