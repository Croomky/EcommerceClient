import { createMemoryHistory } from 'history';

const history = createMemoryHistory();
const unlisten = history.listen((location, action) => {
  console.log(action, location.pathname, location.state);
});


export default history;