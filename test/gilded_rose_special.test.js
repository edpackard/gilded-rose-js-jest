const { Shop } = require("../src/gilded_rose");

let items;
let gildedRose;

describe("Gilded Rose: special item tests", () => {
  describe("Aged Brie", () => {
    it("rises in quality per day", () => {
      brie = { name: "Aged Brie", sellIn: 30, quality: 25 };
      gildedRose = new Shop([brie]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(26);
    });
  });
});
