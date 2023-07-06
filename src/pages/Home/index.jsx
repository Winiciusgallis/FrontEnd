import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mangaList, setMangaList] = useState([]);
  const [filteredMangaList, setFilteredMangaList] = useState([]);
  const [showList, setShowList] = useState(false);

  const handleSearch = () => {
    const filteredMangas = mangaList.filter((manga) =>
      manga.nomemanga.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMangaList(filteredMangas);
    setShowList(true);
  };

  useEffect(() => {
    const fetchMangaList = async () => {
      try {
        const response = await axios.get('http://localhost:3001/mangas');
        setMangaList(response.data);
      } catch (error) {
        console.error('Error fetching manga list:', error);
      }
    };

    fetchMangaList();
  }, []);

  return (
    <div>
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearch} className="search-button">
          Pesquisar
        </button>
      </form>

      {showList && (
        <ul className="manga-list">
          {filteredMangaList.map((manga) => (
            <li key={manga.id}>
              <Link to={`/capitulos/${manga.id}`}>
                <img src={manga.capamanga} alt={manga.nomemanga} style={{ maxHeight: '200px', borderRadius: '5px' }} />
                {manga.nomemanga}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
