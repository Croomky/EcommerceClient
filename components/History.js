import { createMemoryHistory } from 'history';
import { menuComponentInstance, refreshMenu } from './MenuRefresher';

const history = createMemoryHistory();
const unlisten = history.listen((location, action) => {
  console.log(action, location.pathname, location.state);
  
  // console.log(menuComponentInstance);
  console.log(history.entries[history.entries.length - 2].pathname);
  refreshMenu();
});

export function getValidSigningRedirect() {
  for(var i = history.entries.length-1; i >= 0; i--) {
    if(history.entries[i].pathname != '/signUp' &&
      history.entries[i].pathname != '/signIn'
    ) {
      return -(history.entries.length - i - 1);
    }
  }
}

export default history;
