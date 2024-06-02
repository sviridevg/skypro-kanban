export const CardCategory = (Category) => {
  const cardCategory = Category.Category;
  if (cardCategory === "Web Design") {
    return (
      <div className="card__theme _orange">
        <p className="_orange">Web Design</p>
      </div>
    );
  } else if (cardCategory === "Research") {
    return (
      <div className="card__theme _green">
        <p className="_green">Research</p>
      </div>
    );
  } else if (cardCategory === "Copywriting") {
    return (
      <div className="card__theme _purple">
        <p className="_purple">Copywriting</p>
      </div>
    );
  }
};
