'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Project } from '@/types/project';
import { ExternalLink, Github, Calendar, User, Zap } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'production':
        return 'success';
      case 'in-progress':
        return 'warning';
      case 'completed':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'production':
        return '운영 중';
      case 'in-progress':
        return '진행 중';
      case 'completed':
        return '완료';
      default:
        return status;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl bg-white backdrop-blur-sm dark:bg-gray-900 flex flex-col">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
          <div className="absolute top-4 right-4 z-10">
            <Badge variant={getStatusColor(project.status)}>
              {getStatusText(project.status)}
            </Badge>
          </div>

          {/* Placeholder for project image */}
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center">
            <div className="text-center space-y-2">
              <Zap className="h-12 w-12 text-blue-500 mx-auto stroke-current" />
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {project.titleKo}
              </p>
            </div>
          </div>
        </div>

        <CardHeader className="pb-4 flex-shrink-0">
          <div className="flex items-start justify-between">
            <div className="space-y-1 flex-1">
              <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.titleKo}
              </CardTitle>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {project.title}
              </p>
            </div>
          </div>

          {/* Project Meta */}
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3 stroke-current" />
              {project.period}
            </div>
            <div className="flex items-center gap-1">
              <User className="h-3 w-3 stroke-current" />
              {project.role}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 flex-grow">
          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {project.overview}
          </p>

          {/* Key Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-md">
                  <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                    {key === 'users' ? '사용자' :
                     key === 'uptime' ? '업타임' :
                     key === 'performance' ? '성능' :
                     key === 'accuracy' ? '정확도' :
                     key === 'scale' ? '규모' : key}
                  </div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Preview */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">주요 기술스택</p>
            <div className="flex flex-wrap gap-1">
              {[
                ...(project.techStack.backend?.slice(0, 2) || []),
                ...(project.techStack.frontend?.slice(0, 2) || []),
                ...(project.techStack.ml?.slice(0, 2) || [])
              ].slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {Object.values(project.techStack).flat().length > 4 && (
                <Badge variant="secondary" className="text-xs">
                  +{Object.values(project.techStack).flat().length - 4}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex gap-2 flex-shrink-0">
          <Button size="sm" href={`/projects/${project.id}`} className="flex-1">
            자세히 보기
          </Button>

          {project.links.github && (
            <Button size="sm" variant="outline" href={project.links.github}>
              <Github className="h-4 w-4 stroke-current" />
            </Button>
          )}

          {project.links.live && (
            <Button size="sm" variant="outline" href={project.links.live}>
              <ExternalLink className="h-4 w-4 stroke-current" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;