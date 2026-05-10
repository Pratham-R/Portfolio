"use client"
import React from 'react'
import SectionHeading from '../SectionHeading'
import { rightArrow, stackIcon } from '@/app/assets/assets'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { myStack } from '@/data'

export default function MyStack() {
    return (
        <section className='w-full px-4 sm:px-6 py-12 max-w-7xl mx-auto'>
            <div className='flex flex-col gap-8 w-full'>
                <SectionHeading 
                    icon={stackIcon} 
                    title='My Tech Stack' 
                    description='Expertise in building scalable backend systems, AI agents, and production-grade applications.' 
                />
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="w-full overflow-hidden"
                >
                    <motion.ul
                        className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                    >
                        {myStack.map((stack, index) => (
                            <TechStackCard 
                                key={stack.id}
                                stack={stack}
                                index={index}
                            />
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    )
}

type StackItem = {
    id: number;
    logo: StaticImageData;
    title: string;
    description: string;
    link: string;
};

function TechStackCard({ stack, index }: { stack: StackItem, index: number }) {
    return (
        <motion.li
            key={stack.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "20px" }}
            className="w-full h-full min-w-0"
        >
            <Link 
                href={stack.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full p-4 rounded-lg border border-dark-gray-3 bg-gradient-to-br from-dark-gray-3/80 to-very-dark-gray transition-all duration-300 hover:shadow-md hover:border-primary/40 overflow-hidden"
            >
                <div className="flex items-start gap-3 w-full">
                    {/* Logo */}
                    <div className="flex-shrink-0 p-2 rounded-md border border-primary/30 bg-primary/10">
                        <div className="w-7 h-7 relative">
                            {stack.logo ? (
                                <Image 
                                    src={stack.logo} 
                                    alt={stack.title} 
                                    width={28}
                                    height={28}
                                    className="object-contain"
                                />
                            ) : (
                                <div className="w-full h-full bg-dark-gray-3 rounded"></div>
                            )}
                        </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate text-light-gray-1">
                            {stack.title}
                        </h3>
                        <p className="text-light-gray-2 text-sm mt-1 line-clamp-2">
                            {stack.description}
                        </p>
                    </div>
                    
                    {/* Arrow Indicator */}
                    <div className="flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        <Image 
                            src={rightArrow} 
                            alt="arrow" 
                            width={16} 
                            height={16} 
                            className="mt-1"
                        />
                    </div>
                </div>
            </Link>
        </motion.li>
    )
}