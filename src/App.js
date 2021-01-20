import './App.css';
import Nav from './components/nav/nav';
import Land from './components/land/land';
import RecentPost from './components/recent-post/recent-post';
import FeaturedWork from './components/featured-work/featured-work';

function App() {
  return (
    <div className="App">
      <Nav />
      <Land />
      <RecentPost />
      <FeaturedWork />
    </div>
  );
}

export default App;
