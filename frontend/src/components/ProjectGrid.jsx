import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Grand Portfolio',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    year: '2024',
    client: 'Personal',
    description: 'A visually stunning portfolio with glassmorphism, gradients, and premium animations.'
  },
  {
    title: 'Minimalist Gallery',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    year: '2023',
    client: 'Art Studio',
    description: 'A clean, image-first gallery with smooth transitions.'
  },
  // Add more projects as needed
];

export default function ProjectGrid({ onSelect }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black px-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-24">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} onClick={() => onSelect && onSelect(project)} idx={idx} />
        ))}
      </div>
    </section>
  );
} 