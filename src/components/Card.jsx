import { PatternDividerDesktop, PatternDividerMobile } from "./PatternDivider";
import { IconDice } from "./IconDice";

export default function ThanksCard({ slip, fetchAdvice, loading }) {
  return (
    <>
      <p className="text-sm text-center text-neon-green font-bold uppercase">
        Advice #{slip.id}
      </p>

      <h1 className="text-center py-3 text-light-cyan leading-normal font-bold">
        {/* {loading ? "Loading..." : <> &ldquo;{slip.advice}&rdquo;</>} */}
        &ldquo;{slip.advice}&rdquo;
      </h1>

      <div className="flex flex-col items-center justify-center">
        <div className="sm:hidden">
          <PatternDividerMobile />
        </div>
        <div className="hidden sm:block">
          <PatternDividerDesktop />
        </div>
      </div>

      <button
        type="button"
        onClick={fetchAdvice}
        className={`rounded-full ${loading ? "bg-light-cyan shadow-cyan cursor-not-allowed" : "bg-neon-green hover:shadow-3xl"}  p-5 absolute -bottom-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2  transition duration-200 ease-linear`}
        disabled={loading}
      >
        <IconDice />
      </button>
    </>
  );
}
