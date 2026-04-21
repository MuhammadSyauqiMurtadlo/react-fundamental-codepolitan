function Article() {
  const name = "Syauqi Murtadlo";
  const titles = ["Article Pertama", "Article Kedua", "Article Ketiga"];

  return (
    <>
      <div>{name}</div>
      <div>
        {titles.map((title) => (
          <div>{title}</div>
        ))}
      </div>
    </>
  );
}

export default Article;
