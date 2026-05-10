"use client"
import React from 'react'
import SectionHeading from '../SectionHeading'
import { rightArrow, trophyIcon } from '@/app/assets/assets'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

import { myAchievements as achievements } from '@/data'


export default function Achievements() {
  return (
    <section className="w-full px-4 sm:px-6 py-12 max-w-7xl mx-auto relative bg-[radial-gradient(circle_at_50%_50%,_#1a1a2e33_0%,_#16213e00_70%)] bg-[url('/path-to-grid-pattern.png')] bg-repeat">
      <div className="flex flex-col gap-8 w-full">
        <SectionHeading 
          icon={trophyIcon} 
          title="My Achievements" 
          description="A showcase of my accomplishments in hackathons, competitive programming, and academics." 
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full overflow-hidden"
        >
          <div className="relative">
            {achievements.map((achievement, index) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
                index={index}
                total={achievements.length}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

type AchievementItem = {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData;
};

function AchievementBadge({ achievement, index, total }: { achievement: AchievementItem, index: number, total: number }) {
  const isLast = index === total - 1;
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false;

  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 0 : index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "20px" }}
      className="mb-8 relative"
    >
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute w-1 h-full bg-dark-gray-3/50 top-12 left-5 transform -translate-x-1/2" />
      )}
      
      {/* Badge */}
      <div className="flex items-start gap-4 w-full group">
        <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/30 bg-primary/10 flex items-center justify-center relative">
          <Image 
            src={achievement.icon} 
            alt={achievement.title} 
            width={30}
            height={30}
            className="object-contain"
          />
          {!isLast && (
            <div className="absolute w-2 h-2 bg-primary rounded-full top-full mt-2 left-1/2 transform -translate-x-1/2" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-light-gray-1 text-lg">
            {achievement.title}
          </h3>
          <p className="text-light-gray-2 text-sm mt-2 leading-relaxed">
            {achievement.description}
          </p>
        </div>
        
        <div className="flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <Image 
            src={rightArrow} 
            alt="arrow" 
            width={20} 
            height={20} 
            className="mt-1"
          />
        </div>
      </div>
    </motion.div>
  )
}