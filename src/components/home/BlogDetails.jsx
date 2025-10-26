import React, { useEffect, useState } from "react";
import { blogservices } from "../../services/api";
import { useParams } from "react-router";
import Loading from "../loading";

const BlogDetails = () => {
  const [productData, setProductData] = useState({});
  const params = useParams();
  const [loading, setLoading] = useState(true);
  console.log(params);

  useEffect(() => {
    try {
      (async () => {
        const res = await blogservices.blogdetails(params.id);
        setProductData(res);
        setLoading(false);
      })();
    } catch (error) {}
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="w-full mb-6">
        <img
          src={productData.thumbnail}
          alt="Blog cover"
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {productData.title}
      </h2>

      <div className="flex items-center text-sm text-gray-500 mb-8">
        <span>
          By <strong className="text-gray-700">Wahid Tahosin Laam</strong>
        </span>
        <span className="mx-2">•</span>
        <span>October 23, 2025</span>
        <span className="mx-2">•</span>
        <span>5 min read</span>
      </div>

      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p>{productData.description}</p>

        <p>
          In this blog, we explore some of the most breathtaking natural
          landscapes and discuss how spending time outdoors can boost your
          mental and physical health. Whether you're hiking up a trail or simply
          enjoying the sunset by the lake, nature offers countless opportunities
          for reflection and joy.
        </p>

        <h2>The Magic of the Mountains</h2>
        <p>
          Standing atop a mountain and looking down upon the valleys below is a
          humbling experience. The cool air, the quiet, and the vastness of the
          scenery remind us how small yet significant our existence is.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
          “In every walk with nature, one receives far more than he seeks.” –
          John Muir
        </blockquote>

        <p>
          As we continue to urbanize, it's crucial to preserve these natural
          wonders for future generations. Protecting the environment ensures
          that our children can also experience the magic that nature brings.
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
