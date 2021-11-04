const apiURL = 'https://api.jikan.moe/v3'

const fromApiResponseToMangas = apiResponse =>{
  const data = [] = apiResponse.results
  if(Array.isArray(data)){
      const animes =data.map(animes =>{
          const {mal_id, url, image_url, title, synopsis, type, episodes, score, start_date, end_date, rated, publishing, chapters} = animes
          return {mal_id, url, image_url, title, synopsis, type, episodes, score, start_date, end_date, rated,publishing, chapters}
      })
      console.log(animes.length);
      return animes
      
  }
  return []
}

export default function getMangasByTitle({title= 'random', limit='25'}={}){
    const apiTitle = `${apiURL}/search/manga?q=${title}`
    console.log(apiTitle);
    return fetch (apiTitle)
    .then(res => res.json())
    .then(fromApiResponseToMangas)
}