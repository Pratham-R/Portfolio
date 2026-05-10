"use client"
import { zapIcon, tarqa_ui, velox_ui } from '@/app/assets/assets'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense, useEffect, useState } from 'react'
import { motion } from "framer-motion"

const fullProjects = [
  {
    id: 1,
    title: "TarqaAI",
    description: "Multi-LLM routing platform supporting 20+ major providers (OpenAI, Claude, Gemini, AWS Nova, Qwen, DeepSeek, Kimi). Built a fault-tolerant routing layer with automatic provider failover and an AI-powered audit system for compliance and debugging.",
    image: tarqa_ui,
    techStack: {
      backend: ["Python", "FastAPI", "Redis"],
      database: ["PostgreSQL"],
      ai: ["LangChain", "Multi-LLM Integration"],
      devops: ["Docker", "AWS"]
    },
    links: [
      { type: "Live", url: "https://tarqaai.com" },
      { type: "github", url: "https://github.com/pratham-r" }
    ],
    metrics: [
      { label: "Monthly Requests", value: "10k+" },
      { label: "LLM Providers", value: "30+" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    id: 2,
    title: "VeloxAI",
    description: "AI agent automation platform that interprets natural language commands to orchestrate complex workflows within applications. Features an agentic architecture for intelligent multi-step task execution and backend action triggering.",
    image: velox_ui,
    techStack: {
      backend: ["Python", "Node.js"],
      ai: ["LangChain", "PyTorch", "LLMs"],
      frontend: ["React", "Next.js"],
      infrastructure: ["Docker", "Linux"]
    },
    links: [
      { type: "Live", url: "https://veloxai.xyz" },
      { type: "github", url: "https://github.com/pratham-r" }
    ],
    metrics: [
      { label: "Status", value: "MVP" },
      { label: "Task Accuracy", value: "High" },
      { label: "Integration", value: "Seamless" }
    ]
  }
];

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Small delay to prevent flash of loading state

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 flex justify-center items-center h-[50vh]">
        <div className="animate-pulse text-light-gray-2">Loading projects...</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header Section */}
      <section className="space-y-8">
        <SectionHeading
          icon={zapIcon}
          title="My Services"
          description="Full-stack development solutions with expertise in AI, blockchain, and web technologies"
        />
      </section>

      {/* Projects Showcase */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white px-2">Project Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Suspense fallback={
            <div className="col-span-3 text-center text-light-gray-2 py-8">
              Loading projects...
            </div>
          }>
            {fullProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: project.id * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-very-dark-gray border border-dark-gray-3 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="space-y-5 flex-grow">
                    {/* Project Header */}
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex gap-2 flex-wrap justify-end">
                        {project.links.map((link) => (
                          <Link
                            key={`${project.id}-${link.type}`}
                            href={link.url.startsWith('http') ? link.url : `https://${link.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-dark-gray-4 rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-1.5 text-sm min-w-fit"
                          >
                            <span className="capitalize">{link.type}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-light-gray-2 text-sm leading-relaxed">{project.description}</p>

                    {/* Tech Stack Breakdown */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-light-gray-3">Tech Stack</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(project.techStack).map(([category, technologies]) => (
                          <div key={`${project.id}-${category}`} className="space-y-1">
                            <p className="text-xs text-light-gray-4 capitalize">{category}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {technologies.map((tech: unknown) => (
                                <span
                                  key={`${project.id}-${tech}`}
                                  className="px-2.5 py-1 text-xs rounded-full bg-dark-gray-4 text-light-gray-2"
                                >
                                  {tech as string}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-4 mt-auto">
                    {project.metrics.map((metric) => (
                      <div
                        key={`${project.id}-${metric.label}`}
                        className="bg-dark-gray-3 p-2 rounded-lg text-center hover:bg-dark-gray-2 transition-colors"
                      >
                        <p className="text-xs text-light-gray-3">{metric.label}</p>
                        <p className="font-bold text-white">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </Suspense>
        </div>
      </section>
    </div>
  )
}