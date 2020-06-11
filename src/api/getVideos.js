export default async function getVideos(searchValue) {
  const api = 'AIzaSyDr_ETbJ4lZMciyedL_PSI1VgtxlbNMnRU';
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${api}&type=video&part=snippet&maxResults=15&q=${searchValue}`,
  );
  if (response.ok) {
    const json = await response.json();
    console.log(json);
    return json;
  }
  console.log(`Ошибка HTTP: ${response.status}`);
  return [];
}
