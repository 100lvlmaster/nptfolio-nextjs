import axios, { AxiosRequestConfig } from "axios";

export const getPlaylist = async () => {
  const playlistId: string = "PLENB0iyBH9BDaO3JtbmJYMghJcyDK2tkI";

  const requestUrl: string = `https://www.googleapis.com/youtube/v3/playlistItems`;

  const config: AxiosRequestConfig = {
    params: {
      part: "snippet",
      maxResults: 50,
      playlistId: playlistId,
      key: "AIzaSyC9v4GRDWzm9JWJlq_aWjul33yynxyHWbQ",
    },
  };
  const result = await axios.get(requestUrl, config);

  console.log(result.data);
  return result.data;
};
