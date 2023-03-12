function Button({ onClick, children }: any) {
  return <button onClick={onClick}>{children}</button>;
}

function Party() {
  function letsParty() {
    alert("Partyinggggg!");
  }

  return <Button onClick={letsParty}>Party</Button>;
}

function Dance() {
  return <Button onClick={() => alert("Dancinnggggg")}>Dance</Button>;
}

export function Toolbar() {
  return (
    <div>
      <Party />
      <Dance />
    </div>
  );
}

export default Toolbar;
