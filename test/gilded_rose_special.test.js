const { Shop } = require("../src/gilded_rose");

let items;
let brie;
let sulfuras;
let backstagePass;
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
      brie.sellIn = 0;
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

  describe("Backstage pass", () => {
    beforeEach(() => {
      backstagePass = {
        name: "Backstage passes to a TAFKAL80ETC concert",
        sellIn: 0,
        quality: 40,
      };
    });

    it("has a quality of 0 when sellIn less than 0", () => {
      gildedRose = new Shop([backstagePass]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
    it("increases quality by 2 when sellIn >5 and <=10 (lower limit)", () => {
      backstagePass.sellIn = 6;
      gildedRose = new Shop([backstagePass]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(42);
    });
    it("increases quality by 2 when sellIn >5 and <=10 (upper limit)", () => {
      backstagePass.sellIn = 10;
      gildedRose = new Shop([backstagePass]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(42);
    });
    it("increases quality by 3 when sellIn >0 and <=5 (lower limit)", () => {
      backstagePass.sellIn = 1;
      gildedRose = new Shop([backstagePass]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(43);
    });
    it("increases quality by 3 when sellIn >0 and <=5 (upper limit)", () => {
      backstagePass.sellIn = 5;
      gildedRose = new Shop([backstagePass]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(43);
    });
    it("increases quality by 1 when sellIn >10", () => {
      backstagePass.sellIn = 11;
      gildedRose = new Shop([backstagePass]);
      items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(41);
    });
  });
});
