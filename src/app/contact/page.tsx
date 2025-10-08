'use client';

import { Button } from '@/components/ui/Button';
import { ArrowLeft, Mail, Phone, Github, MapPin, Clock, Send } from 'lucide-react';

// Metadata is handled in layout.tsx since this is a client component

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="py-20 gradient-bg">
        <div className="container-width section-padding">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold">
              <span className="gradient-text">연락하기</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              프로젝트 문의, 기술 상담, 협업 제안 등
              <br />
              언제든 편하게 연락주세요.
            </p>

            <div className="flex justify-center">
              <Button variant="outline" href="/">
                <ArrowLeft className="mr-2 h-4 w-4 stroke-current" />
                홈으로 돌아가기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">연락 정보</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              다음 방법들로 연락하실 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ContactCard
              icon={<Mail className="h-8 w-8 stroke-current" />}
              title="이메일"
              content="gkrudgks0613@gmail.com"
              description="가장 선호하는 연락 방법"
              action={{
                text: "이메일 보내기",
                href: "mailto:gkrudgks0613@gmail.com"
              }}
            />
            <ContactCard
              icon={<Phone className="h-8 w-8 stroke-current" />}
              title="전화"
              content="010-2431-0733"
              description="업무시간 내 통화 가능"
              action={{
                text: "전화하기",
                href: "tel:010-2431-0733"
              }}
            />
            <ContactCard
              icon={<Github className="h-8 w-8 stroke-current" />}
              title="GitHub"
              content="@khanz0613"
              description="코드 리뷰 및 기술 토론"
              action={{
                text: "GitHub 방문",
                href: "https://github.com/khanz0613"
              }}
            />
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-width section-padding">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">
                <span className="gradient-text">빠른 문의</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                아래 폼을 통해 간단히 문의사항을 남겨주세요.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border-2 border-gray-300 dark:border-gray-700 p-8">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const subject = formData.get('subject');
                  const message = formData.get('message');

                  // Create mailto URL with form data
                  const mailtoURL = `mailto:gkrudgks0613@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(
                    `보내는 사람: ${name}\n이메일: ${email}\n\n${message}`
                  )}`;

                  window.location.href = mailtoURL;
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="hong@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    제목 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                    placeholder="프로젝트 협업 문의"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    메시지 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100 resize-vertical"
                    placeholder="안녕하세요, 프로젝트 협업에 대해 문의드리고 싶습니다..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-center">
                  <Button
                    size="lg"
                    type="submit"
                    className="group"
                  >
                    <Send className="mr-2 h-5 w-5 stroke-current" />
                    메시지 보내기
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                * 폼 내용이 자동으로 이메일 본문에 포함됩니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-width section-padding">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">추가 정보</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <InfoCard
              icon={<Clock className="h-8 w-8 stroke-current" />}
              title="응답 시간"
              items={[
                "이메일: 24시간 이내",
                "전화: 업무시간(09:00-18:00) 내",
                "GitHub: 코드 관련 문의 48시간 이내"
              ]}
            />
            <InfoCard
              icon={<MapPin className="h-8 w-8 stroke-current" />}
              title="위치 & 가능한 협업"
              items={[
                "위치: 대한민국, 서울",
                "원격 협업: 언제든 가능",
                "대면 미팅: 서울/경기 지역",
                "시간대: UTC+9 (KST)"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-width section-padding">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">제공 가능한 서비스</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              다음과 같은 프로젝트에 참여하거나 상담을 제공할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="풀스택 웹 개발"
              description="React/Vue.js + Spring Boot를 활용한 완전한 웹 애플리케이션 개발"
            />
            <ServiceCard
              title="ML/AI 시스템 구축"
              description="TensorFlow, PyTorch를 활용한 머신러닝 모델 개발 및 배포"
            />
            <ServiceCard
              title="DevOps & 클라우드"
              description="AWS 인프라 구축 및 CI/CD 파이프라인 자동화"
            />
            <ServiceCard
              title="기술 컨설팅"
              description="프로젝트 아키텍처 설계 및 기술 스택 선택 상담"
            />
            <ServiceCard
              title="코드 리뷰"
              description="기존 프로젝트의 코드 품질 개선 및 성능 최적화"
            />
            <ServiceCard
              title="멘토링"
              description="개발자 성장을 위한 기술적 멘토링 및 커리어 상담"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-width section-padding text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="gradient-text">함께 만들어가요!</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              혁신적인 아이디어가 있으시거나 기술적 도움이 필요하시다면
              <br />
              언제든 편하게 연락주세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" href="mailto:gkrudgks0613@gmail.com">
                <Mail className="mr-2 h-5 w-5 stroke-current" />
                바로 이메일 보내기
              </Button>
              <Button size="lg" variant="outline" href="/projects">
                프로젝트 먼저 보기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Components
function ContactCard({ icon, title, content, description, action }: {
  icon: React.ReactNode;
  title: string;
  content: string;
  description: string;
  action: { text: string; href: string };
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md border-2 border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow text-center">
      <div className="space-y-4">
        <div className="text-blue-600 dark:text-blue-400 flex justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-xl font-mono text-gray-700 dark:text-gray-300 mt-2">
            {content}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {description}
          </p>
        </div>
        <div>
          <Button
            href={action.href}
            className="w-full"
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {action.text}
          </Button>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, items }: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-blue-600 dark:text-blue-400">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
        </div>
        <div className="space-y-2">
          {items.map((item, index) => (
            <div key={index} className="text-sm text-gray-600 dark:text-gray-300">
              • {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, description }: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md border-2 border-gray-300 dark:border-gray-700">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
}