// This function loads pokemon data from the Pokemon API
function fetchSimpsonJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data[0]; // response.data instead of response.json() with fetch  
      })
      .then(function(simpson) {
        console.log('data decoded from JSON:', simpson);
  
        // Build a block of HTML
        const simpsonHtml = `
          <p><strong>${simpson.character}</strong></p>  
          <img src="${simpson.image}" />
          <p>${simpson.quote}</p>
          
        `;
        document.querySelector('#simpson').innerHTML = simpsonHtml;
      });
  }

// version avec fetch
  // This function loads pokemon data from the Pokemon API
/*function fetchSimpsonJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('data decoded from JSON:', data[0]);
      const simpson = data[0];
      // Build a block of HTML
      const simpsonHtml = `
        <p><strong>${simpson.character}</strong></p>  
        <img src="${simpson.image}" />
        <p>${simpson.quote}</p>
        
      `;
      document.querySelector('#simpson').innerHTML = simpsonHtml;
    });
}*/
  
fetchSimpsonJSON();