import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading';

function MangaDetails() {
  const [loading, setLoading] = useState(true)
  const [Manga, setManga] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/mangas/${id}`);
        setManga(response.data);
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };
    
    fetchManga();
  }, []);

  return (
    <>
    {loading ? <Loading /> : 
      <>
        <h2>{Manga.name}</h2> 
        <h2>{Manga.nomemanga}</h2>
        <h2>{Manga.capamanga}</h2>
      </>}
    </>
  )
}

export default MangaDetails