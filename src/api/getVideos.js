export default async function getVideos(text, token) {
  const api = 'AIzaSyDr_ETbJ4lZMciyedL_PSI1VgtxlbNMnRU';
  // const api = 'AIzaSyCI2VOm7yv1ua7euPHFXFiV1WDsOCa_Upo';
  let url = `https://www.googleapis.com/youtube/v3/search?key=${api}&type=video&part=snippet&maxResults=15&q=${text}`;
  if (token) {
    url += `&pageToken=${token}`;
  }
  const response = await fetch(url);
  console.log(response);
  if (response.ok) {
    const json = await response.json();
    console.log(json);
    return json;
  }
  console.log(`Ошибка: ${response.status}`);
  return [];
}
