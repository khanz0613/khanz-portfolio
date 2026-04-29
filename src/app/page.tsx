import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  Cpu,
  Database,
  Github,
  Gauge,
  LockKeyhole,
  Network,
  ServerCog,
  ShieldCheck,
  Star,
  TerminalSquare,
  Trophy,
  Workflow,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import ChapterRail from '@/components/home/ChapterRail';
import ScrollProgressBar from '@/components/home/ScrollProgressBar';
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

const systemSignals = [
  {
    label: 'Concurrency',
    value: 'Redis Lock',
    detail: '선착순 구매 충돌 제어',
    icon: LockKeyhole,
  },
  {
    label: 'ML Accuracy',
    value: '87.81%',
    detail: 'BEAM 위험도 예측',
    icon: Cpu,
  },
  {
    label: 'Data Scale',
    value: '50,000+',
    detail: '서울시 상권 데이터 처리',
    icon: Database,
  },
  {
    label: 'Delivery',
    value: 'CI/CD',
    detail: '배포 시간 40% 단축',
    icon: Workflow,
  },
];

const projectThemes = [
  {
    eyebrow: 'Risk Intelligence',
    metric: '87.81%',
    metricLabel: 'prediction accuracy',
    accent: 'text-sky-300',
    border: 'border-sky-300/40',
    bg: 'bg-sky-300/10',
  },
  {
    eyebrow: 'Commerce Reliability',
    metric: '42',
    metricLabel: 'domain tables',
    accent: 'text-emerald-300',
    border: 'border-emerald-300/40',
    bg: 'bg-emerald-300/10',
  },
  {
    eyebrow: 'Travel API Platform',
    metric: '35+',
    metricLabel: 'REST APIs',
    accent: 'text-amber-300',
    border: 'border-amber-300/40',
    bg: 'bg-amber-300/10',
  },
];

const skillThemes = [
  {
    icon: ServerCog,
    accent: 'text-sky-700',
    bar: 'from-sky-500 to-cyan-400',
  },
  {
    icon: Activity,
    accent: 'text-rose-700',
    bar: 'from-rose-500 to-orange-400',
  },
  {
    icon: BarChart3,
    accent: 'text-emerald-700',
    bar: 'from-emerald-500 to-lime-400',
  },
  {
    icon: ShieldCheck,
    accent: 'text-violet-700',
    bar: 'from-violet-500 to-indigo-400',
  },
];

