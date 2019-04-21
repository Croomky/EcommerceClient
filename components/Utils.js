export default class Utils {
  static parsePrice(price) {
    price = '$' + price;

    if(price.indexOf('.') == -1) {
      return price + '.00';
    }
  }
}