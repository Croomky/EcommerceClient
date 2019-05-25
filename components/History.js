import { createMemoryHistory } from 'history';
import { menuComponentInstance, refreshMenu } from './MenuRefresher';

const history = createMemoryHistory();
const unlisten = history.listen((location, action) => {
  console.log(action, location.pathname, location.state);
  
  // console.log(menuComponentInstance);
  refreshMenu();
});

export default history;
