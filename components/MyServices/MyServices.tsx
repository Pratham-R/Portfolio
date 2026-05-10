"use client"
import React from 'react'
import SectionHeading from '../SectionHeading'
import { rightArrow, zapIcon } from '@/app/assets/assets'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { StaticImageData } from 'next/image';


import { myServices } from '@/data'

export default function MyServices() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex flex-col gap-8 w-full">
                <SectionHeading
                    icon={zapIcon}
                    title='My Expertise'
                    description='Building intelligent systems and scalable backend architectures that drive innovation.'
                />

                <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
                >
                    {myServices.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </motion.ul>
            </div>
        </section>
    )
}

type Service = {
    id: number;
    icon: StaticImageData | string;
    title: string;
    description: string;
    link: string;
};

function ServiceCard({ service, index }: { service: Service, index: number }) {
    return (
        <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full h-full"
        >
            <Link
                href={service.link}
                className="group h-full flex flex-col border border-dark-gray-3 bg-very-dark-gray rounded-xl p-5 hover:border-light-gray-3 transition-all duration-300 hover:shadow-lg"
            >
                <div className="flex items-start gap-4 w-full">
                    {/* Icon */}
                    <div className="flex-shrink-0 p-2 border border-border-color bg-dark-gray-3 rounded-lg group-hover:bg-dark-gray-4 transition-colors duration-300">
                        <div className="w-8 h-8 relative">
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-light-gray-3 transition-colors duration-300 line-clamp-2">
                                {service.title}
                            </h3>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Image
                                    src={rightArrow}
                                    alt="arrow"
                                    width={18}
                                    height={18}
                                    className="group-hover:rotate-45 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <p className="mt-2 text-light-gray-2 text-sm md:text-base group-hover:text-light-gray-3 transition-colors duration-300 line-clamp-3">
                            {service.description}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.li>
    )
}