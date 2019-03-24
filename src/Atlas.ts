class Item {
  constructor(public name: string, public recipe: Recipe) {}
}

class Recipe {
  constructor(public ingredients: Array<{ amount: number; item: Item }>) {}
}

const ore = new Item("Iron Ore", null);
const ironIngot = new Item(
  "Iron Ingot",
  new Recipe([{ amount: 1, item: ore }])
);
const ironPlate = new Item(
  "Iron Plate",
  new Recipe([{ amount: 2, item: ironIngot }])
);
const ironRod = new Item(
  "Iron Rod",
  new Recipe([{ amount: 1, item: ironIngot }])
);
const screw = new Item("Screw", new Recipe([{ amount: 1 / 6, item: ironRod }]));
const reinforcedIronPlate = new Item(
  "Reinforced Iron Plate",
  new Recipe([
    {
      amount: 4,
      item: ironPlate
    },
    {
      amount: 24,
      item: screw
    }
  ])
);

export {
  Item as default,
  ore,
  ironIngot,
  ironPlate,
  ironRod,
  screw,
  reinforcedIronPlate
};
