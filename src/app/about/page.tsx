import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, User, GraduationCap, Briefcase, Heart, Target, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: '소개',
  description: '하경한의 개인적인 이야기와 개발자로서의 여정을 소개합니다. 풀스택 개발부터 머신러닝까지, 기술에 대한 열정과 경험을 공유합니다.',
};

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-20 gradient-bg">
        <div className="container-width section-padding">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">
              <span className="gradient-text">소개</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              안녕하세요, 풀스택 개발자 하경한입니다.
              <br />
              기술로 세상을 더 나은 곳으로 만들고자 합니다.
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

      {/* Personal Introduction */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <div className="text-blue-600 dark:text-blue-400 flex justify-center">
                <User className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-bold">
                <span className="gradient-text">개인 소개</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  <p className="mb-4">
                    안녕하세요! 저는 <strong className="text-blue-600 dark:text-blue-400">하경한</strong>입니다.
                    현재 <strong>2개의 프로덕션 서비스</strong>를 운영하며
                    <strong className="text-green-600 dark:text-green-400"> 10만+ 사용자</strong>에게
                    서비스를 제공하고 있는 풀스택 개발자이자 ML 엔지니어입니다.
                  </p>
                  <p className="mb-4">
                    대학에서 컴퓨터공학을 전공하며 프로그래밍에 첫 발을 내딛었고,
                    웹 개발부터 시작하여 점차 머신러닝과 AI 분야로 관심을 확장해왔습니다.
                  </p>
                  <p>
                    특히 <strong>사용자 중심의 서비스</strong>를 만드는 것에 큰 관심이 있으며,
                    기술이 실제로 사람들의 삶에 도움이 되는 것을 보는 것에서 큰 보람을 느낍니다.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    🎯 현재 상황
                  </h3>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>FanZip 팬 커뮤니티 플랫폼 운영 중</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Smart Finance AI 시스템 운영 중</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>DevOps 자동화 파이프라인 구축 중</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>새로운 프로젝트 아이디어 탐색 중</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-width section-padding">
          <div className="text-center space-y-4 mb-12">
            <div className="text-blue-600 dark:text-blue-400 flex justify-center">
              <GraduationCap className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">개발자로서의 여정</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              어떻게 현재의 모습까지 오게 되었는지 소개합니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <JourneyItem
                year="2021"
                title="프로그래밍 시작"
                description="컴퓨터공학과에 입학하며 Java로 첫 프로그래밍을 배웠습니다. 처음 'Hello, World!'를 출력했을 때의 감동을 아직도 기억합니다."
                highlight="첫 코드, 큰 감동"
              />
              <JourneyItem
                year="2022"
                title="웹 개발 입문"
                description="Spring Boot와 React를 배우며 본격적인 웹 개발에 입문했습니다. 첫 웹 애플리케이션을 만들어 친구들에게 보여준 것이 큰 자신감이 되었습니다."
                highlight="풀스택 개발자로의 첫걸음"
              />
              <JourneyItem
                year="2023"
                title="첫 서비스 런칭"
                description="모바일 출석 관리 앱을 개발하여 Google Play Store에 정식 출시했습니다. 사용자들의 실제 피드백을 받으며 서비스 개발의 보람을 느꼈습니다."
                highlight="10K+ 다운로드 달성"
              />
              <JourneyItem
                year="2024"
                title="ML/AI 도전"
                description="머신러닝과 AI에 관심을 갖기 시작하여 TensorFlow와 PyTorch를 학습했습니다. 수화 번역 시스템과 감정 분석 플랫폼을 개발하며 AI 역량을 쌓았습니다."
                highlight="AI 기술로 사회 문제 해결"
              />
              <JourneyItem
                year="2025"
                title="현재 & 미래"
                description="현재 2개의 프로덕션 서비스를 운영하며 10만+ 사용자에게 서비스를 제공하고 있습니다. 앞으로도 기술로 더 많은 사람들에게 도움이 되는 서비스를 만들고 싶습니다."
                highlight="더 나은 세상을 위한 기술"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="text-center space-y-4 mb-12">
            <div className="text-blue-600 dark:text-blue-400 flex justify-center">
              <Heart className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">가치관 & 개발 철학</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Target className="h-8 w-8" />}
              title="사용자 중심"
              description="기술은 사용자의 실제 문제를 해결할 때 가치가 있다고 생각합니다. 항상 사용자의 관점에서 생각하며 개발합니다."
            />
            <ValueCard
              icon={<Lightbulb className="h-8 w-8" />}
              title="지속적 학습"
              description="기술은 빠르게 변화합니다. 새로운 기술을 배우는 것을 두려워하지 않고, 항상 더 나은 방법을 찾기 위해 노력합니다."
            />
            <ValueCard
              icon={<Briefcase className="h-8 w-8" />}
              title="품질과 신뢰성"
              description="코드의 품질과 서비스의 안정성을 중요하게 생각합니다. 99.9% 업타임을 유지하며 사용자의 신뢰를 얻고자 합니다."
            />
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-width section-padding">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">재미있는 사실들</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              개발 외에도 이런 것들을 좋아합니다!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FunFactCard
              emoji="☕"
              fact="하루에 커피 3-4잔 필수"
              description="코딩할 때는 커피가 최고의 친구"
            />
            <FunFactCard
              emoji="🎮"
              fact="게임 개발에도 관심"
              description="언젠가는 나만의 게임을 만들어보고 싶음"
            />
            <FunFactCard
              emoji="📚"
              fact="기술 블로그 애독자"
              description="새로운 기술 트렌드 학습을 위해 매일 읽음"
            />
            <FunFactCard
              emoji="🏃‍♂️"
              fact="러닝으로 스트레스 해소"
              description="개발로 지친 머리를 맑게 해주는 시간"
            />
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">앞으로의 목표</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <GoalCard
              title="단기 목표 (2025)"
              goals={[
                "현재 서비스들의 기능 확장 및 사용자 경험 개선",
                "새로운 AI 프로젝트 시작 (컴퓨터 비전 분야)",
                "오픈소스 프로젝트 기여 증대",
                "기술 블로그 시작하여 지식 공유"
              ]}
            />
            <GoalCard
              title="장기 목표 (2026~)"
              goals={[
                "AI 기술을 활용한 사회적 임팩트 창출",
                "스타트업 창업 또는 테크 기업 합류",
                "개발자 커뮤니티 활동 및 멘토링",
                "글로벌 서비스 개발 및 운영"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-width section-padding text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="gradient-text">함께 성장해요!</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              비슷한 관심사를 가지고 계시거나 함께 프로젝트를 진행하고 싶으시다면
              <br />
              언제든 연락주세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" href="/contact">
                연락하기
              </Button>
              <Button size="lg" variant="outline" href="/projects">
                프로젝트 둘러보기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Components
function JourneyItem({ year, title, description, highlight }: {
  year: string;
  title: string;
  description: string;
  highlight: string;
}) {
  return (
    <div className="flex items-start space-x-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">{year}</span>
        </div>
      </div>
      <div className="flex-grow">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            {description}
          </p>
          <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
            {highlight}
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center space-y-4">
      <div className="text-blue-600 dark:text-blue-400 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function FunFactCard({ emoji, fact, description }: {
  emoji: string;
  fact: string;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center space-y-3 shadow-sm border border-gray-200 dark:border-gray-800">
      <div className="text-4xl">{emoji}</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {fact}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

function GoalCard({ title, goals }: {
  title: string;
  goals: string[];
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h3>
      <div className="space-y-3">
        {goals.map((goal, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              {goal}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}