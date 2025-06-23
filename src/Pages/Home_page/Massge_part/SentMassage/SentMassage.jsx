const SentMassage = ({ massageSent, isSender }) => {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-2xl max-w-[70%] break-words ${
          isSender
            ? "bg-gray-300 text-black_color  font-josefin font-bold text-balance capitalize "
            : "bg-gray-300 text-black font-josefin font-bold capitalize"
        }`}
      >
        {massageSent}
      </div>
    </div>
  );
};

export default SentMassage;
