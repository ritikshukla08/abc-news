import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsData } from "../../store/news-action";
import classes from "./NewsPosts.module.css";
import Card from "../UI/Card";
import SinglePost from "./SinglePost";
import Pagination from "../UI/Pagination";

const NewsPosts = (props) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.news.page);
  const perPageItem = useSelector((state) => state.news.perPageItem);
  const totalResults = useSelector((state) => state.news.totalResults);
  const news = useSelector((state) => state.news.newsItem);
  const loading = useSelector((state) => state.news.isLoading);
  const category = props.category;

  const [pageNo, setPageNo] = useState(page);

  const prevHandler = () => {
    setPageNo((prev) => --prev);
  };

  const nexthandler = () => {
    setPageNo((prev) => ++prev);
  };

  useEffect(() => {
    dispatch(fetchNewsData(pageNo, perPageItem, category));
  }, [dispatch, pageNo, category, perPageItem]);

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
        <Pagination
          cur={pageNo}
          prev={prevHandler}
          next={nexthandler}
          last={forPagination}
        />
      </Card>
    </section>
  );
};

export default NewsPosts;
