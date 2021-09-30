const { Shop } = require("../src/gilded_rose");

let items;
let brie;
let gildedRose;

describe("Gilded Rose: special item tests", () => {
  describe("Aged Brie", () => {
    beforeEach(() => {
      brie = { name: "Aged Brie", sellIn: 10, quality: 25 };
      gildedRose = new Shop([brie]);
    });

    it("rises +1 in quality per day before sellIn passed", () => {
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(26);
    });

    it("cannot have a quality above 50", () => {
      for (let i = 0; i < 50; i++) {
        items = gildedRose.updateQuality();
      }
      expect(items[0].quality).toBe(50);
    });

    it("rises +2 in quality per day after sellIn passed", () => {
      brie = { name: "Aged Brie", sellIn: 0, quality: 25 };
      gildedRose = new Shop([brie]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(27);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", () => {
    beforeEach(() => {
      sulfuras = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 40 };
      gildedRose = new Shop([sulfuras]);
      items = gildedRose.updateQuality();
    });

    it("has unchanging sellIn value", () => {
      expect(items[0].sellIn).toBe(0);
    });
    it("has unchanging quality value", () => {
      expect(items[0].quality).toBe(40);
    });
  });
});
