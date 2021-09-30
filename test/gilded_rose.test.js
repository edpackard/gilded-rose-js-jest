const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should degrade item quality at end of day", function () {
    const gildedRose = new Shop([new Item("lembas bread", 20, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(39);
  });
});
