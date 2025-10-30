export function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
}

export function SkeletonText() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    </div>
  );
}

export function SkeletonAvatar() {
  return (
    <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
  );
}

export function SkeletonButton() {
  return (
    <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-full"></div>
  );
}

export function SkeletonGrid({ columns = 3 }: { columns?: number }) {
  return (
    <div className={`grid grid-cols-${columns} gap-4 animate-pulse`}>
      {Array.from({ length: columns }).map((_, i) => (
        <div key={i} className="bg-gray-200 rounded-lg h-32"></div>
      ))}
    </div>
  );
}
