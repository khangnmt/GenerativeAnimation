import { motion } from "motion/react";

function CircleElement({ 
  delay, 
  angle, 
  color, 
  icon 
}: { 
  delay: number; 
  angle: number; 
  color: string; 
  icon: React.ReactNode;
}) {
  const radius = 120;
  const centerX = 200;
  const centerY = 200;
  
  const startX = centerX + Math.cos(angle) * radius;
  const startY = centerY + Math.sin(angle) * radius;
  
  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-full size-16"
      style={{
        backgroundColor: "white",
        border: "2px solid #09090B",
      }}
      initial={{
        left: `${startX}px`,
        top: `${startY}px`,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        left: [`${startX}px`, `${centerX}px`],
        top: [`${startY}px`, `${centerX}px`],
        opacity: [0, 1, 1],
        scale: [0, 1.2, 1],
        rotate: [0, 360],
      }}
      transition={{
        delay,
        duration: 2.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      }}
    >
      {icon}
    </motion.div>
  );
}

function CenterCircle() {
  return (
    <motion.div
      className="absolute left-[168px] top-[168px] size-16 rounded-full bg-white border-2 border-[#09090B] flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0, 1.3, 1],
        opacity: 1,
      }}
      transition={{
        delay: 2.5,
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <motion.svg
        className="size-8"
        fill="none"
        viewBox="0 0 24 24"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          delay: 3.3,
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          stroke="#09090B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}

function ConnectionLine({ 
  delay, 
  angle 
}: { 
  delay: number; 
  angle: number;
}) {
  const radius = 120;
  const centerX = 200;
  const centerY = 200;
  
  const endX = centerX + Math.cos(angle) * radius;
  const endY = centerY + Math.sin(angle) * radius;
  
  return (
    <motion.line
      x1={centerX}
      y1={centerY}
      x2={endX}
      y2={endY}
      stroke="#09090B"
      strokeWidth="2"
      strokeDasharray="5,5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      transition={{
        delay: delay + 2.2,
        duration: 0.8,
        ease: "easeOut",
      }}
    />
  );
}

function PulseRing({ delay }: { delay: number }) {
  return (
    <motion.circle
      cx="200"
      cy="200"
      r="80"
      fill="none"
      stroke="#09090B"
      strokeWidth="2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.5, 2],
        opacity: [0.5, 0.2, 0],
      }}
      transition={{
        delay,
        duration: 3,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 2,
      }}
    />
  );
}

function Frame1() {
  const elements = [
    { 
      angle: 0, 
      color: "#FEF3C7", 
      icon: (
        <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="#09090B" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l6-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm6-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      ), 
      delay: 0.2 
    },
    { 
      angle: Math.PI / 4, 
      color: "#DBEAFE", 
      icon: (
        <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="#09090B" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.5A1.5 1.5 0 019 2h6a1.5 1.5 0 011.5 1.5v6A1.5 1.5 0 0115 11H9a1.5 1.5 0 01-1.5-1.5v-6zM4 13h16M4 17h16M7 21h10" />
        </svg>
      ), 
      delay: 0.4 
    },
    { 
      angle: Math.PI / 2, 
      color: "#FCE7F3", 
      icon: (
        <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="#09090B" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ), 
      delay: 0.6 
    },
    { 
      angle: (3 * Math.PI) / 4, 
      color: "#E0E7FF", 
      icon: (
        <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="#09090B" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ), 
      delay: 0.8 
    },
    { 
      angle: Math.PI, 
      color: "#DCFCE7", 
      icon: (
        <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="#09090B" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ), 
      delay: 1.0 
    },
    { 
      angle: (5 * Math.PI) / 4, 
      color: "#FED7AA", 
      icon: (
        <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="#09090B" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      ), 
      delay: 1.2 
    },
    { 
      angle: (3 * Math.PI) / 2, 
      color: "#E9D5FF", 
      icon: (
        <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="#09090B" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ), 
      delay: 1.4 
    },
    { 
      angle: (7 * Math.PI) / 4, 
      color: "#FEE2E2", 
      icon: (
        <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="#09090B" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ), 
      delay: 1.6 
    },
  ];
  
  return (
    <div className="-translate-x-1/2 absolute border border-[rgba(9,9,11,0.4)] border-dashed left-1/2 overflow-visible rounded-[12px] size-[400px] top-[255px]">
      {/* SVG for lines and pulse rings */}
      <svg className="absolute inset-0 size-full pointer-events-none" viewBox="0 0 400 400">
        <PulseRing delay={2.0} />
        <PulseRing delay={2.5} />
        <PulseRing delay={3.0} />
        
        {elements.map((element, index) => (
          <ConnectionLine key={index} delay={element.delay} angle={element.angle} />
        ))}
      </svg>
      
      {/* Floating elements */}
      {elements.map((element, index) => (
        <CircleElement
          key={index}
          delay={element.delay}
          angle={element.angle}
          color={element.color}
          icon={element.icon}
        />
      ))}
      
      {/* Center piece */}
      <CenterCircle />
    </div>
  );
}

export default function StitchingIngredients() {
  return (
    <div className="bg-white relative size-full">
      <Frame1 />
      <motion.p
        className="absolute font-['Inter',sans-serif] font-normal leading-[28px] left-1/2 -translate-x-1/2 not-italic text-[#6B7280] text-[18px] text-center top-[calc(50%+194.61px)] tracking-[-0.4px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Stitching all ingredients
      </motion.p>
    </div>
  );
}