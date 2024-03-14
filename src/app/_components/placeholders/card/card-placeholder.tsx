import {CardPlaceholderProps} from './card-placeholder.type'
export const CardPlaceholder:React.FC<CardPlaceholderProps>= ({className,count=1}) => {
    const counts=Array.from({length:count},(_,index)=>index+1)
  return (
    <div className={`flex flex-wrap justify-center xl:justify-start gap-6 mt-10 ${className}`}>
    {counts.map((item) => (
      <div
        key={`cardplaceholder${item}`}
        role="status"
        className="w-80 flex-1  rounded animate-pulse"
      >
        <div className="flex items-center justify-center h-48 mb-4 bg-base-25 rounded">
          <svg
            className="w-10 h-10 bg-base-25"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="h-2.5 bg-base-25 rounded-full  w-48 mb-4"></div>
        <div className="h-2 bg-base-50 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-base-25 rounded-full mb-2.5"></div>
        <div className="h-2 bg-base-25 rounded-full"></div>
        <div className="flex items-center mt-4 space-x-3">
          <div>
            <div className="h-2.5 bg-base-25 rounded-full w-32 mb-2"></div>
            <div className="w-48 h-2 bg-base-25 rounded-full"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}