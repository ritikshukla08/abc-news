import classes from "./SinglePosts.module.css";

const defaultImg =
  "https://www.sukriti.org/sites/default/files/default_images/thumbnail-default.jpg";

const SinglePost = (props) => {
  return (
    <div className={classes.postItem}>
      <img
        src={props.img || defaultImg}
        alt={props.title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultImg;
        }}
      />
      <div className={classes.box}>
        <a href={props.url}>{props.title}</a>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default SinglePost;
