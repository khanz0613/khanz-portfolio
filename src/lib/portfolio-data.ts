export type SkillLevel = '전문가' | '고급' | '중급' | '초급';

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  period: string;
  projectType: string;
  contribution?: string;
  organization: string;
  summary: string;
  highlights: string[];
  tech: SkillItem[];
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface ExperienceItem {
  title: string;
  period: string;
  organization: string;
  description: string;
}

export interface AwardItem {
  title: string;
  period: string;
  organization: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  type: string;
}

export const profile = {
  name: '하경한',
  englishName: 'Kyeonghan Ha',
  headline: '백엔드 중심 풀스택 개발자, 문제를 수치로 증명하는 ML 엔지니어',
  introduction:
    '서비스 안정성과 데이터 정확도를 동시에 챙기는 개발자입니다. 실무 프로젝트에서 백엔드 아키텍처, 데이터 파이프라인, ML 모델링을 함께 다루며 결과를 숫자로 검증해왔습니다.',
  location: '서울, 대한민국',
  email: 'gkrudgks0613@gmail.com',
  phone: '010-2431-0733',
  github: 'https://github.com/khanz0613',
};

export const highlights = [
  {
    label: '프로젝트',
    value: '7건',
    description: '개인 4건 + 팀 3건',
  },
  {
    label: '최대 팀 기여도',
    value: '70%',
    description: 'Fan.zip 백엔드/인프라 주도',
  },
  {
    label: '모델 정확도',
    value: '87.81%',
    description: 'BEAM 하이브리드 부도 예측',
  },
  {
    label: '데이터 스케일',
    value: '50,000+',
    description: '서울시 상권 데이터 전처리',
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'beam',
    name: 'BEAM',
    subtitle: '서울 소상공인 현금흐름 위험도 예측 시스템',
    period: '2025.08 - 2025.09',
    projectType: '개인 프로젝트',
    organization: '농협 AI 아이디어 공모전',
    summary:
      "전통적 재무 지표(Altman Z'-Score)와 Random Forest를 결합한 하이브리드 모델로 소상공인 위험도를 예측한 프로젝트입니다.",
    highlights: [
      '하이브리드 모델 설계로 부도 예측 정확도 87.81% 달성',
      '서울시 상권 데이터 5만여 개 전처리 및 결측 재무제표 역산 로직 구현',
      '대출 실행 시 위험 점수 변화(예: 28.3점 -> 60.0점) 시뮬레이션 기능 개발',
      'ChatGPT API 연동 개인 재무 리포트 자동 생성 기능 제공',
    ],
    tech: [
      { name: 'Python', level: '전문가' },
      { name: 'Pandas', level: '고급' },
      { name: 'Scikit-learn', level: '고급' },
      { name: 'Matplotlib', level: '고급' },
    ],
  },
  {
    id: 'fanzip',
    name: 'Fan.zip',
    subtitle: '팬/인플루언서 통합 플랫폼',
    period: '2025.06 - 2025.08',
    projectType: '팀 프로젝트',
    contribution: '기여도 70%',
    organization: '멀티캠퍼스(KB국민은행)',
    summary:
      '대규모 트래픽 환경에서 팬 경험과 운영 효율을 동시에 개선한 플랫폼 프로젝트입니다.',
    highlights: [
      'Redis Distributed Lock 도입으로 선착순 구매 동시성 이슈 해결',
      'Vue.js 3 기반 역할별 맞춤 UI/UX 구현 및 상태 관리 최적화',
      '8개 도메인, 42개 테이블 ERD 설계 총괄',
      'GitHub Actions CI/CD 자동화로 배포 시간 40% 단축',
      '30초 주기 동적 QR 티켓 + FCM 실시간 푸시 기능 구현',
      "[KB] IT's Your Life 종합실무 프로젝트 최우수상 수상",
    ],
    tech: [
      { name: 'Java', level: '전문가' },
      { name: 'Spring Framework', level: '전문가' },
      { name: 'MyBatis', level: '고급' },
      { name: 'Spring Security', level: '중급' },
      { name: 'Redis', level: '고급' },
      { name: 'OAuth', level: '중급' },
      { name: 'Vue.js', level: '고급' },
      { name: 'Tailwind CSS', level: '중급' },
      { name: 'AWS EC2', level: '전문가' },
      { name: 'AWS RDS', level: '고급' },
      { name: 'AWS S3', level: '고급' },
      { name: 'Docker', level: '고급' },
      { name: 'NGINX', level: '중급' },
      { name: 'GitHub Actions', level: '고급' },
      { name: 'JIRA', level: '중급' },
      { name: 'FCM', level: '고급' },
      { name: 'Git', level: '전문가' },
    ],
  },
  {
    id: 'yeodam',
    name: '여담',
    subtitle: '여행 계획 자동 생성 애플리케이션',
    period: '2025.05 - 2025.10',
    projectType: '팀 프로젝트',
    contribution: '기여도 30%',
    organization: '한국관광공사 TourAPI 공모전',
    summary:
      '여행 일정과 예산을 함께 관리할 수 있도록 API 설계와 캐시 전략에 집중한 프로젝트입니다.',
    highlights: [
      '여행 계획 CRUD, 예산 산출 알고리즘 포함 35개 이상 REST API 설계/구현',
      'TourAPI 연동 구간에 Caffeine + Redis 이중 캐시 적용',
      '응답 속도 개선과 일일 호출 제한 대응 로직 정립',
      'JWT + Spring Security 인증/인가, Refresh Token Redis 관리 구현',
    ],
    tech: [
      { name: 'Spring Boot', level: '전문가' },
      { name: 'Spring Data JPA', level: '고급' },
      { name: 'MySQL', level: '전문가' },
      { name: 'Spring Security', level: '중급' },
      { name: 'Redis', level: '고급' },
      { name: 'Git', level: '전문가' },
    ],
  },
  {
    id: 'itaewon-sentiment',
    name: '이태원 압사 사고 시민 정서 분석',
    subtitle: '댓글 기반 이슈 정서 변화 분석',
    period: '2023.09 - 2023.12',
    projectType: '개인 프로젝트',
    organization: '동국대학교',
    summary:
      '뉴스 댓글 데이터를 기반으로 정서 변화를 분석해 사회적 이슈의 여론 흐름을 정량화한 프로젝트입니다.',
    highlights: [
      'Selenium/BeautifulSoup 기반 데이터 수집 파이프라인 구축',
      'KoNLPy + 사용자 정의 불용어 사전으로 전처리 품질 개선',
      'LDA 토픽 모델링으로 1주년 전후 여론 변화 패턴 도출',
    ],
    tech: [
      { name: 'Python', level: '전문가' },
      { name: 'Selenium', level: '중급' },
      { name: 'BeautifulSoup', level: '중급' },
      { name: 'KoNLPy', level: '중급' },
      { name: 'NLTK', level: '중급' },
    ],
  },
  {
    id: 'veggie-hunter',
    name: 'Veggie Hunter',
    subtitle: '채소 최저가 알림 애플리케이션',
    period: '2023.03 - 2023.12',
    projectType: '팀 프로젝트',
    contribution: '기여도 60%',
    organization: '동국대학교',
    summary:
      '가격 데이터 수집 자동화와 모바일 알림 경험을 결합해 사용자가 체감할 수 있는 생활형 서비스를 만든 프로젝트입니다.',
    highlights: [
      'AWS Lambda + EventBridge로 일일 가격 데이터 자동 수집/전처리',
      'Flutter 기반 크로스 플랫폼 앱 개발 및 FL Chart 시각화 적용',
      'FCM 기반 최저가 푸시 알림 시스템 구축',
      '원스토어 애플리케이션 정식 등재',
    ],
    tech: [
      { name: 'Flutter', level: '중급' },
      { name: 'MySQL', level: '전문가' },
      { name: 'AWS Lambda', level: '고급' },
      { name: 'FCM', level: '고급' },
      { name: 'Python', level: '전문가' },
      { name: 'BeautifulSoup', level: '중급' },
      { name: 'Selenium', level: '중급' },
      { name: 'Git', level: '전문가' },
    ],
  },
  {
    id: 'sign-language',
    name: '수화 번역 시스템',
    subtitle: '경량 실시간 수화 인식 모델',
    period: '2023.03 - 2023.07',
    projectType: '개인 프로젝트',
    organization: '동국대학교',
    summary:
      '실시간 환경에서 동작 가능한 수화 인식 모델을 목표로, 인식 정확도와 경량화를 동시에 잡은 프로젝트입니다.',
    highlights: [
      'MediaPipe 21개 랜드마크 각도 추출 + SVM 모델 학습',
      '주 사용 손 추적 로직으로 다중 손 인식 오류 개선',
      '30도 측면 각도에서도 인식률 유지하도록 알고리즘 최적화',
      '테스트 데이터셋 기준 98.05% 번역 정확도 달성',
    ],
    tech: [
      { name: 'OpenCV', level: '고급' },
      { name: 'Scikit-learn', level: '고급' },
      { name: 'Pandas', level: '고급' },
      { name: 'Python', level: '전문가' },
    ],
  },
  {
    id: 'yongin-finance-crawl',
    name: '용인시 중소기업 재무제표 수집 자동화',
    subtitle: '3만여 개 기업 데이터 수집 자동화',
    period: '2022.07',
    projectType: '개인 프로젝트',
    organization: '용인시청 기업지원과',
    summary:
      '단기간에 대규모 기업 재무 데이터를 확보하기 위해 웹 크롤링 자동화와 DB 적재 파이프라인을 구축한 프로젝트입니다.',
    highlights: [
      '용인시 소재 3만여 개 중소기업 재무 데이터 수집 자동화 스크립트 작성',
      '정형화된 데이터베이스 구축으로 분석 가능한 상태로 정리',
    ],
    tech: [{ name: 'Python', level: '전문가' }],
  },
];

