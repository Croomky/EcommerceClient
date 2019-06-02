export default class Utils {
  static parsePrice(price) {
    numberPrice = parseFloat(price);
    numberPrice.toFixed(2);
    price = '$' + numberPrice;

    // if(price.indexOf('.') == -1) {
    //   price = price + '.00';
    // }

    return price;
  }
}