'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Download, ExternalLink, Github } from 'lucide-react';

const Hero = () => {
  const metrics = [
    { label: '완료 프로젝트', value: '5개', color: 'success' as const },
    { label: '기술 스택', value: '15+', color: 'default' as const },
    { label: '개발 경험', value: '3년+', color: 'warning' as const },
    { label: 'ML 정확도', value: '90%+', color: 'secondary' as const }
  ];

  const typewriterWords = [
    'Full-Stack Developer',
    'ML Engineer',
    'DevOps Specialist',
    '풀스택 개발자',
    'ML 엔지니어',
    'DevOps 전문가'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              안녕하세요! 👋
            </p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">하경한</span>
              <br />
              <span className="text-gray-900 dark:text-gray-100">Kyunghan Ha</span>
            </h1>
          </motion.div>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-16 flex items-center justify-center"
          >
            <TypewriterEffect words={typewriterWords} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            풀스택 개발부터 머신러닝까지 다양한 기술 스택을 활용한 실무 프로젝트 경험을 보유한 개발자입니다.
            <br />
            현재까지 <strong className="text-blue-600 dark:text-blue-400">5개의 프로젝트</strong>를 완료했으며,
            <strong className="text-green-600 dark:text-green-400">풀스택 개발부터 AI까지</strong> 다양한 기술을 다룰 수 있습니다.
          </motion.p>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="glass rounded-lg p-4 text-center min-w-[120px]"
              >
                <Badge variant={metric.color} className="mb-2">
                  {metric.value}
                </Badge>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" href="/projects" className="group">
              프로젝트 보기
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" href="/contact" className="group">
              연락하기
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="ghost" size="lg" href="https://github.com/khanz0613" target="_blank" rel="noopener noreferrer" className="group">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="fixed bottom-8 right-8 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Typewriter Effect Component
const TypewriterEffect = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText !== currentWord) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText !== '') {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
      {currentText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default Hero;