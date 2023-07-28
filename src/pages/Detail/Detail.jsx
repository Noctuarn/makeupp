import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GOODS } from '../../DATA';

import { getStars } from '../../utils/getStars';

const Detail = () => {
  const { id } = useParams();
  const [choosenElement, setChoosenElement] = useState(null);

  useEffect(() => {
    const element = GOODS.find(item => item.id === parseInt(id));
    setChoosenElement(element);
  }, [id]);

  return (
    <div>
      {choosenElement ? (
        <div>
          <img src={choosenElement.imgSrc} alt={choosenElement.name} />
          <h1>{choosenElement.name}</h1>
          <p>{choosenElement.description}</p>
          <p>Rating: {getStars(choosenElement.rating)}</p>
          <p>Responses: {choosenElement.responces}</p>
          <p>Price: {choosenElement.price}₴</p>
        </div>
      ) : (
        <div>Element not found</div>
      )}
    </div>
  );
};

export default Detail;