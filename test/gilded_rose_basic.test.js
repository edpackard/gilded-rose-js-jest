const { Shop } = require("../src/gilded_rose");

let items;
let gildedRose;
let lembas;

describe("Gilded Rose: basic item tests", () => {
  describe("single ordinary item", () => {
    beforeAll(() => {
      lembas = { name: "lembas bread", sellIn: 30, quality: 25 };
      gildedRose = new Shop([lembas]);
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

  describe("multiple ordinary items", () => {
    beforeAll(() => {
      lembas = { name: "lembas bread", sellIn: 30, quality: 25 };
      let entDraught = { name: "ent-draught", sellIn: 20, quality: 40 };
      let oneRing = { name: "one ring", sellIn: 40, quality: 50 };
      gildedRose = new Shop([lembas, entDraught, oneRing]);
      items = gildedRose.updateQuality();
    });

    it("should store names of items", () => {
      expect(items[1].name).toBe("ent-draught");
      expect(items[2].name).toBe("one ring");
    });

    it("should reduce sellIn value at end of day", () => {
      expect(items[1].sellIn).toBe(19);
      expect(items[2].sellIn).toBe(39);
    });

    it("should degrade item quality at end of day", () => {
      expect(items[1].quality).toBe(39);
      expect(items[2].quality).toBe(49);
    });
  });

  describe("quality behaviours", () => {
    it("does not degrade quality below zero", () => {
      lembas = { name: "lembas bread", sellIn: 30, quality: 25 };
      gildedRose = new Shop([lembas]);
      for (var i = 0; i < 26; i++) {
        items = gildedRose.updateQuality();
      }
      expect(items[0].quality).toBe(0);
    });

    it("doubles rate of quality degradation once sellIn less than zero", () => {
      let pipeweed = { name: "pipeweed", sellIn: 5, quality: 30 };
      gildedRose = new Shop([pipeweed]);
      for (var i = 0; i < 10; i++) {
        items = gildedRose.updateQuality();
      }
      expect(items[0].quality).toBe(15);
    });
  });
});
