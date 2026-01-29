import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnalyzingTrackMood from "@/app/components/AnalyzingTrackMood";
import MatchingCreativeVibe from "@/app/components/MatchingCreativeVibe";
import GeneratingCaptions from "@/app/components/GeneratingCaptions";
import StitchingIngredients from "@/app/components/StitchingIngredients";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  
  // Auto-switch between screens every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % 4);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const screens = [
    { key: "analyzing", component: <AnalyzingTrackMood /> },
    { key: "matching", component: <MatchingCreativeVibe /> },
    { key: "captions", component: <GeneratingCaptions /> },
    { key: "stitching", component: <StitchingIngredients /> },
  ];

  return (
    <div className="size-full flex items-center justify-center bg-white relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={screens[currentScreen].key}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          {screens[currentScreen].component}
        </motion.div>
      </AnimatePresence>
      
    
    </div>
  );
}