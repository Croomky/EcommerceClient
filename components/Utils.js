export default class Utils {
  static parsePrice(price) {
    numberPrice = parseFloat(price);
    numberPrice = numberPrice.toFixed(2);
    price = '$' + numberPrice;

    return price;
  }
}