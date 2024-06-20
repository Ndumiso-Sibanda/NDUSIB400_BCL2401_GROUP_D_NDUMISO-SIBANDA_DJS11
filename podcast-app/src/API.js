export const PodcastShows = async () => {
    try {
      const response = await fetch('https://podcast-api.netlify.app', { cache: "force-cache" });
      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      return { error };
    }
  };
  
  export const PodcastShow = async (id) => {
    try {
      const response = await fetch(`https://podcast-api.netlify.app/id/${id}`, { cache: "force-cache" });
      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      return { error };
    }
  };
  
  //<Route path="/podcast" exact element={<PodcastList />} />