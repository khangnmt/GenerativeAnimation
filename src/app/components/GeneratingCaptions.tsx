import { motion } from "motion/react";

function QuoteIcon({ delay = 0 }: { delay?: number }) {
  return (
    <motion.svg
      className="size-8"
      fill="none"
      viewBox="0 0 32 32"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      <path
        d="M8 20C10.2091 20 12 18.2091 12 16C12 13.7909 10.2091 12 8 12C5.79086 12 4 13.7909 4 16C4 18.2091 5.79086 20 8 20ZM8 20V12C8 8.68629 10.6863 6 14 6"
        stroke="#09090B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 20C26.2091 20 28 18.2091 28 16C28 13.7909 26.2091 12 24 12C21.7909 12 20 13.7909 20 16C20 18.2091 21.7909 20 24 20ZM24 20V12C24 8.68629 26.6863 6 30 6"
        stroke="#09090B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function TextLine({ delay = 0, width = "100%" }: { delay?: number; width?: string }) {
  return (
    <motion.div
      className="h-3 bg-zinc-200 rounded-full relative overflow-hidden"
      style={{ width }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ delay, duration: 0.9, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          delay: delay + 0.9,
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2.5,
        }}
      />
    </motion.div>
  );
}

function TypewriterText() {
  const text = "Creating the perfect caption...";
  
  return (
    <div className="flex flex-wrap gap-1 justify-center max-w-[300px]">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="text-zinc-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.08,
            duration: 0.15,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}

function FloatingQuote({ position, delay }: { position: { left: string; top: string }; delay: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: position.left, top: position.top }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [20, 0, -10, -30],
      }}
      transition={{
        delay,
        duration: 4,
        repeat: Infinity,
        repeatDelay: 3,
      }}
    >
      <svg className="size-6" fill="none" viewBox="0 0 24 24">
        <path
          d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15ZM6 15V9C6 6.51472 8.01472 4.5 10.5 4.5"
          stroke="#09090B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
        <path
          d="M18 15C19.6569 15 21 13.6569 21 12C21 10.3431 19.6569 9 18 9C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15ZM18 15V9C18 6.51472 20.0147 4.5 22.5 4.5"
          stroke="#09090B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
      </svg>
    </motion.div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute border border-[rgba(9,9,11,0.4)] border-dashed left-1/2 overflow-visible rounded-[12px] size-[400px] top-[255px]">
      {/* Floating quotes around the box */}
      <FloatingQuote position={{ left: "-40px", top: "80px" }} delay={0.5} />
      <FloatingQuote position={{ left: "410px", top: "120px" }} delay={1.2} />
      <FloatingQuote position={{ left: "-30px", top: "240px" }} delay={0.8} />
      <FloatingQuote position={{ left: "420px", top: "280px" }} delay={1.5} />
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-12">
        {/* Top quote icons */}
        <div className="flex gap-4">
          <QuoteIcon delay={0.2} />
          <QuoteIcon delay={0.4} />
          <QuoteIcon delay={0.6} />
        </div>
        
        {/* Text lines */}
        <div className="w-full flex flex-col gap-4">
          <TextLine delay={0.8} width="100%" />
          <TextLine delay={1.0} width="85%" />
          <TextLine delay={1.2} width="95%" />
          <TextLine delay={1.4} width="70%" />
        </div>
        
        {/* Typewriter effect */}
        <div className="mt-4">
          <TypewriterText />
        </div>
      </div>
    </div>
  );
}

export default function GeneratingCaptions() {
  return (
    <div className="bg-white relative size-full">
      <Frame1 />
      <motion.p
        className="absolute font-['Inter',sans-serif] font-normal leading-[28px] left-1/2 -translate-x-1/2 not-italic text-[#6B7280] text-[18px] text-center top-[calc(50%+194.61px)] tracking-[-0.4px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Crafting captions
      </motion.p>
    </div>
  );
}