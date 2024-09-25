import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { PostList } from './components/PostList';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleButtonClick() {
    fetchData();
  }

  return (
    <>
      <button className="get-data-btn" onClick={handleButtonClick}>
        Click
      </button>
      {!!data.length && <PostList data={data} />}
    </>
  );
}

export default App;
