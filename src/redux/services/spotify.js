const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4d8ac81ddcmshf0ac04834c77135p10dafdjsn00865b047788',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  fetch('https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));