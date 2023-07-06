import { useState, useEffect } from 'react';
import '../../App.css'
import ListItem from '../../components/ListItem';
import Loading from '../../components/Loading';
import axios from 'axios';

function Manga() {
  const [MangaList, setMangaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMangaList = async () => {
      try {
        const response = await axios.get('http://localhost:3001/mangas');
        setMangaList(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Manga list:', error);
      }
    };
    
    fetchMangaList();
  }, []);

  return (
    <>
        {
          loading ?
          <Loading /> :
          MangaList.map((manga) => <ListItem  id={manga.id}  nomemanga={manga.nomemanga} capamanga={manga.capamanga} author={manga.author} setMangaList={setMangaList} />)
        }
      
    </>
  )
}

export default Manga
