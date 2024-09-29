import { useContext, useEffect, useState } from 'react';
import { PostList } from './components/PostList'; 
import { LanguageSwitcher } from './components/LanguageSwitcher';
import LanguageContext from './components/LanguageContext';




function App() {
  
  const [data, setData] = useState([]);
  const { language } = useContext(LanguageContext);

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
    <div>
      <button className="get-data-btn" onClick={handleButtonClick}>
        Click
      </button>
      {!!data.length && <PostList data={data} />}
    </div>

    <div>
<LanguageProvider>
  <LanguageSwitcher />
<LanguageProvider/>
</div>

  </>
  );

}


  







export default App;
