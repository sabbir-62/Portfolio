

const links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <div className="links">
      {items.map((item, i) => (
        <a href={`#${item}`} key={i}>{item}</a>
      ))}
    </div>
  );
};

export default links;
