/* eslint-disable react/prop-types */
export default function Card({ children, title }) {
  return (
    <div className="group relative flex-1 overflow-hidden rounded-2xl border border-gray-500/40 bg-gray-50/10 dark:border-gray-700/40 dark:bg-gray-900/10 backdrop-blur-xl transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/30">
      <div className="flex h-14 items-center justify-between px-4 border-b border-gray-400/30 dark:border-gray-600/30 bg-gray-200/20 dark:bg-gray-800/20">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 flex items-center gap-2">
          <span className="inline-block animate-pulse text-xl">🌌</span>
          {title}
          <span className="inline-block animate-pulse text-xl">✨</span>
        </h3>
      </div>
      <div className="relative h-[280px] overflow-y-auto p-2 sm:p-3 rounded-b-2xl border-t border-gray-400/20 dark:border-gray-600/20 custom-scrollbar">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
