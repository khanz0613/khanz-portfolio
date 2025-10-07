import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects-data';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft, Github, ExternalLink, Calendar, User, Code, Database, Cpu, Globe, Server, Cloud } from 'lucide-react';

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return {
      title: '프로젝트를 찾을 수 없습니다',
    };
  }

  return {
    title: `${project.titleKo} | 하경한 포트폴리오`,
    description: project.overview,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  const getStatusColor = (status: typeof project.status) => {
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

  const getStatusText = (status: typeof project.status) => {
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

  const getTechIcon = (category: string) => {
    switch (category) {
      case 'backend':
        return <Server className="h-5 w-5 stroke-current" />;
      case 'frontend':
        return <Globe className="h-5 w-5 stroke-current" />;
      case 'ml':
        return <Cpu className="h-5 w-5 stroke-current" />;
      case 'database':
        return <Database className="h-5 w-5 stroke-current" />;
      case 'devops':
        return <Cloud className="h-5 w-5 stroke-current" />;
      default:
        return <Code className="h-5 w-5 stroke-current" />;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'backend':
        return '백엔드';
      case 'frontend':
        return '프론트엔드';
      case 'ml':
        return '머신러닝/AI';
      case 'database':
        return '데이터베이스';
      case 'devops':
        return 'DevOps';
      default:
        return category;
    }
  };

  const getMetricLabel = (key: string) => {
    const labels: { [key: string]: string } = {
      'users': '사용자',
      'uptime': '업타임',
      'performance': '성능',
      'accuracy': '정확도',
      'scale': '규모',
      'features': '기능',
      'testCoverage': '테스트 커버리지',
      'datasets': '데이터셋',
      'vocabulary': '어휘',
      'efficiency': '효율성',
      'automation': '자동화',
      'deployment': '배포'
    };
    return labels[key] || key;
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-20 gradient-bg">
        <div className="container-width section-padding">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <Badge variant={getStatusColor(project.status)}>
                {getStatusText(project.status)}
              </Badge>
            </div>

            <h1 className="text-5xl font-bold">
              <span className="gradient-text">{project.titleKo}</span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              {project.title}
            </p>

            <div className="flex justify-center">
              <Button variant="outline" href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4 stroke-current" />
                프로젝트 목록으로
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  프로젝트 정보
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <Calendar className="h-5 w-5 text-blue-500 stroke-current" />
                    <span><strong>기간:</strong> {project.period}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <User className="h-5 w-5 text-blue-500 stroke-current" />
                    <span><strong>역할:</strong> {project.role}</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  링크
                </h2>
                <div className="flex gap-3">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4 stroke-current" />
                      GitHub
                    </Button>
                  )}
                  {project.links.live && (
                    <Button
                      variant="outline"
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 stroke-current" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                프로젝트 개요
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">
                <span className="gradient-text">기술 스택</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                이 프로젝트에서 사용된 기술들입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <div key={category} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-600 dark:text-blue-400">
                      {getTechIcon(category)}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {getCategoryName(category)}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      {project.metrics && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-width section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold">
                  <span className="gradient-text">프로젝트 성과</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  이 프로젝트에서 달성한 주요 지표들입니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {value}
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-gray-100 capitalize">
                      {getMetricLabel(key)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-width section-padding text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="gradient-text">더 많은 프로젝트 보기</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              다른 프로젝트들도 확인해보시거나 궁금한 점이 있으시면 연락주세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" href="/projects">
                다른 프로젝트 보기
              </Button>
              <Button size="lg" variant="outline" href="/contact">
                문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}