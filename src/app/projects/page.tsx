import { Metadata } from 'next';
import ProjectCard from '@/components/project/ProjectCard';
import { projects } from '@/lib/projects-data';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '프로젝트',
  description: '하경한의 주요 프로젝트들을 소개합니다. 현재 운영 중인 프로덕션 서비스부터 혁신적인 ML 시스템까지 다양한 프로젝트를 확인하세요.',
};

export default function ProjectsPage() {
  const productionProjects = projects.filter(p => p.status === 'production');
  const completedProjects = projects.filter(p => p.status === 'completed');
  const inProgressProjects = projects.filter(p => p.status === 'in-progress');

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-20 gradient-bg">
        <div className="container-width section-padding">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">
              <span className="gradient-text">프로젝트</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              풀스택 개발부터 머신러닝까지, 다양한 기술을 활용한 프로젝트들을 소개합니다.
              <br />
              현재까지 <strong className="text-blue-600 dark:text-blue-400">5개의 프로젝트</strong>를 완료했으며
              <strong className="text-green-600 dark:text-green-400">15+개 기술</strong>을 활용한 경험을 보유하고 있습니다.
            </p>

            <div className="flex justify-center">
              <Button variant="outline" href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                홈으로 돌아가기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCard
              number={projects.length.toString()}
              label="총 프로젝트"
              description="완료된 모든 프로젝트"
            />
            <StatCard
              number={inProgressProjects.length.toString()}
              label="진행 중인 프로젝트"
              description="현재 개발 진행 중"
            />
            <StatCard
              number="15+"
              label="사용 기술"
              description="다양한 기술 스택"
            />
            <StatCard
              number="90%+"
              label="ML 정확도"
              description="머신러닝 모델 성능"
            />
          </div>
        </div>
      </section>

      {/* Production Projects */}
      {productionProjects.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container-width section-padding">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">
                <span className="gradient-text">🚀 운영 중인 서비스</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                현재 실제 사용자들이 이용하고 있는 프로덕션 서비스들입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productionProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Completed Projects */}
      {completedProjects.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-width section-padding">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">
                <span className="gradient-text">✅ 완료된 프로젝트</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                성공적으로 완료된 프로젝트들로, 각각 고유한 기술적 도전과 성과를 담고 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* In Progress Projects */}
      {inProgressProjects.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container-width section-padding">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">
                <span className="gradient-text">🔄 진행 중인 프로젝트</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                현재 개발 중인 프로젝트들로, 지속적으로 발전하고 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inProgressProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-width section-padding text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="gradient-text">더 자세한 정보가 필요하신가요?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              각 프로젝트의 상세한 기술 문서나 소스코드는 요청 시 제공 가능합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" href="/contact">
                연락하기
              </Button>
              <Button size="lg" variant="outline" href="https://github.com/khanz0613">
                GitHub 방문
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Components
function StatCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center space-y-2 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div className="text-3xl font-bold gradient-text">
        {number}
      </div>
      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
        {label}
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400">
        {description}
      </div>
    </div>
  );
}