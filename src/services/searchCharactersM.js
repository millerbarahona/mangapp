const apiURL = `https://api.jikan.moe/v3`

const fromApiResponseToManga = apiResponse =>{
  console.log(apiResponse);  
      const data =apiResponse.characters
      if(Array.isArray(data)){
          const characters = data.map(character=>{
            const {mal_id, url, image_url, name, role} = character
            return{mal_id, url, image_url, name, role}
          })
          return characters
      }
      return []
    }


export default function getCharacters({ mal_id='25', tipo}={}){
  let apiTitle 
  tipo==='anime'?apiTitle = `${apiURL}/manga/${mal_id}/characters`:apiTitle = `${apiURL}/manga/${mal_id}/characters`
  console.log(apiTitle);
  return fetch (apiTitle)
  .then(res => res.json())
  .then(fromApiResponseToManga)
}