const levelWidth = {
  전문가: 'w-[96%]',
  고급: 'w-[78%]',
  중급: 'w-[58%]',
  초급: 'w-[36%]',
};

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
    <div className="min-h-screen bg-[#f4f0e7] pt-16 text-zinc-950">
      <ChapterRail chapters={chapters} />
      <ScrollProgressBar />

      <section id="hero" className="home-chapter relative isolate overflow-hidden bg-[#07110f] text-white">
        <div className="circuit-grid absolute inset-0 opacity-60" />
        <div className="scanline-overlay absolute inset-0 opacity-35" />
        <div className="container-width section-padding relative z-10 grid min-h-[calc(100svh-4rem)] grid-cols-1 items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
          <div className="max-w-3xl space-y-7 fade-up">
            <span className="section-label section-label-dark">
              Backend x ML Systems
            </span>
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase text-emerald-200/80">{profile.englishName}</p>
              <h1 className="text-4xl font-black leading-[1.02] md:text-6xl lg:text-7xl">
                {profile.name}
                <span className="mt-3 block text-balance text-3xl text-[#f6d365] md:text-5xl lg:text-6xl">
                  운영 가능한 시스템을 설계합니다.
                </span>
              </h1>
            </div>
            <p className="max-w-2xl text-lg font-semibold leading-relaxed text-zinc-200 md:text-xl">{profile.headline}</p>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">{profile.introduction}</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/projects" size="lg" className="group bg-[#f6d365] !text-zinc-950 shadow-[#f6d365]/20 hover:bg-[#ffd87c]">
                프로젝트 보기
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href={profile.github} variant="outline" size="lg" className="border-white/20 bg-white/[0.08] !text-white hover:border-white/40 hover:bg-white/[0.14]">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button href="/Resume.pdf" variant="ghost" size="lg" className="!text-zinc-200 hover:bg-white/10 hover:!text-white">
                Resume
              </Button>
            </div>
          </div>

          <div className="relative fade-up lg:pl-4" style={{ animationDelay: '120ms' }}>
            <div className="system-frame">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <TerminalSquare className="h-4 w-4 text-emerald-300" />
                  <span className="text-xs font-bold uppercase text-zinc-300">Portfolio Ops Console</span>
                </div>
                <span className="rounded bg-emerald-300/15 px-2 py-1 text-[11px] font-bold uppercase text-emerald-200">
                  available
                </span>
              </div>

              <div className="grid gap-px bg-white/10 md:grid-cols-2">
                {systemSignals.map((signal) => {
                  const Icon = signal.icon;

                  return (
                    <div key={signal.label} className="bg-[#0a1512]/95 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[11px] font-bold uppercase text-zinc-500">{signal.label}</p>
                        <Icon className="h-4 w-4 text-[#f6d365]" />
                      </div>
                      <p className="mt-4 text-2xl font-black text-white">{signal.value}</p>
                      <p className="mt-1 text-sm text-zinc-400">{signal.detail}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid gap-px bg-white/10 md:grid-cols-[0.9fr_1.1fr]">
                <div className="bg-[#0a1512]/95 p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-sky-300" />
                    <p className="text-xs font-bold uppercase text-zinc-400">Execution Pipeline</p>
                  </div>
                  {['Problem', 'Metric', 'Architecture', 'Delivery'].map((step, index) => (
                    <div key={step} className="flex items-center gap-3 py-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-white/[0.08] text-[11px] font-black text-zinc-300">
                        0{index + 1}
                      </span>
                      <div className="h-px flex-1 bg-white/10" />
                      <span className="text-xs font-bold uppercase text-zinc-300">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#0a1512]/95 p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <Network className="h-4 w-4 text-emerald-300" />
                    <p className="text-xs font-bold uppercase text-zinc-400">Current Stack Signal</p>
                  </div>
                  <div className="space-y-3">
                    {['Spring Boot / Java', 'Redis / MySQL', 'Python / Scikit-learn', 'AWS / Docker'].map((stack, index) => (
                      <div key={stack}>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="font-semibold text-zinc-300">{stack}</span>
                          <span className="text-zinc-500">{96 - index * 9}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded bg-white/10">
                          <div
                            className="h-full rounded bg-gradient-to-r from-emerald-300 via-sky-300 to-[#f6d365]"
                            style={{ width: `${96 - index * 9}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/[0.12] lg:col-span-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <div key={item.label} className="bg-[#091411]/[0.92] p-4 md:p-5" style={{ animationDelay: `${180 + index * 70}ms` }}>
                <p className="text-[11px] font-bold uppercase text-zinc-500">{item.label}</p>
                <p className="mt-2 text-2xl font-black text-white md:text-3xl">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-projects" className="home-chapter section-shell bg-[#f4f0e7]">
        <div className="container-width section-padding">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <span className="section-label">Featured Projects</span>
              <h2 className="mt-4 text-3xl font-black text-zinc-950 md:text-4xl">성과가 보이는 프로젝트</h2>
            </div>
            <div className="max-w-3xl lg:justify-self-end">
              <p className="text-base leading-relaxed text-zinc-700 md:text-lg">
                단순 구현 목록이 아니라 장애를 줄이고, 데이터를 설명 가능하게 만들고, 배포 가능한 구조로 묶은 사례를 전면에 배치했습니다.
              </p>
              <div className="mt-5 flex justify-start lg:justify-end">
                <Button href="/projects" variant="outline" className="group border-zinc-300 bg-transparent">
                  전체 프로젝트
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {featuredProjects.map((project, index) => {
              const theme = projectThemes[index] ?? projectThemes[0];

              return (
                <article
                  key={project.id}
                  className="group flex min-h-[430px] flex-col justify-between rounded-lg border border-zinc-950/10 bg-zinc-950 p-5 text-white shadow-[0_24px_70px_rgba(30,24,14,0.18)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`text-xs font-bold uppercase ${theme.accent}`}>{theme.eyebrow}</p>
                        <h3 className="mt-3 text-2xl font-black">{project.name}</h3>
                        <p className="mt-1 text-sm font-semibold text-zinc-400">{project.subtitle}</p>
                      </div>
                      <span className={`rounded border ${theme.border} ${theme.bg} px-2 py-1 text-xs font-bold text-zinc-100`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="mt-7 border-y border-white/10 py-5">
                      <p className={`text-5xl font-black ${theme.accent}`}>{theme.metric}</p>
                      <p className="mt-1 text-xs font-bold uppercase text-zinc-500">{theme.metricLabel}</p>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-zinc-300">{project.summary}</p>

                    <ul className="mt-5 space-y-3">
                      {project.highlights.slice(0, 3).map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-zinc-300">
                          <Check size={15} className={`mt-0.5 shrink-0 ${theme.accent}`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 5).map((skill) => (
                        <span key={`${project.id}-${skill.name}`} className="rounded border border-white/10 bg-white/[0.06] px-2 py-1 text-xs font-semibold text-zinc-300">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="mt-5 inline-flex items-center text-sm font-black text-white transition-colors group-hover:text-[#f6d365]"
                    >
                      상세 분석 보기
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="home-chapter section-shell border-y border-zinc-950/10 bg-white">
        <div className="container-width section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <span className="section-label">Tech Landscape</span>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">기술은 역할별로 증명합니다.</h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-700">
                백엔드 신뢰성, 데이터 정확도, ML 설명력, 운영 자동화를 한 흐름으로 연결해 프로젝트의 병목을 줄입니다.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-px bg-zinc-950/10">
                {['API 안정성', '데이터 품질', '모델 성능', '배포 자동화'].map((item) => (
                  <div key={item} className="bg-white p-4">
                    <BadgeCheck className="mb-3 h-4 w-4 text-emerald-600" />
                    <p className="text-sm font-black text-zinc-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {skillGroups.map((group, index) => {
                const theme = skillThemes[index] ?? skillThemes[0];
                const Icon = theme.icon;

                return (
                  <article key={group.title} className="rounded-lg border border-zinc-950/10 bg-[#f8f5ee] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-black text-zinc-950">{group.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-700">{group.description}</p>
                      </div>
                      <Icon className={`h-5 w-5 shrink-0 ${theme.accent}`} />
                    </div>
                    <div className="mt-5 space-y-4">
                      {group.skills.map((skill) => (
                        <div key={`${group.title}-${skill.name}`}>
                          <div className="mb-1 flex items-center justify-between gap-3 text-sm">
                            <span className="font-bold text-zinc-900">{skill.name}</span>
                            <span className="text-xs font-bold text-zinc-500">{skill.level}</span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded bg-zinc-950/10">
                            <div className={`h-full rounded bg-gradient-to-r ${theme.bar} ${levelWidth[skill.level]}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="home-chapter section-shell bg-[#111816] text-white">
        <div className="container-width section-padding grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-6 flex items-center gap-2">
              <Star size={18} className="text-[#f6d365]" />
              <h2 className="text-2xl font-black">경험 로그</h2>
            </div>
            <div className="space-y-4">
              {experienceItems.map((item) => (
                <div key={item.title} className="grid gap-3 border-t border-white/10 pt-4 md:grid-cols-[10rem_1fr]">
                  <p className="text-sm font-bold text-zinc-500">{item.period}</p>
                  <div>
                    <h3 className="text-base font-black text-white">{item.title}</h3>
                    <p className="text-sm font-bold text-sky-300">{item.organization}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-6 flex items-center gap-2">
              <Trophy size={18} className="text-emerald-300" />
              <h2 className="text-2xl font-black">수상과 인증</h2>
            </div>
            <div className="space-y-4">
              {awards.map((award) => (
                <div key={award.title} className="border-l-2 border-emerald-300 pl-4">
                  <p className="text-xs font-bold uppercase text-emerald-300">{award.period}</p>
                  <p className="mt-1 text-sm font-black text-white">{award.title}</p>
                  <p className="text-xs font-bold text-emerald-200/70">{award.organization}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{award.description}</p>
                </div>
              ))}
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm font-black text-white">자격증 / 공인 시험</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {certifications.map((certification) => (
                    <span key={certification.title} className="rounded border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-bold text-zinc-300">
                      {certification.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="cta" className="home-chapter section-shell bg-[#f4f0e7]">
        <div className="container-width section-padding">
          <div className="grid gap-6 border-y border-zinc-950 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="section-label">Let&apos;s Build</span>
              <h2 className="mt-4 max-w-3xl text-3xl font-black md:text-5xl">
                병목을 숫자로 찾고, 운영 가능한 코드로 줄이겠습니다.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
                백엔드 안정성 개선, 데이터 기반 의사결정, ML 기능 도입이 필요한 프로젝트라면 바로 기술 맥락부터 이야기할 수 있습니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="/contact" size="lg" className="group">
                협업 문의
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button href={profile.github} variant="outline" size="lg">
                GitHub 보기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
