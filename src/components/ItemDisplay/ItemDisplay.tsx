import * as React from "react";
import Item from "../../Atlas";
import "./ItemDisplay.css";

interface Iprops {
  item: Item;
  amount: number;
}

class ItemDisplay extends React.Component<Iprops> {
  render() {
    const { item, amount } = this.props;

    if (!item.recipe) {
      return (
        <React.Fragment>
          <h2>
            {amount} {item.name}
          </h2>
          <h4>Raw Resource</h4>
        </React.Fragment>
      );
    }

    const RecursiveItems = item.recipe.ingredients.map(ingredient => {
      const { item } = ingredient;
      return (
        <ItemDisplay
          key={Math.random()}
          item={item}
          amount={ingredient.amount * amount}
        />
      );
    });

    return (
      <div className="container">
        <h1>
          {amount} {item.name}
        </h1>
        {RecursiveItems}
      </div>
    );
  }
}

export default ItemDisplay;
