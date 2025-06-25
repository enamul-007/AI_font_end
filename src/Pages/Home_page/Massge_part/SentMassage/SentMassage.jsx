const SentMassage = ({ massageSent, isSender }) => {
  return (
    <div
      className={`flex ${
        isSender ? "justify-end" : "justify-start"
      } mb-3 px-2 sm:px-4`}
    >
      <div
        className={`
          px-4 py-3 rounded-2xl 
          max-w-[90%] xs:max-w-[80%] sm:max-w-[75%] md:max-w-[70%] lg:max-w-[65%]
          break-words text-sm sm:text-base
          ${
            isSender
              ? "bg-gray-200 dark:bg-gray-600 dark:text-white font-josefin"
              : "bg-blue-500 text-white font-josefin"
          }
          shadow-sm
          transition-all duration-200
          hover:shadow-md
        `}
      >
        <div className="flex items-center gap-2">
          <span
            className={`${
              isSender ? "text-black dark:text-white" : "text-white"
            }`}
          >
            {massageSent}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SentMassage;
