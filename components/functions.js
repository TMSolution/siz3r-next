export function colorText(text, alt) {
  let array = text
    .split(" ")
    .map((word, index) => (
      <span
        style={{ color: word.includes(">") && (alt ? "#3C1992" : "#00D278") }}>
        {word.replace(">", "")}{" "}
      </span>
    ));
  return array;
}
