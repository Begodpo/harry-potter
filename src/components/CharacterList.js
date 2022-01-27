import CharacterCard from "./CharacterCard";
function CharacterList(props) {
  console.log(props);
  const characterElements = props.characters.map((character, index) => {
    return (
      <li key={index}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return (
    <section>
      <ul>{characterElements}</ul>
    </section>
  );
}

export default CharacterList;
