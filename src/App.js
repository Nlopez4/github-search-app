import {useEffect, useState} from 'react';
import './styles/App.css';
import InfoCard from './components/InfoCard';

function App() {
  const [userData, setUserData] = useState({});
  const [username, setUsername] = useState('');

  useEffect(() => {
    requestUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestUsers() {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const json = await res.json();
    setUserData(json);
  };

  function onChange(e) {
    setUsername(e.target.value);
  };


function handleSubmit(e) {
    e.preventDefault();
    requestUsers();
  };

  return (
    <div>
      <h1>Devfinder</h1>
      <div className="search">
        <input 
          id="searchbar" 
          type="text"
          name="search" 
          placeholder="Search user" 
          onChange={onChange}
          value={username}
        />
        <button onClick={handleSubmit}>search</button>
      </div>
      <InfoCard userData={userData}/>
    </div>
  );
}

export default App;
