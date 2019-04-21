export default class Utils {
  static parsePrice(price) {
    price = '$' + price;

    if(price.indexOf('.') == -1) {
      price = price + '.00';
    }

    return price;
  }
}