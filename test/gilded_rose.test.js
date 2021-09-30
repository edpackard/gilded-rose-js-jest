const { Shop, Item } = require("../src/gilded_rose");

let items;
let lembas = new Item("lembas bread", 30, 25);
let entDraught = new Item("ent-draught", 20, 40);
let oneRing = new Item("one ring", 40, 50);

describe("Gilded Rose", () => {
  describe("basic functions: single item", () => {
    beforeAll(() => {
      const gildedRose = new Shop([lembas]);
      items = gildedRose.updateQuality();
    });

    it("should store name of item", () => {
      expect(items[0].name).toBe("lembas bread");
    });

    it("should reduce sellIn value at end of day", () => {
      expect(items[0].sellIn).toBe(29);
    });

    it("should degrade item quality at end of day", () => {
      expect(items[0].quality).toBe(24);
    });
  });

  describe("basic functions: multiple items", () => {
    beforeAll(() => {
      const gildedRose = new Shop([lembas, entDraught, oneRing]);
      items = gildedRose.updateQuality();
    });

    it("should store names of items", () => {
      expect(items[1].name).toBe("ent-draught");
    });

    it("should reduce sellIn value at end of day", () => {
      expect(items[2].sellIn).toBe(39);
    });

    it("should degrade item quality at end of day", () => {
      expect(items[1].quality).toBe(39);
    });
  });
});
