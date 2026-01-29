import { motion } from "motion/react";
import svgPaths from "@/imports/svg-8c2z0jx0v5";

// Define floating animations for each icon with unique patterns
const floatingVariants = {
  quote: {
    x: [0, 15, -10, 0],
    y: [0, -20, 10, 0],
    rotate: [0, 5, -3, 0],
  },
  heart: {
    x: [0, -12, 8, 0],
    y: [0, 15, -8, 0],
    rotate: [0, -4, 6, 0],
    scale: [1, 1.05, 0.98, 1],
  },
  cat: {
    x: [0, 10, -15, 0],
    y: [0, -10, 15, 0],
    rotate: [0, 8, -5, 0],
  },
  cake: {
    x: [0, -8, 12, 0],
    y: [0, 18, -12, 0],
    rotate: [0, -6, 4, 0],
  },
  thumbsUp: {
    x: [0, 14, -9, 0],
    y: [0, -15, 8, 0],
    rotate: [0, 4, -7, 0],
  },
  star: {
    x: [0, -11, 13, 0],
    y: [0, 12, -14, 0],
    rotate: [0, 10, -8, 0],
    scale: [1, 1.08, 0.95, 1],
  },
  soup: {
    x: [0, 9, -14, 0],
    y: [0, -18, 11, 0],
    rotate: [0, -5, 7, 0],
  },
  frown: {
    x: [0, -13, 10, 0],
    y: [0, 14, -9, 0],
    rotate: [0, 6, -4, 0],
  },
};

function Quote() {
  return (
    <motion.div
      className="absolute left-[269.02px] size-[44px] top-[362.33px]"
      data-name="quote"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        ...floatingVariants.quote,
      }}
      transition={{
        opacity: { duration: 0.4, delay: 0.7 },
        scale: { duration: 0.4, delay: 0.7 },
        x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="quote">
          <path d={svgPaths.p3c7ee980} fill="var(--fill-0, #09090B)" id="Vector" stroke="var(--stroke-0, #09090B)" strokeWidth="3" />
        </g>
      </svg>
    </motion.div>
  );
}

function Heart() {
  return (
    <motion.div
      className="absolute h-[44px] left-[62.79px] top-[36px] w-[43px]"
      data-name="heart"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: floatingVariants.heart.scale,
        x: floatingVariants.heart.x,
        y: floatingVariants.heart.y,
        rotate: floatingVariants.heart.rotate,
      }}
      transition={{
        opacity: { duration: 0.4, delay: 0.1 },
        scale: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
        x: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
        y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
        rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 },
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 44">
        <g id="heart">
          <path d="M21.5 38.5L19.2 36.4C11.8 29.7 6.5 24.9 6.5 19C6.5 14.2 10.2 10.5 15 10.5C17.7 10.5 20.3 11.8 21.5 13.8C22.7 11.8 25.3 10.5 28 10.5C32.8 10.5 36.5 14.2 36.5 19C36.5 24.9 31.2 29.7 23.8 36.4L21.5 38.5Z" fill="var(--fill-0, #09090B)" stroke="var(--stroke-0, #09090B)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </motion.div>
  );
}

function Cat() {
  return (
    <motion.div
      className="absolute left-[304px] size-[43px] top-[87.38px]"
      data-name="cat"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        ...floatingVariants.cat,
      }}
      transition={{
        opacity: { duration: 0.4, delay: 0.2 },
        scale: { duration: 0.4, delay: 0.2 },
        x: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
        y: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
        rotate: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
        <g id="cat">
          <path d={svgPaths.pe27cc00} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </motion.div>
  );
}

function Cake() {
  return (
    <motion.div
      className="absolute left-[309.36px] size-[44px] top-[254.2px]"
      data-name="cake"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        ...floatingVariants.cake,
      }}
      transition={{
        opacity: { duration: 0.4, delay: 0.5 },
        scale: { duration: 0.4, delay: 0.5 },
        x: { duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        y: { duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        rotate: { duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="cake">
          <path d={svgPaths.p37522980} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </motion.div>
  );
}

function ThumbsUp() {
  return (
    <motion.div
      className="absolute h-[45px] left-[126px] top-[108.88px] w-[44px]"
      data-name="thumbs-up"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        ...floatingVariants.thumbsUp,
      }}
      transition={{
        opacity: { duration: 0.4, delay: 0.3 },
        scale: { duration: 0.4, delay: 0.3 },
        x: { duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
        y: { duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
        rotate: { duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 45">
        <g id="thumbs-up">
          <path d={svgPaths.p1aa9800} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </motion.div>
  );
}

function Star() {
  return (
    <motion.div
      className="absolute left-[148px] size-[44px] top-[239.54px]"
      data-name="star"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: floatingVariants.star.scale,
        x: floatingVariants.star.x,
        y: floatingVariants.star.y,
        rotate: floatingVariants.star.rotate,
      }}
      transition={{
        opacity: { duration: 0.4, delay: 0.4 },
        scale: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
        x: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
        y: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
        rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="star">
          <path d={svgPaths.p3668c900} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </motion.div>
  );
}

function Soup() {
  return (
    <motion.div
      className="absolute h-[44px] left-[23.38px] top-[308px] w-[43px]"
      data-name="soup"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        ...floatingVariants.soup,
      }}
      transition={{
        opacity: { duration: 0.4, delay: 0.6 },
        scale: { duration: 0.4, delay: 0.6 },
        x: { duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
        y: { duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
        rotate: { duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 44">
        <g id="soup">
          <path d={svgPaths.p2f07d170} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </motion.div>
  );
}

function Frown() {
  return (
    <motion.div
      className="absolute left-[222px] size-[44px] top-[163.96px]"
      data-name="frown"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        ...floatingVariants.frown,
      }}
      transition={{
        opacity: { duration: 0.4, delay: 0.35 },
        scale: { duration: 0.4, delay: 0.35 },
        x: { duration: 6.3, repeat: Infinity, ease: "easeInOut", delay: 0.35 },
        y: { duration: 6.3, repeat: Infinity, ease: "easeInOut", delay: 0.35 },
        rotate: { duration: 6.3, repeat: Infinity, ease: "easeInOut", delay: 0.35 },
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="frown">
          <path d={svgPaths.p3d339a00} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </motion.div>
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

export default function MatchingCreativeVibe() {
  return (
    <div className="bg-white relative size-full">
      <motion.p
        className="absolute font-['Inter',sans-serif] font-normal leading-[28px] left-1/2 -translate-x-1/2 not-italic text-[#6B7280] text-[18px] text-center top-[calc(50%+216.75px)] tracking-[-0.4px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Matching creative vibe
      </motion.p>
      <Frame1 />
    </div>
  );
}