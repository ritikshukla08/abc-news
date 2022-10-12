import { useSelector, useDispatch } from "react-redux";
import classes from "./NewsSlider.module.css";

const NewsSlider = (props) => {
  const news = useSelector((state) => state.news.newsItem);

  const titleList = news.map((list, i) => <li key={"li" + i}>{list.title}</li>);

  return (
    <div className={classes.slider}>
      <marquee direction="left">
        <ul>{titleList}</ul>
      </marquee>
    </div>
  );
};

export default NewsSlider;
