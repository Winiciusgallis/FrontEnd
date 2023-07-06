import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem2 from '../../components/ListItem2';
import Loading from '../../components/Loading';
import { useParams } from 'react-router-dom';

function Capitulos() {
  const { mangaId } = useParams();
  const [chapterList, setChapterList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapterList = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/capitulos?manga_id=${mangaId}`);
        setChapterList(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching chapter list:', error);
      }
    };

    fetchChapterList();
  }, [mangaId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {chapterList
            .filter((chapter) => chapter.manga_id === parseInt(mangaId))
            .map((chapter) => (
              <ListItem2
                key={chapter.id}
                id={chapter.id}
                nomemanga={chapter.nomemanga}
                cap_num={chapter.cap_num}
                mangaId={mangaId} // Passando o mangaId como prop para o componente ListItem2
              />
            ))}
        </ul>
      )}
    </>
  );
}

export default Capitulos;
