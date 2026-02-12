import Link from 'next/link';
import { ArrowRight, Check, Star, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import HomeSnapMode from '@/components/home/HomeSnapMode';
import ChapterRail from '@/components/home/ChapterRail';
import {
  awards,
  certifications,
  experienceItems,
  featuredProjectIds,
  highlights,
  profile,
  projects,
  skillGroups,
} from '@/lib/portfolio-data';

export default function Home() {
  const featuredProjects = projects.filter((project) => featuredProjectIds.includes(project.id));
  const chapters = [
    { id: 'hero', label: '인트로' },
    { id: 'featured-projects', label: '프로젝트' },
    { id: 'skills', label: '기술' },
    { id: 'experience', label: '경험' },
    { id: 'cta', label: '문의' },
  ];

  return (
    <div className="home-snap-shell min-h-screen bg-slate-50 pt-16 text-slate-900">
      <HomeSnapMode />
      <ChapterRail chapters={chapters} />

      <section id="hero" className="home-chapter home-chapter-hero gradient-bg relative overflow-hidden border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0">
          <div className="float-slow absolute -left-14 top-16 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="float-delay absolute right-10 top-10 h-60 w-60 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="float-slow absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" />
        </div>

        <div className="container-width section-padding section-shell relative">
          <div className="max-w-3xl space-y-7 fade-up">
            <span className="section-label">Backend x ML Engineering</span>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              <span className="block">{profile.name}</span>
              <span className="mt-2 block text-xl font-semibold tracking-normal text-slate-500 md:text-2xl">
                {profile.englishName}
              </span>
            </h1>
            <p className="text-xl font-bold tracking-tight text-slate-800 md:text-2xl">{profile.headline}</p>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">{profile.introduction}</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/projects" size="lg" className="group">
                프로젝트 전체 보기
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                협업 문의하기
              </Button>
              <Button href="/resume.pdf" variant="ghost" size="lg">
                Resume
              </Button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="glass-panel fade-up rounded-2xl p-5"
                style={{ animationDelay: `${120 + index * 90}ms` }}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.label}</p>
                <p className="mt-2 text-2xl font-black tracking-tight text-slate-900">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-projects" className="home-chapter section-shell">
        <div className="container-width section-padding">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span className="section-label">Featured Projects</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">대표 프로젝트</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                실제 서비스/공모전 맥락에서 성능과 안정성을 증명한 프로젝트만 추려 소개합니다.
              </p>
            </div>
            <Button href="/projects" variant="outline" className="hidden md:inline-flex">
              전체 프로젝트
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
                    {project.projectType}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {project.period}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-extrabold tracking-tight text-slate-900">{project.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{project.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.summary}</p>
                <ul className="mt-4 space-y-2">
                  {project.highlights.slice(0, 3).map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-6 inline-flex items-center text-sm font-bold text-blue-600 transition-colors group-hover:text-blue-700"
                >
                  자세히 보기
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="home-chapter section-shell border-y border-slate-200 bg-white">
        <div className="container-width section-padding">
          <div className="mb-10">
            <span className="section-label">Tech Landscape</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">기술 스택</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              백엔드 신뢰성과 데이터 처리 정확도를 중심으로, 서비스 운영에 필요한 프론트와 인프라까지 연결합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-black tracking-tight text-slate-900">{group.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={`${group.title}-${skill.name}`}
                      className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700"
                    >
                      {skill.name}
                      <span className="ml-1 text-slate-500">· {skill.level}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="home-chapter section-shell">
        <div className="container-width section-padding grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
            <div className="mb-5 flex items-center gap-2">
              <Star size={17} className="text-amber-500" />
              <h2 className="text-xl font-black tracking-tight text-slate-900">경험</h2>
            </div>
            <div className="space-y-5">
              {experienceItems.map((item) => (
                <div key={item.title} className="rounded-xl bg-slate-50 p-4">
                  <p className="text-sm font-bold text-slate-500">{item.period}</p>
                  <h3 className="mt-1 text-base font-extrabold tracking-tight text-slate-900">{item.title}</h3>
                  <p className="text-sm font-semibold text-blue-600">{item.organization}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="mb-5 flex items-center gap-2">
              <Trophy size={17} className="text-emerald-600" />
              <h2 className="text-xl font-black tracking-tight text-slate-900">수상 · 자격</h2>
            </div>
            <div className="space-y-4">
              {awards.map((award) => (
                <div key={award.title} className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">{award.period}</p>
                  <p className="mt-1 text-sm font-extrabold text-slate-900">{award.title}</p>
                  <p className="text-xs font-semibold text-emerald-700">{award.organization}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{award.description}</p>
                </div>
              ))}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-900">자격증 / 공인 시험</p>
                <ul className="mt-2 space-y-2">
                  {certifications.map((certification) => (
                    <li key={certification.title} className="text-sm text-slate-600">
                      {certification.title}
                      <span className="ml-1 text-xs text-slate-500">({certification.type})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="cta" className="home-chapter home-chapter-cta section-shell border-t border-slate-200 bg-white">
        <div className="container-width section-padding text-center">
          <span className="section-label">Let&apos;s Build</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">말뿐인 소개가 아니라, 결과로 증명하겠습니다.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            백엔드 안정성 개선, 데이터 기반 의사결정, ML 기능 도입이 필요한 프로젝트라면 바로 대화 시작해도 됩니다.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg">
              협업 문의
            </Button>
            <Button href={profile.github} variant="outline" size="lg">
              GitHub 보기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
