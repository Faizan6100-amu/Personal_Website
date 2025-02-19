const EducationComponent = () => {
  return (
    <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900">
      <ul className="divide-y divide-gray-300 dark:divide-gray-700">
        <li className="py-4">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Master of Computer Science and Application (MCA)
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Aligarh Muslim University | Grade: 8.2 CGPA | August 2022 - July 2024
          </p>
        </li>
        <li className="py-4">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Bachelor Degree (Hons.)
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Aligarh Muslim University | Grade: 8.0 CGPA | July 2019 - June 2022
          </p>
        </li>
        <li className="py-4">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Senior Secondary (PCM)
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            CBSE | Grade: 76.0 % | May 2019
          </p>
        </li>
      </ul>
    </div>
  );
};

export default EducationComponent;
