import { motion } from "motion/react";
import svgPaths from "@/imports/svg-mkzpsoam6c";

function Group() {
  const lines = Array.from({ length: 9 }, (_, i) => i);
  
  return (
    <div className="absolute contents left-[8.89px] top-[19.12px]">
      {lines.map((index) => (
        <motion.div
          key={index}
          className="absolute bg-[rgba(24,24,27,0.1)] border border-[rgba(9,9,11,0.5)] border-dashed h-[30.769px] left-[9.89px] opacity-40 rounded-[8px] w-[380.215px]"
          style={{
            top: `${20.12 + index * 41.12}px`,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: 1, 
            opacity: 0.4,
          }}
          transition={{
            delay: index * 0.15,
            duration: 0.9,
            ease: "easeOut"
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              delay: index * 0.15 + 0.9,
              duration: 2.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        </motion.div>
      ))}
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
    <motion.div
      className="absolute bg-white content-stretch flex items-center left-[57.5px] p-[10px] rounded-[9999px] top-[173px]"
      initial={{ y: 20, opacity: 0 }}
      animate={{ 
        y: [0, -8, 0],
        opacity: 1,
      }}
      transition={{
        y: {
          delay: 0.5,
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut"
        },
        opacity: {
          delay: 0.5,
          duration: 0.5,
        }
      }}
    >
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Music />
    </motion.div>
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
    <motion.div
      className="absolute bg-white content-stretch flex items-center left-[134.5px] p-[10px] rounded-[9999px] top-[173px]"
      initial={{ y: 20, opacity: 0 }}
      animate={{ 
        y: [0, -8, 0],
        opacity: 1,
      }}
      transition={{
        y: {
          delay: 0.7,
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut"
        },
        opacity: {
          delay: 0.7,
          duration: 0.5,
        }
      }}
    >
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Music1 />
    </motion.div>
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
    <motion.div
      className="absolute bg-white content-stretch flex items-center left-[211.5px] p-[10px] rounded-[9999px] top-[173px]"
      initial={{ y: 20, opacity: 0 }}
      animate={{ 
        y: [0, -8, 0],
        opacity: 1,
      }}
      transition={{
        y: {
          delay: 0.9,
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut"
        },
        opacity: {
          delay: 0.9,
          duration: 0.5,
        }
      }}
    >
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Music2 />
    </motion.div>
  );
}

function TrackNext() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="track-next">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="track-next">
          <path d="M6 4L20 16L6 28V4Z" fill="var(--fill-0, #09090B)" stroke="var(--stroke-0, #09090B)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 4V28" stroke="var(--stroke-0, #09090B)" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <motion.div
      className="absolute bg-white content-stretch flex items-center left-[288.5px] p-[10px] rounded-[9999px] top-[173px]"
      initial={{ y: 20, opacity: 0 }}
      animate={{ 
        y: [0, -8, 0],
        opacity: 1,
      }}
      transition={{
        y: {
          delay: 1.1,
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut"
        },
        opacity: {
          delay: 1.1,
          duration: 0.5,
        }
      }}
    >
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <TrackNext />
    </motion.div>
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

export default function AnalyzingTrackMood() {
  return (
    <div className="bg-white relative size-full">
      <Frame1 />
      <motion.p
        className="absolute font-['Inter',sans-serif] font-normal leading-[28px] left-1/2 -translate-x-1/2 not-italic text-[#6B7280] text-[18px] text-center top-[calc(50%+194.61px)] tracking-[-0.4px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Analyzing track mood
      </motion.p>
    </div>
  );
}