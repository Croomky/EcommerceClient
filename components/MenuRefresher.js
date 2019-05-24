export var menuComponentInstance = null;

export function setMenuComponent(instance) {
  menuComponentInstance = instance;
}

export function refreshMenu() {
  if(menuComponentInstance != null) {
    menuComponentInstance.setAuthenticationState();
  }
}
