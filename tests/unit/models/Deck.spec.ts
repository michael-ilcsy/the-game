import Deck from "@/models/Deck";

describe('Deckクラスのテスト', () => {
  let deck: Deck

  beforeEach(() => {
    deck = new Deck()
  })

  it('初期枚数が98枚であること', () => {
    expect(deck.remainingCount).toBe(98)
  });

  it('2～99のカードが一枚ずつ含まれていること', () => {
    let array: number[] = []

    for (let i = 2; i < 99; i++) {
      array.push(i)
    }

    for (let i = 1; i < 99; i++) {
      const drawCardNumber = deck.drawCard()!.number
      array = array.filter(n => n !== drawCardNumber)
    }

    expect(array).toEqual([])
  })
})
