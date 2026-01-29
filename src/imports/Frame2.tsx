import svgPaths from "./svg-mkzpsoam6c";

function Group() {
  return (
    <div className="absolute contents left-[8.89px] top-[19.12px]">
      <div className="absolute bg-[rgba(24,24,27,0.1)] border border-[rgba(9,9,11,0.5)] border-dashed h-[30.769px] left-[9.89px] opacity-40 rounded-[8px] top-[20.12px] w-[380.215px]" />
      <div className="absolute bg-[rgba(24,24,27,0.1)] border border-[rgba(9,9,11,0.5)] border-dashed h-[30.769px] left-[9.89px] opacity-40 rounded-[8px] top-[61.24px] w-[380.215px]" />
      <div className="absolute bg-[rgba(24,24,27,0.1)] border border-[rgba(9,9,11,0.5)] border-dashed h-[30.769px] left-[9.89px] opacity-40 rounded-[8px] top-[102.37px] w-[380.215px]" />
      <div className="absolute bg-[rgba(24,24,27,0.1)] border border-[rgba(9,9,11,0.5)] border-dashed h-[30.769px] left-[9.89px] opacity-40 rounded-[8px] top-[143.49px] w-[380.215px]" />
      <div className="absolute bg-[rgba(24,24,27,0.1)] border border-[rgba(9,9,11,0.5)] border-dashed h-[30.769px] left-[9.89px] opacity-40 rounded-[8px] top-[184.62px] w-[380.215px]" />
      <div className="absolute bg-[rgba(24,24,27,0.1)] border border-[rgba(9,9,11,0.5)] border-dashed h-[30.769px] left-[9.89px] opacity-40 rounded-[8px] top-[225.74px] w-[380.215px]" />
      <div className="absolute bg-[rgba(24,24,27,0.1)] border border-[rgba(9,9,11,0.5)] border-dashed h-[30.769px] left-[9.89px] opacity-40 rounded-[8px] top-[266.86px] w-[380.215px]" />
      <div className="absolute bg-[rgba(24,24,27,0.1)] border border-[rgba(9,9,11,0.5)] border-dashed h-[30.769px] left-[9.89px] opacity-40 rounded-[8px] top-[307.99px] w-[380.215px]" />
      <div className="absolute bg-[rgba(24,24,27,0.1)] border border-[rgba(9,9,11,0.5)] border-dashed h-[30.769px] left-[9.89px] opacity-40 rounded-[8px] top-[349.11px] w-[380.215px]" />
    </div>
  );
}

function Music() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="music">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="music">
          <path d={svgPaths.p3b30a900} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[57.5px] p-[10px] rounded-[9999px] top-[173px]">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Music />
    </div>
  );
}

function Music1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="music-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="music-2">
          <path d={svgPaths.p33cda260} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[134.5px] p-[10px] rounded-[9999px] top-[173px]">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Music1 />
    </div>
  );
}

function Music2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="music-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="music-3">
          <path d={svgPaths.p198122c0} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[211.5px] p-[10px] rounded-[9999px] top-[173px]">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Music2 />
    </div>
  );
}

function TrackNext() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="track-next">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="track-next">
          <path d={svgPaths.p2327f900} fill="var(--fill-0, #09090B)" id="Vector" stroke="var(--stroke-0, #09090B)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[288.5px] p-[10px] rounded-[9999px] top-[173px]">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <TrackNext />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute border border-[rgba(9,9,11,0.4)] border-dashed left-1/2 overflow-clip rounded-[12px] size-[400px] top-[255px]">
      <Group />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Frame1 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-[calc(50%-121px)] not-italic text-[#09090b] text-[24px] top-[calc(50%+194.61px)] tracking-[-0.6px]">Analyzing track mood</p>
    </div>
  );
}