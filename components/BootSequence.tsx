'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootMessages = [
  '> booting system...',
  '> loading runtime...',
  '> compiling interface...',
  '> ready.',
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Check if user has seen boot sequence before
    const hasSeenBoot = localStorage.getItem('hasSeenBoot');

    if (hasSeenBoot === 'true') {
      setIsComplete(true);
      onComplete();
      return;
    }

    // Show boot sequence
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < bootMessages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(lineInterval);
          setTimeout(() => {
            setIsComplete(true);
            localStorage.setItem('hasSeenBoot', 'true');
            setTimeout(onComplete, 400);
          }, 600);
          return prev;
        }
      });
    }, 350);

    return () => clearInterval(lineInterval);
  }, [onComplete]);

  if (isComplete) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[10000] flex items-center justify-start bg-[#0a0a0a] px-8 md:px-16"
      >
        <div className="font-mono text-sm md:text-base space-y-2 max-w-2xl">
          {bootMessages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index <= currentLine ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              className="text-[#4ade80]"
            >
              {message}
              {index === currentLine && (
                <span className="terminal-cursor ml-1"></span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
