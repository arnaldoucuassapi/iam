export default function Loading() {
  return (
    <div className="py-36">
      <div
        className={`
          animate-spin
          w-10 h-10 rounded-full
          border-2 border-blue-500 border-t-transparent
          m-auto
        `}
      ></div>
    </div>
  );
}