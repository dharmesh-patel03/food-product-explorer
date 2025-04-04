const SkeletonProductDetail = () => {
    return (
      <div className="w-full">
        <div className="container md:mx-auto p-10 md:p-10 md:pl-20 flex flex-col md:flex-row gap-10 shadow-2xl md:w-5/6 md:mt-10 md:rounded-4xl">
          {/* Image Placeholder */}
          <div className="flex items-center md:w-2/3 w-full">
            <div className="mx-auto w-64 h-64 bg-gray-300 animate-pulse rounded-lg shadow-sm"></div>
          </div>
  
          {/* Details Placeholder */}
          <div className="mt-4 gap-3 flex flex-col text-sm w-full">
            <div className="h-8 w-3/4 bg-gray-300 animate-pulse rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded"></div>
            <div className="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
            <div className="h-4 w-3/4 bg-gray-300 animate-pulse rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded"></div>
            <div className="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
            <div className="h-4 w-2/3 bg-gray-300 animate-pulse rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded"></div>
            <div className="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SkeletonProductDetail;
  