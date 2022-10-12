import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "../../store/news-action";
import InfiniteScroll from "react-infinite-scroll-component";
import classes from "./NewsPosts.module.css";
import Card from "../UI/Card";
import SinglePost from "./SinglePost";

const NewsPosts = (props) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.news.page);
  const perPageItem = useSelector((state) => state.news.perPageItem);
  const totalResults = useSelector((state) => state.news.totalResults);
  const news = useSelector((state) => state.news.newsItem).flat();
  const loading = useSelector((state) => state.news.isLoading);
  const category = props.category;

  const [pageNo, setPageNo] = useState(page);
  const [newsData, setNewsData] = useState(news);

  useEffect(() => {
    dispatch(fetchNewsData(pageNo, perPageItem, category, news));
  }, [dispatch, pageNo, category, perPageItem]);

  console.log(newsData);

  const forPagination = Math.ceil(totalResults / perPageItem);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Card>
        <div className={classes.post}>
          <div className={classes.postItems}>
            {news.map((item, id) => (
              <SinglePost
                key={"news" + id}
                img={item.urlToImage}
                title={item.title}
                description={item.description}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default NewsPosts;
