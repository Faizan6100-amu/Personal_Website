const EducationComponent = () => {
  return (
    <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900">
      <ul className="divide-y divide-gray-300 dark:divide-gray-700">
        <li className="py-4">
          <span className="text-sm text-slate-500 dark:text-slate-400">
          Sept 1, 2024 - Dec 30, 2024  | New Delhi, India 
          </span>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Associate Web Developer <br/><span className="text-sm text-slate-500 dark:text-slate-400">Company:</span> Indian Institute of Sustainable Development (IISD)
          </p>
        </li>
        <li className="py-4">
          <span className="text-sm text-slate-500 dark:text-slate-400">
          Jan 24, 2024 - July 24, 2024  | Aligarh, India
          </span>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Web Developer <br/><span className="text-sm text-slate-500 dark:text-slate-400">Company:</span> NEP-Cell (Aligarh Muslim University)
          </p>
        </li>
        <li className="py-4">
          <span className="text-sm text-slate-500 dark:text-slate-400">
          Nov 10, 2022 - March 10, 2023  | Remote, India
          </span>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Programming Trainee <br/><span className="text-sm text-slate-500 dark:text-slate-400">Company:</span> Coding Ninjas
          </p>
        </li>
      </ul>
    </div>
  );
};

export default EducationComponent;