export const featuredProjectIds = ['beam', 'fanzip', 'yeodam'];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    description: '트래픽과 데이터 무결성을 중심으로 API와 도메인 구조를 설계합니다.',
    skills: [
      { name: 'Java', level: '전문가' },
      { name: 'Spring Boot', level: '전문가' },
      { name: 'MySQL', level: '전문가' },
      { name: 'Python', level: '전문가' },
      { name: 'Redis', level: '고급' },
      { name: 'Spring Security', level: '중급' },
    ],
  },
  {
    title: 'Frontend',
    description: '역할별 사용자 흐름과 상태 관리를 고려해 화면을 설계/구현합니다.',
    skills: [
      { name: 'Vue.js', level: '고급' },
      { name: 'Flutter', level: '중급' },
      { name: 'Tailwind CSS', level: '중급' },
      { name: 'FCM', level: '고급' },
    ],
  },
  {
    title: 'Data & ML',
    description: '도메인 지표와 머신러닝 모델을 결합해 예측 성능과 설명력을 함께 확보합니다.',
    skills: [
      { name: 'Scikit-learn', level: '고급' },
      { name: 'Pandas', level: '고급' },
      { name: 'OpenCV', level: '중급' },
      { name: 'KoNLPy', level: '중급' },
    ],
  },
  {
    title: 'Infra & DevOps',
    description: '실서비스 운영을 기준으로 배포 자동화와 모니터링 체계를 구성합니다.',
    skills: [
      { name: 'AWS EC2', level: '전문가' },
      { name: 'AWS RDS', level: '고급' },
      { name: 'AWS S3', level: '고급' },
      { name: 'AWS Lambda', level: '고급' },
      { name: 'Docker', level: '고급' },
      { name: 'GitHub Actions', level: '고급' },
      { name: 'CloudWatch', level: '중급' },
      { name: 'Prometheus', level: '초급' },
      { name: 'Grafana', level: '초급' },
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "[KB] IT's Your Life 6기",
    period: '2025.03 - 2025.08',
    organization: '멀티캠퍼스',
    description:
      '금융권 웹 개발자 풀스택 과정을 수료했습니다. Vue 프론트엔드, Spring Legacy 백엔드, MySQL 데이터베이스와 함께 GitHub Actions 기반 CI/CD와 AWS 인프라 역량을 강화했고 상위 20% 우수 수료로 마무리했습니다.',
  },
  {
    title: '목멱성(밴드동아리)',
    period: '2018.03 - 2024.02',
    organization: '동국대학교',
    description:
      '밴드부 활동과 운영 경험을 통해 협업 커뮤니케이션과 팀 조율 역량을 길렀고, 2019년에는 회장 역할을 맡아 조직 운영을 수행했습니다.',
  },
];

export const awards: AwardItem[] = [
  {
    title: '종합실무 프로젝트 최우수상',
    period: '2025.08',
    organization: "멀티캠퍼스(KB국민은행)",
    description:
      "[KB] IT's Your Life 6기 최종 종합실무 프로젝트에서 인플루언서-팬 전자지갑 서비스 개발 성과로 수상했습니다.",
  },
];

export const certifications: CertificationItem[] = [
  { title: '정보처리기사', type: '자격증' },
  { title: 'SQLD (SQL 개발자)', type: '자격증' },
  { title: 'OPIc Intermediate High', type: '공인 어학 시험' },
];

export const featuredKeywordSkills: SkillItem[] = [
  { name: 'Python', level: '전문가' },
  { name: 'C', level: '고급' },
  { name: 'Vue.js', level: '고급' },
  { name: 'Flutter', level: '중급' },
  { name: 'MySQL', level: '전문가' },
  { name: 'Java', level: '전문가' },
  { name: 'Spring Boot', level: '전문가' },
  { name: 'Git', level: '전문가' },
  { name: 'JIRA', level: '고급' },
  { name: 'OpenCV', level: '중급' },
];
