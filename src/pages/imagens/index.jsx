import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItemImage from '../../components/ListItemImage';
import Loading from '../../components/Loading';
import { useParams } from 'react-router-dom';

function Images() {
  const { cap_id } = useParams();
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImageList = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/imagens?cap_id=${cap_id}`);
        setImageList(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching image list:', error);
      }
    };

    fetchImageList();
  }, [cap_id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {imageList
            .filter((image) => image.cap_id === parseInt(cap_id))
            .map((image) => (
              <ListItemImage
                key={image.id}
                id={image.id}
                pag_num={image.pag_num}
                imag_url={image.imag_url}
                cap_id={image.cap_id} // Passando o cap_id como prop para o componente ListItemImage
              />
            ))}
        </ul>
      )}
    </>
  );
}

export default Images;
