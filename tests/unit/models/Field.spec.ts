import LowerField from "@/models/field/LowerField";
import Card from "@/models/Card";
import UpperField from "@/models/field/UpperField";

describe('Fieldのテスト', () => {
  describe('LowerFieldのテスト', () => {
    it('一番上のカードより小さいカードが置けること', () => {
      const field = new LowerField(new Card(100))
      const card = new Card(99)
      field.putCard(card)
      expect(field.topCardNumber).toBe(99)
    });

    it('一番上のカードより大きいカードが置けないこと', () => {
      const field = new LowerField(new Card(90))
      const card = new Card(95)
      expect(() => {
        field.putCard(card)
      }).toThrow()
    })

    it('一番上のカードより10大きいカードが置けること', () => {
      const field = new LowerField(new Card(80))
      const card = new Card(90)
      field.putCard(card)
      expect(field.topCardNumber).toBe(90)
    })
  })

  describe('UpperFieldのテスト', () => {
    it('一番上のカードより大きいカードが置けること', () => {
      const field = new UpperField(new Card(1))
      const card = new Card(2)
      field.putCard(card)
      expect(field.topCardNumber).toBe(2)
    });

    it('一番上のカードより小さいカードが置けないこと', () => {
      const field = new UpperField(new Card(20))
      const card = new Card(15)
      expect(() => {
        field.putCard(card)
      }).toThrow()
    })

    it('一番上のカードより10小さいカードが置けること', () => {
      const field = new UpperField(new Card(30))
      const card = new Card(20)
      field.putCard(card)
      expect(field.topCardNumber).toBe(20)
    })
  })
})
