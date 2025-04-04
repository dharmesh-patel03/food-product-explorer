const SkeletonLoader = () => {
    return (
      <div className="animate-pulse space-y-4 p-4 bg-gray-200 rounded-md ">
        {/* Image Placeholder */}
        <div className="w-full h-36 bg-gray-300 rounded"></div>
  
        {/* Title Placeholder */}
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
  
        {/* Category Placeholder */}
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>
    );
  };
  
  export default SkeletonLoader;
  