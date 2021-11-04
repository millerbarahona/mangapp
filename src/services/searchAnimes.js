const apiURL = 'https://api.jikan.moe/v3'

const fromApiResponseToAnimes = apiResponse =>{
  const data = [] = apiResponse.results
  if(Array.isArray(data)){
      const animes =data.map(animes =>{
          const {mal_id, url, image_url, title, synopsis, type, episodes, score, start_date, end_date, rated} = animes
          return {mal_id, url, image_url, title, synopsis, type, episodes, score, start_date, end_date, rated}
      })
      console.log(animes.length);
      return animes
      
  }
  return []
}

export default function getAnimesByTitle({title= 'random', limit='25'}={}){
    const apiTitle = `${apiURL}/search/anime?q=${title}`
    return fetch (apiTitle)
    .then(res => res.json())
    .then(fromApiResponseToAnimes)
}

