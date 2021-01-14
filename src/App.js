import './App.css';
import Nav from './components/nav/nav';
import Land from './components/land/land';
import RecentPost from './components/recent-post/recent-post';

function App() {
  return (
    <div className="App">
      <Nav />
      <Land />
      <RecentPost />
    </div>
  );
}

export default App;
