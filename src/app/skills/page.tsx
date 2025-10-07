import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Code, Database, Cpu, Globe, Server, Cloud, Wrench, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: '기술 스택',
  description: '하경한이 보유한 풀스택 개발, 머신러닝, DevOps 기술 스택을 자세히 소개합니다. Java, Spring Boot, React, Python, AWS 등 다양한 기술을 활용합니다.',
};

export default function SkillsPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-20 gradient-bg">
        <div className="container-width section-padding">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">
              <span className="gradient-text">기술 스택</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              풀스택 개발부터 머신러닝까지, 다양한 기술을 활용하여
              <br />
              완성도 높은 서비스를 구축합니다.
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

      {/* Backend Skills */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="text-center space-y-4 mb-12">
            <div className="text-blue-600 dark:text-blue-400 flex justify-center">
              <Server className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">백엔드 개발</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              확장 가능하고 안정적인 서버 시스템을 구축합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="Java & Spring"
              level="전문가"
              experience="3년+"
              description="Spring Boot 3.5, Spring Security, JPA를 활용한 엔터프라이즈급 애플리케이션 개발"
              technologies={["Java 17", "Spring Boot 3.5", "Spring Security", "Spring Data JPA"]}
            />
            <SkillCard
              title="Python"
              level="숙련자"
              experience="3년+"
              description="FastAPI, Django를 활용한 웹 서비스 및 머신러닝 API 개발"
              technologies={["Python 3.11+", "FastAPI", "Django", "Pandas", "NumPy"]}
            />
            <SkillCard
              title="Node.js"
              level="중급자"
              experience="2년+"
              description="Express.js를 활용한 RESTful API 및 실시간 서비스 개발"
              technologies={["Node.js", "Express.js", "Socket.io", "TypeScript"]}
            />
          </div>
        </div>
      </section>

      {/* Frontend Skills */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-width section-padding">
          <div className="text-center space-y-4 mb-12">
            <div className="text-blue-600 dark:text-blue-400 flex justify-center">
              <Globe className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">프론트엔드 개발</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              사용자 친화적이고 반응형 웹 인터페이스를 구현합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="React"
              level="전문가"
              experience="4년+"
              description="React 18.3, Hooks, Context API를 활용한 SPA 개발 및 상태 관리"
              technologies={["React 18.3", "TypeScript", "Redux", "React Query"]}
            />
            <SkillCard
              title="Vue.js"
              level="숙련자"
              experience="2년+"
              description="Vue 3, Composition API를 활용한 반응형 웹 애플리케이션 개발"
              technologies={["Vue.js 3", "Vuex", "Vue Router", "Nuxt.js"]}
            />
            <SkillCard
              title="스타일링 & UI"
              level="숙련자"
              experience="4년+"
              description="Tailwind CSS, Styled Components를 활용한 모던 UI/UX 구현"
              technologies={["Tailwind CSS", "Styled Components", "SCSS", "Figma"]}
            />
          </div>
        </div>
      </section>

      {/* AI/ML Skills */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="text-center space-y-4 mb-12">
            <div className="text-blue-600 dark:text-blue-400 flex justify-center">
              <Cpu className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">머신러닝 & AI</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              데이터 기반의 지능형 시스템을 구축합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="딥러닝"
              level="숙련자"
              experience="2년+"
              description="TensorFlow, PyTorch를 활용한 컴퓨터 비전 및 자연어 처리 모델 개발"
              technologies={["TensorFlow", "PyTorch", "Keras", "BERT"]}
            />
            <SkillCard
              title="머신러닝"
              level="숙련자"
              experience="3년+"
              description="Scikit-learn을 활용한 예측 모델 및 데이터 분석 시스템 개발"
              technologies={["Scikit-learn", "XGBoost", "Random Forest", "SVM"]}
            />
            <SkillCard
              title="컴퓨터 비전"
              level="중급자"
              experience="2년+"
              description="OpenCV, MediaPipe를 활용한 실시간 이미지 처리 시스템 개발"
              technologies={["OpenCV", "MediaPipe", "YOLO", "CNN"]}
            />
          </div>
        </div>
      </section>

      {/* Database & DevOps Skills */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-width section-padding">
          <div className="text-center space-y-4 mb-12">
            <div className="text-blue-600 dark:text-blue-400 flex justify-center">
              <Database className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">데이터베이스 & DevOps</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              안정적인 데이터 관리와 자동화된 배포 환경을 구축합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCard
              title="데이터베이스"
              level="숙련자"
              experience="3년+"
              description="관계형 및 NoSQL 데이터베이스를 활용한 효율적인 데이터 설계 및 관리"
              technologies={["PostgreSQL", "MongoDB", "Redis", "DynamoDB"]}
            />
            <SkillCard
              title="클라우드 & DevOps"
              level="중급자"
              experience="2년+"
              description="AWS 클라우드 서비스와 CI/CD 파이프라인을 통한 자동화된 배포"
              technologies={["AWS", "Docker", "GitHub Actions", "Nginx"]}
            />
          </div>
        </div>
      </section>

      {/* Tools & Others */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="text-center space-y-4 mb-12">
            <div className="text-blue-600 dark:text-blue-400 flex justify-center">
              <Wrench className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">개발 도구 & 기타</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              효율적인 개발을 위한 다양한 도구와 방법론을 활용합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ToolCategory
              icon={<Code className="h-8 w-8" />}
              title="개발 도구"
              tools={["VS Code", "IntelliJ IDEA", "Git", "Postman"]}
            />
            <ToolCategory
              icon={<BookOpen className="h-8 w-8" />}
              title="방법론"
              tools={["Agile", "TDD", "Clean Code", "Design Patterns"]}
            />
            <ToolCategory
              icon={<Cloud className="h-8 w-8" />}
              title="협업 도구"
              tools={["Slack", "Notion", "Figma", "Jira"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-width section-padding text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="gradient-text">함께 프로젝트를 진행해보세요!</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              다양한 기술 스택을 활용하여 여러분의 아이디어를 현실로 만들어드립니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" href="/contact">
                프로젝트 문의하기
              </Button>
              <Button size="lg" variant="outline" href="/projects">
                포트폴리오 보기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Components
function SkillCard({ title, level, experience, description, technologies }: {
  title: string;
  level: string;
  experience: string;
  description: string;
  technologies: string[];
}) {
  const levelColor = {
    '전문가': 'text-green-600 dark:text-green-400',
    '숙련자': 'text-blue-600 dark:text-blue-400',
    '중급자': 'text-orange-600 dark:text-orange-400'
  }[level] || 'text-gray-600 dark:text-gray-400';

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <span className={`text-sm font-medium ${levelColor}`}>
            {level}
          </span>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          경험: {experience}
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">
            주요 기술:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolCategory({ icon, title, tools }: {
  icon: React.ReactNode;
  title: string;
  tools: string[];
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center space-y-4">
      <div className="text-blue-600 dark:text-blue-400 flex justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </div>
      <div className="space-y-2">
        {tools.map((tool) => (
          <div key={tool} className="text-sm text-gray-600 dark:text-gray-300">
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}