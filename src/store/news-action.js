import { newsAction } from "./news-slice";

export const fetchNewsData = (page, perPageItem, category) => {
  return async (dispatch) => {
    dispatch(newsAction.loading());
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines/?pageSize=${perPageItem}&page=${page}&country=in&category=${category}&apiKey=fedfb1478dbe41b5a9e01f9aa5e1e39f`
    );
    const data = await response.json();

    console.log(data);

    dispatch(newsAction.addTotalResult(data.totalResults));
    dispatch(newsAction.addNews(data.articles));

    dispatch(newsAction.loading());
  };
};
