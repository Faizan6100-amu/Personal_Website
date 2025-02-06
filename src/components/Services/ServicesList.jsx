const services = [
  {
    icon: WebDevIcon,
    name: "Web Development",
    desc: "Full-stack development services creating responsive, secure, and high-performance web solutions including enterprise platforms, e-commerce systems, and custom web applications.",
  },
  {
    icon: DesignIcon,
    name: "Web Design",
    desc: "User-centric interface design and prototyping services delivering intuitive UX/UI solutions, brand-aligned visual systems, and pixel-perfect design implementations.",
  },
  {
    icon: DataScienceIcon,
    name: "Data Science",
    desc: "Advanced analytics solutions leveraging machine learning, predictive modeling, and big data technologies to extract actionable insights and drive data-informed decision making.",
  },
  {
    icon: TAIcon,
    name: "TA - Teaching Assistant (CS)",
    desc: "Providing academic assistance in computer science courses, including coding tutorials, assignment guidance, and exam preparation support for students.",
  },
];

export default function ServicesList({ showAll }) {
  return services
    .slice(0, showAll ? services.length : 3)
    .map((service, idx) => (
      <div
        key={idx}
        className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-50 dark:bg-purple-900/50 transition-colors duration-300">
          <service.icon className="w-8 h-8" />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {service.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
            {service.desc}
          </p>
        </div>
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-100 dark:group-hover:border-purple-900/30 rounded-xl transition-all duration-300 pointer-events-none" />
      </div>
    ));
}
function WebDevIcon({ className }) {
  return (
    <svg
      className={`text-purple-600 dark:text-purple-400 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="currentColor"
        d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"
      />
    </svg>
  );
}

function DesignIcon({ className }) {
  return (
    <svg
      className={`text-purple-600 dark:text-purple-400 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"
      />
    </svg>
  );
}
function DataScienceIcon({ className }) {
  return (
    <svg
      className={`text-purple-600 dark:text-purple-400 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
      />
    </svg>
  );
}

function TAIcon({ className }) {
  return (
    <svg
      className={`text-purple-600 dark:text-purple-400 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M256 0C397.4 0 512 114.6 512 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm0 128a64 64 0 1 0 0 128 64 64 0 1 0 0-128zm-96 240c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-57.3-64-96-64s-96 28.7-96 64z"
      />
    </svg>
  );
}
