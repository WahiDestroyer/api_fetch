import React, { useEffect, useState } from "react";
import BlogCard from "../components/home/BlogCard";
import { blogservices } from "../services/api";
import Loading from "../components/loading";
import Button from "../components/UI/Button";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const res = await blogservices.blog();
        setProducts(res.products);
        setLoading(false);
      })();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Blog List
        </h2>

        {/* Buttons for stuff like filtering in future */}
        <div className="flex gap-3">
          <Button variant="primary" size="md">
            Latest
          </Button>
          <Button variant="outline" size="md">
            Popular
          </Button>
          <Button variant="ghost" size="md">
            Categories
          </Button>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, idx) => (
              <Loading key={idx} />
            ))
          : products.map(item => (
              <BlogCard key={item.id} data={item} />
            ))}
      </div>

      {/* Show more button */}
      {!loading && (
        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
