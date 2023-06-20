import ScreenLogin from '../src/views/screenLoguin/index.js';
import ScreenPost from './views/screenPosts/index.js';

function App() {

  return (
    <div >
      <header>
        <div>
          <ScreenLogin/>
        </div>
      </header>
      <div>
        <ScreenPost/>
      </div>
    </div>
  );
}

export default App;

