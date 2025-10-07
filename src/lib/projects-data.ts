import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'yeodam',
    title: 'Yeodam',
    titleKo: '여담(여행을 담다) - 여행 계획 플랫폼',
    overview: '예산과 일정을 동시에 고려하는 실용적 여행 계획 서비스입니다. React와 Spring Boot를 활용한 풀스택 웹 애플리케이션으로 사용자가 "어디로" & "얼마를" 함께 계획할 수 있는 플랫폼을 구현했습니다.',
    period: '2025.04 - 2025.09 (현재 운영 중)',
    role: '백엔드 개발자',
    status: 'in-progress',
    techStack: {
      backend: ['Java 17', 'Spring Boot 3.5', 'Spring Data JPA', 'Spring Security', 'MySQL', 'Redis', 'JWT'],
      frontend: ['React 18.3', 'Ant Design', 'Zustand', 'Capacitor 6.2.1'],
      database: ['MySQL', 'Redis'],
      devops: ['Cloudinary']
    },
    metrics: {
      performance: '40% 향상',
      features: 'Redis 캐싱',
      testCoverage: 'REST API 설계'
    },
    links: {
      github: 'https://github.com/khanz0613'
    }
  },
  {
    id: 'seoul-market-risk',
    title: 'Seoul Market Risk ML System',
    titleKo: 'Seoul Market Risk ML System - 금융 ML 분석 시스템',
    overview: 'Altman Z\'-Score와 Random Forest를 결합한 하이브리드 ML 모델로 소상공인 신용도를 분석하는 AI 시스템입니다. 매출 데이터만으로 재무 건전성 평가 및 대출 효과 시뮬레이션을 구현했습니다.',
    period: '2025.08 - 2025.09',
    role: 'ML 엔지니어 & 백엔드 개발자',
    status: 'completed',
    techStack: {
      ml: ['Python 3.11+', 'Scikit-learn', 'Pandas', 'NumPy'],
      backend: ['Altman Z\'-Score (부도 예측 모델)'],
      database: ['서울시 상권 분석 데이터 (2019-2024)']
    },
    metrics: {
      accuracy: 'R² 0.85+, 정확도 90%+',
      scale: '50,000개 사업자',
      datasets: '6년간 상권 데이터'
    },
    links: {
      github: 'https://github.com/khanz0613/seoul-market-risk-ml'
    }
  },
  {
    id: 'fanzip',
    title: 'Fan.zip',
    titleKo: 'Fan.zip - 인플루언서 팬 종합 서비스 플랫폼',
    overview: '인플루언서와 팬 간 소통 채널 및 팬 문화 생태계 확장을 위한 종합 플랫폼입니다. 멤버십, 팬카드, 팬미팅 등 다양한 서비스를 제공하며 Redis 분산 락과 동적 QR 시스템으로 안정적인 서비스를 구현했습니다.',
    period: '2025년 상반기 - 하반기 (현재 운영 중)',
    role: '백엔드 개발자 + DevOps 엔지니어 + ERD 설계 총괄',
    status: 'in-progress',
    techStack: {
      backend: ['Java', 'Spring Framework', 'Spring Security', 'MyBatis', 'MySQL', 'Redis', 'OAuth 2.0', 'JWT'],
      frontend: ['Vue.js 3', 'Pinia', 'Vite', 'Tailwind CSS', 'JavaScript'],
      database: ['MySQL', 'Redis'],
      devops: ['AWS (EC2, RDS, S3)', 'Docker', 'Nginx', 'GitHub Actions', 'FCM', 'Prometheus', 'Grafana', 'Alert Manager']
    },
    metrics: {
      efficiency: '배포 시간 80% 단축',
      scale: 'ERD 25개 이상 테이블',
      users: '2030 세대 102명 대상 UX 개선'
    },
    links: {
      github: 'https://github.com/fanzip/fanzip-server'
    }
  },
  {
    id: 'sign-language-translator',
    title: 'Sign Language Translator',
    titleKo: '수화 번역 시스템 - AI 기반 접근성 향상 프로젝트',
    overview: 'MediaPipe와 TensorFlow를 활용한 실시간 수화 인식 및 번역 시스템입니다. 컴퓨터 비전 기술로 청각 장애인과 일반인 간 소통 장벽을 해결하고, Ollama LLM 연동으로 인사이트 도출 기능을 구현했습니다.',
    period: '2023년 상반기',
    role: 'AI/ML 개발자',
    status: 'completed',
    techStack: {
      ml: ['OpenCV', 'MediaPipe', 'TensorFlow', 'PyTorch', 'BERT', 'Transformer'],
      backend: ['FastAPI', 'WebSocket', 'Ollama LLM'],
      frontend: ['실시간 영상 처리']
    },
    metrics: {
      accuracy: '문맥 고려 번역',
      performance: '실시간 처리',
      features: 'WebSocket 파이프라인'
    },
    links: {
      github: 'https://github.com/khanz0613/sign-language-translator'
    }
  },
  {
    id: 'emotion-analysis',
    title: 'Emotion Analysis Platform',
    titleKo: '이태원 압사 사고 시민 정서 분석 연구',
    overview: 'BERT 모델을 활용한 대용량 텍스트 감정 분석 시스템입니다. 이태원 압사 사고에 대한 100만 건 이상의 소셜미디어 데이터를 수집 및 분석하여 시민 정서를 정량화하고 정책적 시사점을 도출했습니다.',
    period: '2023 - 2024',
    role: '데이터 분석가',
    status: 'completed',
    techStack: {
      ml: ['BERT', 'NLTK', 'KoNLPy'],
      backend: ['Python', 'Selenium', 'BeautifulSoup'],
      database: ['소셜미디어 데이터 100만+ 건'],
      devops: ['Matplotlib', 'Seaborn', 'Plotly', 'R', 'scikit-learn']
    },
    metrics: {
      scale: '100만+ 건 데이터 수집',
      accuracy: '시간별/매체별 감정 패턴',
      performance: '정책적 시사점 도출'
    },
    links: {
      github: 'https://github.com/khanz0613/emotion-analysis'
    }
  },
  {
    id: 'vegetable-price-app',
    title: 'Vegetable Price App',
    titleKo: '채소 최저가 추이 분석 및 레시피 제공 애플리케이션',
    overview: 'Selenium 기반 농산물 가격 크롤링 시스템과 AWS Lambda 자동화 인프라를 구축한 모바일 애플리케이션입니다. Flutter로 개발하여 Google Play Store에 등재했습니다.',
    period: '2023.03 - 2023.12',
    role: '풀스택 개발자',
    status: 'completed',
    techStack: {
      backend: ['Spring Boot', 'JPA', 'MySQL', 'Python', 'Pandas', 'Selenium'],
      frontend: ['Flutter'],
      database: ['MySQL'],
      devops: ['AWS Lambda', 'AWS EventBridge']
    },
    metrics: {
      automation: '일일 자동 크롤링',
      deployment: 'Google Play Store 등재',
      features: '크로스 플랫폼 (.aab)'
    },
    links: {
      github: 'https://github.com/khanz0613/vegetable-price-app'
    }
  }
];
