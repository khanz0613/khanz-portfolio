import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'fanzip',
    title: 'FanZip',
    titleKo: '팬집 - 팬 커뮤니티 플랫폼',
    overview: '다양한 팬덤을 위한 종합 커뮤니티 플랫폼 개발 프로젝트입니다. React와 Spring Boot를 활용한 풀스택 웹 애플리케이션으로 팬들이 콘텐츠를 공유하고 소통할 수 있는 공간을 구현했습니다.',
    period: '2023.03 - 2024.02',
    role: '풀스택 개발자',
    status: 'completed',
    techStack: {
      backend: ['Spring Boot 3.2', 'Java 17', 'Spring Security'],
      frontend: ['React 18', 'TypeScript', 'Tailwind CSS'],
      database: ['PostgreSQL', 'Redis'],
      devops: ['AWS', 'Docker', 'GitHub Actions']
    },
    metrics: {
      features: '15개',
      performance: '< 200ms',
      testCoverage: '85%'
    },
    links: {
      github: 'https://github.com/khanz0613/fanzip-community'
    }
  },
  {
    id: 'smart-finance-ai',
    title: 'Smart Finance AI',
    titleKo: '스마트 금융 AI 시스템',
    overview: 'Altman Z\'-Score와 Random Forest를 결합한 하이브리드 ML 모델로 기업 신용도를 분석하는 AI 시스템입니다. 90% 이상의 예측 정확도를 달성했습니다.',
    period: '2024.01 - 2024.08',
    role: 'ML 엔지니어 & 백엔드 개발자',
    status: 'completed',
    techStack: {
      backend: ['Spring Boot', 'Python 3.11'],
      ml: ['Scikit-learn', 'Pandas', 'NumPy'],
      database: ['PostgreSQL', 'MongoDB'],
      devops: ['AWS Lambda', 'Docker']
    },
    metrics: {
      accuracy: '90%+',
      datasets: '3개',
      scale: '1K+ 데이터'
    },
    links: {
      github: 'https://github.com/khanz0613/smart-finance-ai'
    }
  },
  {
    id: 'sign-language-translator',
    title: 'Sign Language Translator',
    titleKo: '실시간 수화 번역 시스템',
    overview: 'MediaPipe와 TensorFlow를 활용한 실시간 수화 인식 및 번역 시스템입니다. 컴퓨터 비전 기술로 수화를 텍스트로 변환합니다.',
    period: '2023.09 - 2024.02',
    role: 'AI 연구원 & 개발자',
    status: 'completed',
    techStack: {
      ml: ['TensorFlow', 'MediaPipe', 'OpenCV'],
      backend: ['Python', 'FastAPI'],
      frontend: ['React', 'WebRTC'],
      devops: ['AWS', 'Docker']
    },
    metrics: {
      accuracy: '87%',
      performance: '실시간',
      vocabulary: '50+ 수화'
    },
    links: {
      github: 'https://github.com/khanz0613/sign-language-translator'
    }
  },
  {
    id: 'emotion-analysis-platform',
    title: 'Emotion Analysis Platform',
    titleKo: '대용량 감정 분석 플랫폼',
    overview: 'BERT 모델을 활용한 대용량 텍스트 감정 분석 시스템입니다. 다양한 텍스트 데이터를 처리하여 정확한 감정 분석을 제공합니다.',
    period: '2023.06 - 2023.12',
    role: 'ML 엔지니어',
    status: 'completed',
    techStack: {
      ml: ['BERT', 'PyTorch', 'Transformers'],
      backend: ['Python', 'Django'],
      database: ['PostgreSQL', 'Elasticsearch'],
      devops: ['AWS', 'Kubernetes']
    },
    metrics: {
      scale: '10K+ 데이터',
      accuracy: '89%',
      performance: '< 100ms'
    },
    links: {
      github: 'https://github.com/khanz0613/emotion-analysis'
    }
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation Pipeline',
    titleKo: 'DevOps 자동화 파이프라인',
    overview: 'GitHub Actions를 활용한 CI/CD 자동화 시스템으로 배포 효율성을 80% 향상시켰습니다. Docker와 Nginx를 통한 무중단 배포를 구현했습니다.',
    period: '2023.01 - 현재',
    role: 'DevOps 엔지니어',
    status: 'in-progress',
    techStack: {
      devops: ['GitHub Actions', 'Docker', 'Nginx', 'AWS'],
      backend: ['Spring Boot', 'Node.js'],
      database: ['PostgreSQL', 'Redis']
    },
    metrics: {
      efficiency: '80% 향상',
      automation: '5단계',
      deployment: '무중단'
    },
    links: {
      github: 'https://github.com/khanz0613/devops-automation'
    }
  }
];