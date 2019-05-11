import { createMemoryHistory } from 'history';

export var componentHolder = [];

const history = createMemoryHistory();
const unlisten = history.listen((location, action) => {
  console.log(action, location.pathname, location.state);
  componentHolder.forEach(component => {
    component.setAuthenticationState();
  });
});


export default history;