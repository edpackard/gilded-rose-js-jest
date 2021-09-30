const { Shop } = require("../src/gilded_rose");

let items;
let gildedRose;

describe("Gilded Rose: special item tests", () => {
  describe("Aged Brie", () => {
    it("rises +1 in quality per day before sellIn passed", () => {
      brie = { name: "Aged Brie", sellIn: 30, quality: 25 };
      gildedRose = new Shop([brie]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(26);
    });
    it("rises +2 in quality per day after sellIn passed", () => {
      brie = { name: "Aged Brie", sellIn: 0, quality: 25 };
      gildedRose = new Shop([brie]);
      console.log(gildedRose.items[0]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(27);
    });
  });
});
