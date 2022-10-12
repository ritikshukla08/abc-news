import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsItem: [],
    page: 1,
    isLoading: false,
    perPageItem: 9,
    totalResults: 0,
    categories: [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ],
  },
  reducers: {
    loading(state) {
      state.isLoading = !state.isLoading;
    },
    addNews(state, action) {
      state.newsItem.push(action.payload);
    },
    updatePage(state, action) {
      ++state.page;
    },
    addTotalResult(state, action) {
      state.totalResults = action.payload;
    },
  },
});

export const newsAction = newsSlice.actions;
export default newsSlice;
