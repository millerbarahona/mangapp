const apiURL = `https://api.jikan.moe/v3`

const fromApiResponseToManga = apiResponse =>{
  console.log(apiResponse);  
      const mangaRes =apiResponse
      const {mal_id, url, image_url, title, synopsis, type, chapters, score, start_date, end_date, rated} = mangaRes
      const manga={mal_id, url, image_url, title, synopsis, type, chapters, score, start_date, end_date, rated}
      const {genres} =mangaRes
      return [manga, genres]
  }


export default function getMangaById({ mal_id='25'}={}){
  const apiTitle = `${apiURL}/manga/${mal_id}`
  return fetch (apiTitle)
  .then(res => res.json())
  .then(fromApiResponseToManga)
}