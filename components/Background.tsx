import Stars from "./Stars";

export default function Background() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-50 bg-[#050505]" />

      {/* Stars */}
      <Stars />

      {/* Purple Glow */}
      <div className="fixed inset-0 -z-40 flex items-center justify-center">

        <div
          className="
            w-[900px]
            h-[900px]
            rounded-full
            bg-violet-600
            opacity-30
            blur-[220px]
          "
        />

      </div>

    </>
  );
}