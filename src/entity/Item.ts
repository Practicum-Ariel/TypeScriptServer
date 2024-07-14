export default class Item {
    barcode: number
    name: string
    price: number
    amount: number

    constructor(barcode: number, name: string, price: number, amount = 0) {
        this.barcode = barcode
        this.name = name
        this.price = price
        this.amount = amount
    }
    add(amount: number) {
        this.amount += amount
    }
    buy(amount: number) {
        this.amount -= amount
    }
}