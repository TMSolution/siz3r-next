export function colorText(text) {
  let array = text
    .split(" ")
    .map((word, index) => (
      <span style={{ color: word.includes(">") && "#00D278" }}>
        {word.replace(">", "")}{" "}
      </span>
    ));
  return array;
}
