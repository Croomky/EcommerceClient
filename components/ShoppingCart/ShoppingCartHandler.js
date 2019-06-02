var productIdArray = [];
var shoppingCartComponent = null;

export function pushId(id) {
  if(productIdArray.indexOf(id) == -1) {
    productIdArray.push(id);
  }
}

export function getProductIdArray() {
  return productIdArray;
}

export function removeItem(id) {
  productIdArray.splice(productIdArray.indexOf(id), 1);
  shoppingCartComponent.removeProduct(id);
}

export function registerShoppinigCartComponent(component) {
  shoppingCartComponent = component;
}

export function isInCart(id) {
  return productIdArray.indexOf(id) == -1 ? false : true;
}
