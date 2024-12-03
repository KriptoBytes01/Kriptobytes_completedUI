export default function CareerVideo() {
  return (
    <div className="w-full py-16 bg-slate-600 flex justify-center items-center">
      {/* Video Box */}
      <div className="w-11/12 max-w-4xl bg-white p-4 rounded-lg shadow-lg">
        <video
          controls
          autoPlay
          loop
          muted
          className="w-full rounded-lg"
        >
          <source src="/videos/career-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
