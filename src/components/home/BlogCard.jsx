import { Link } from "react-router";
import Button from "../UI/Button";

const BlogCard = ({ data }) => {
  return (
    <>
      <Link
        to={`/blogs/${data.id}`}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div>
          <img className="rounded-t-lg" src={data.thumbnail} alt="" />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.description.substring(0, 40)}...
          </p>
          
          <Button variant="primary" size="md">Read More</Button>
          
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
