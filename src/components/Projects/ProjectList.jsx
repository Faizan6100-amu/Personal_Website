/* eslint-disable react/prop-types */
export default function ProjectList({ children }) {
  return (
    <div className="mt-4 w-full flex flex-col md:flex-row rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {children}
    </div>
  );
}
