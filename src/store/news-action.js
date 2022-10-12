import { newsAction } from "./news-slice";

export const fetchNewsData = (page, perPageItem, category, news) => {
  return async (dispatch) => {
    dispatch(newsAction.loading());
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines/?pageSize=${perPageItem}&page=${
        page + 1
      }&country=in&category=${category}&apiKey=32cb4522f4a34deb9f3071ecd9550805`
    );
    const data = await response.json();

    console.log(data);

    dispatch(newsAction.addTotalResult(data.totalResults));
    dispatch(newsAction.addNews(...news, data.articles));
    dispatch(newsAction.updatePage());

    dispatch(newsAction.loading());
  };
};
