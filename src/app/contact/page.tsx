import type { Metadata } from 'next';
import { Clock3, Github, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { profile } from '@/lib/portfolio-data';

export const metadata: Metadata = {
  title: '연락처',
  description: '협업 제안, 기술 문의, 프로젝트 대화를 위한 하경한의 연락처입니다.',
};

export default function ContactPage() {
  const templateSubject = encodeURIComponent('[협업 문의] 프로젝트명 또는 팀명');
  const templateBody = encodeURIComponent(
    `안녕하세요 ${profile.name}님,\n\n` +
      `1) 프로젝트/회사 소개:\n` +
      `2) 요청 내용:\n` +
      `3) 원하는 일정:\n` +
      `4) 참고 링크:\n\n` +
      `감사합니다.`
  );
  const templateMailto = `mailto:${profile.email}?subject=${templateSubject}&body=${templateBody}`;

  return (
    <div className="min-h-screen bg-slate-50 pt-16">
      <section className="gradient-bg border-b border-slate-200">
        <div className="container-width section-padding section-shell">
          <span className="section-label">Contact</span>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">연락하기</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            프로젝트 협업, 백엔드/데이터 구조 개선, ML 기능 도입 관련 제안을 환영합니다.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={templateMailto}>문의 템플릿으로 메일 보내기</Button>
            <Button href={profile.github} variant="outline">
              GitHub 프로필
            </Button>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-width section-padding grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ContactCard
            icon={<Mail className="h-5 w-5 text-blue-600" />}
            label="이메일"
            value={profile.email}
            description="가장 빠르고 정확한 소통 채널"
            href={`mailto:${profile.email}`}
          />
          <ContactCard
            icon={<Phone className="h-5 w-5 text-emerald-600" />}
            label="전화"
            value={profile.phone}
            description="평일 업무시간 기준 응대"
            href={`tel:${profile.phone}`}
          />
          <ContactCard
            icon={<Github className="h-5 w-5 text-slate-700" />}
            label="GitHub"
            value="@khanz0613"
            description="코드/프로젝트 히스토리 확인"
            href={profile.github}
          />
        </div>
      </section>

      <section className="section-shell border-y border-slate-200 bg-white">
        <div className="container-width section-padding grid grid-cols-1 gap-6 md:grid-cols-2">
          <InfoCard
            icon={<Clock3 className="h-5 w-5 text-blue-600" />}
            title="응답 기준"
            items={['이메일: 일반적으로 24시간 내 회신', '전화: 평일 09:00 ~ 18:00', 'GitHub 문의: 이슈 성격에 따라 순차 응답']}
          />
          <InfoCard
            icon={<MapPin className="h-5 w-5 text-blue-600" />}
            title="협업 형태"
            items={['위치: 서울, 대한민국', '원격 협업: 상시 가능', '오프라인 미팅: 서울/경기 조율 가능']}
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="container-width section-padding text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">필요한 문제를 먼저 정리해주시면 바로 맞춰보겠습니다.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            현재 겪는 병목 구간이나 목표 지표를 같이 보내주시면, 첫 답변부터 기술적으로 바로 논의할 수 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  description,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  href: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">{label}</h2>
      </div>
      <p className="mt-3 text-lg font-extrabold tracking-tight text-slate-900">{value}</p>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <div className="mt-5">
        <Button href={href} variant="outline" className="w-full">
          바로 열기
        </Button>
      </div>
    </article>
  );
}

function InfoCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-lg font-black tracking-tight text-slate-900">{title}</h2>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-slate-700">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
