import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkillIconProps {
  skill: string;
  icon: ReactNode;
  index: number;
}

export const SkillIcon = ({ skill, icon, index }: SkillIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      className="group relative"
    >
      {/* Main container */}
      <div className="relative overflow-hidden rounded-2xl bg-transparent backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.02]">
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3">
          <div className="text-cyan-400 text-2xl">
            {icon}
          </div>
          <span className="text-white text-lg font-medium">{skill}</span>
        </div>

        {/* Glowing border container */}
        <div className="absolute inset-0 rounded-2xl">
          {/* Animated gradient border */}
          <div
            className="absolute inset-0 rounded-2xl animate-border-flow"
            style={{
              padding: '1px',
              background: `
                linear-gradient(90deg, 
                  transparent 0%, 
                  rgba(6, 182, 212, 0.8) 50%,
                  transparent 100%
                ),
                linear-gradient(180deg,
                  transparent 0%,
                  rgba(6, 182, 212, 0.8) 50%,
                  transparent 100%
                )
              `,
              backgroundSize: '200% 200%',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor'
            }}
          />
        </div>

        {/* Subtle background glow on hover */}
        <div
          className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-xl"
          style={{
            background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.08), transparent 70%)'
          }}
        />
      </div>
    </motion.div>
  );
}; 