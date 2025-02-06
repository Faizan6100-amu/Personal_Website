/* eslint-disable react/prop-types */
export default function Thumbnail({ image, title }) {
  return (
    <div className="w-full md:w-[100%] p-3 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm border dark:border-gray-700">
      <img
        src={image}
        alt={title}
        className="rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>
  );
}
