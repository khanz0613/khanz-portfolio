import Hero from '@/components/sections/Hero';
import ProjectCard from '@/components/project/ProjectCard';
import { projects } from '@/lib/projects-data';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Code, Database, Cpu, Globe } from 'lucide-react';

export default function Home() {
  const featuredProjects = projects.slice(0, 3); // Show top 3 projects

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">
              <span className="gradient-text">주요 프로젝트</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              현재 운영 중인 프로덕션 서비스부터 혁신적인 ML 시스템까지,
              <br />
              실무에서 검증된 프로젝트들을 소개합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" href="/projects" className="group">
              모든 프로젝트 보기
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform stroke-current" />
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-20 gradient-bg">
        <div className="container-width section-padding">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold">
              <span className="gradient-text">기술 스택</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              풀스택 개발부터 머신러닝까지, 다양한 기술을 활용하여
              <br />
              완성도 높은 서비스를 구축합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TechCategory
              icon={<Code className="h-8 w-8 stroke-current" />}
              title="백엔드"
              technologies={["Java 17", "Spring Boot 3.5", "Python 3.11+", "Node.js"]}
            />
            <TechCategory
              icon={<Globe className="h-8 w-8 stroke-current" />}
              title="프론트엔드"
              technologies={["React 18.3", "Vue.js 3", "TypeScript", "Tailwind CSS"]}
            />
            <TechCategory
              icon={<Cpu className="h-8 w-8 stroke-current" />}
              title="머신러닝/AI"
              technologies={["TensorFlow", "PyTorch", "Scikit-learn", "MediaPipe"]}
            />
            <TechCategory
              icon={<Database className="h-8 w-8 stroke-current" />}
              title="데브옵스"
              technologies={["AWS", "Docker", "GitHub Actions", "Nginx"]}
            />
          </div>

          <div className="text-center mt-12">
            <Button size="lg" href="/skills" variant="outline" className="group">
              상세 기술스택 보기
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform stroke-current" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="2" label="운영 중인 서비스" />
            <StatCard number="100K+" label="서비스 사용자" />
            <StatCard number="99.9%" label="시스템 업타임" />
            <StatCard number="6" label="완료된 프로젝트" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-width section-padding text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="gradient-text">함께 일해요!</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              혁신적인 프로젝트에 함께 참여하거나 기술적 조언이 필요하시다면
              <br />
              언제든 연락주세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" href="/contact" className="group">
                연락하기
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform stroke-current" />
              </Button>
              <Button size="lg" variant="outline" href="mailto:gkrudgks0613@gmail.com">
                이메일 보내기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Tech Category Component - 영어 title 제거, titleKo를 title로 통합
function TechCategory({ icon, title, technologies }: {
  icon: React.ReactNode;
  title: string;
  technologies: string[];
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center space-y-4 shadow-md border-2 border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <div className="text-blue-600 dark:text-blue-400 flex justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </div>
      <div className="space-y-2">
        {technologies.map((tech) => (
          <div key={tech} className="text-sm text-gray-600 dark:text-gray-300">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

// Stat Card Component - 영어 subLabel 제거
function StatCard({ number, label }: {
  number: string;
  label: string;
}) {
  return (
    <div className="text-center space-y-2">
      <div className="text-3xl md:text-4xl font-bold gradient-text">
        {number}
      </div>
      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
        {label}
      </div>
    </div>
  );
}