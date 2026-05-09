import React, { useState } from "react";
import {
  FaEye,
  FaStar,
  FaFire,
  FaCalendarAlt,
  FaBookmark,
  FaRegBookmark,
  FaShareAlt,
} from "react-icons/fa";
import { Link } from "react-router";
const CategoryCard = ({ news }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const {
    id,
    title,
    thumbnail_url,
    total_view,
    rating,
    author,
    details,
    tags,
    others,
  } = news;

  // Share Function
  const handleShare = async () => {
    try {
      await navigator.share({
        title: title,
        text: details,
        url: window.location.href,
      });
    } catch (error) {
      console.log("error while sharing");
    }
  };

  return (
    <div className="card bg-base-100 shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
      {/* Image */}
      <figure className="relative">
        <img
          src={thumbnail_url}
          alt={title}
          className="h-60 w-full object-cover"
        />

        {/* Trending Badge */}
        {others?.is_trending && (
          <div className="badge badge-error absolute top-3 right-3 gap-1 text-white">
            <FaFire />
            Trending
          </div>
        )}
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Top Actions */}
        <div className="flex justify-between items-center">
          {/* Author */}
          <div className="flex items-center gap-3">
            <img
              src={author?.img}
              alt={author?.name}
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h2 className="font-semibold text-gray-800">
                {author?.name}
              </h2>

              <p className="text-sm text-gray-500 flex items-center gap-1">
                <FaCalendarAlt />
                {new Date(
                  author?.published_date
                ).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Bookmark + Share */}
          <div className="flex items-center gap-4 text-xl">
            {/* Bookmark */}
            <button
              onClick={() =>
                setBookmarked(!bookmarked)
              }
              className="text-gray-600 hover:text-primary transition"
            >
              {bookmarked ? (
                <FaBookmark />
              ) : (
                <FaRegBookmark />
              )}
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="text-gray-600 hover:text-primary transition"
            >
              <FaShareAlt />
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title text-xl leading-snug mt-3">
          {title}
        </h2>

     {/* Description */}
<p className="text-gray-600 text-sm">
  {details.length > 140
    ? (
        <>
          {details.slice(0, 140)}...
          <Link to = {`/news-details/${id}`} className="text-primary font-semibold ml-1 hover:underline">
            Read More
          </Link>
        </>
      )
    : (
        details
      )}
</p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-outline"
            >
              #{tag}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 border-t pt-4">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500 font-semibold">
            <FaStar />
            {rating?.number}
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            {total_view}
          </div>
        </div>

        {/* Button */}
        <div className="card-actions mt-4">
          <button className="btn btn-primary w-full">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;