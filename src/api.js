import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID HPTN_Wqr3NTE3-qzRDMseNbhrmKU2ew5pHQrHhTmsV4',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
