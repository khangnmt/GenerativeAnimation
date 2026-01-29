import svgPaths from "./svg-8c2z0jx0v5";

function Quote() {
  return (
    <div className="absolute left-[269.02px] size-[44px] top-[362.33px]" data-name="quote">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="quote">
          <path d={svgPaths.p3c7ee980} fill="var(--fill-0, #09090B)" id="Vector" stroke="var(--stroke-0, #09090B)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Heart() {
  return (
    <div className="absolute h-[44px] left-[62.79px] top-[36px] w-[43px]" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 44">
        <g id="heart">
          <path d={svgPaths.p92c9700} fill="var(--fill-0, #09090B)" id="Vector" stroke="var(--stroke-0, #09090B)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Cat() {
  return (
    <div className="absolute left-[304px] size-[43px] top-[87.38px]" data-name="cat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
        <g id="cat">
          <path d={svgPaths.pe27cc00} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Cake() {
  return (
    <div className="absolute left-[309.36px] size-[44px] top-[254.2px]" data-name="cake">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="cake">
          <path d={svgPaths.p37522980} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function ThumbsUp() {
  return (
    <div className="absolute h-[45px] left-[126px] top-[108.88px] w-[44px]" data-name="thumbs-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 45">
        <g id="thumbs-up">
          <path d={svgPaths.p1aa9800} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Star() {
  return (
    <div className="absolute left-[148px] size-[44px] top-[239.54px]" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="star">
          <path d={svgPaths.p3668c900} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Soup() {
  return (
    <div className="absolute h-[44px] left-[23.38px] top-[308px] w-[43px]" data-name="soup">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 44">
        <g id="soup">
          <path d={svgPaths.p2f07d170} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frown() {
  return (
    <div className="absolute left-[222px] size-[44px] top-[163.96px]" data-name="frown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="frown">
          <path d={svgPaths.p3d339a00} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute border border-[rgba(9,9,11,0.4)] border-dashed left-1/2 overflow-clip rounded-[12px] size-[400px] top-[255px]">
      <Quote />
      <Heart />
      <Cat />
      <Cake />
      <ThumbsUp />
      <Star />
      <Soup />
      <Frown />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-[calc(50%-126px)] not-italic text-[#09090b] text-[24px] top-[calc(50%+216.75px)] tracking-[-0.6px]">Matching creative vibe</p>
      <Frame1 />
    </div>
  );
}