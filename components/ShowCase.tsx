"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { flyIcon, aiMagic, mneeCommit, Wanderify, OneStudios } from '@/app/assets/assets'
import ProjectCard from './ui/ProjectCard'
import Link from 'next/link'

import { myShowCases } from '@/data'

export default function ShowCase() {
    return (
        <section className='w-full max-w-7xl mx-auto px-4 sm:px-6 py-12'>
            <div className='flex flex-col gap-8 w-full'>
                <SectionHeading
                    title='Featured Projects'
                    icon={flyIcon}
                    description='Production-grade applications built with modern technologies'
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {myShowCases.map((item, index) => (
                        <ProjectCard key={item.id} item={item} index={index} />
                    ))}
                </div>

                <div className="flex justify-center mt-6">
                    <Link
                        href="/projects"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-dark-gray-3 hover:bg-dark-gray-4 border border-dark-gray-4 hover:border-primary/40 transition-all duration-300 group"
                    >
                        <span className="font-medium text-light-gray-3 group-hover:text-primary">
                            View All Projects
                        </span>
                        <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}