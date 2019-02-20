import axios from "axios";

export function fetchNews() {
  return async dispatch => {
    dispatch(fetchStart());

    try {
      const response = await axios.get(
        "https://api.newsriver.io/v2/search?query=text%3A%22javascript%20learning%22&sortBy=_score&sortOrder=DESC&limit=15",
        {
          headers: {
            Authorization:
              "sBBqsGXiYgF0Db5OV5tAw5fWsi6ohXXrTh3bhrZNQ5dd3jjEU0U2d1AZreRJflXFn2pHZrSf1gT2PUujH1YaQA"
          }
        }
      );
      const news = response.data;
      dispatch(fetchSuccess(news));
    } catch (error) {
      console.log(error);
      fetchFailed(error);
    }
  };
}

export function fetchStart() {
  return {
    type: "FETCH_START"
  };
}

export function fetchSuccess(news) {
  return {
    type: "FETCH_SUCCESS",
    news
  };
}

export function fetchFailed(error) {
  return {
    type: "FETCH_FAILED",
    error
  };
}
