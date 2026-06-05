import { Award, Briefcase, GraduationCap, Map, Plane, Truck, Building2, Server } from "lucide-react";

export const profile = {
  name: "유종형",
  nameHanja: "柳宗亨",
  birthDate: "1976.05.22",
  title: "남양주시청 자동차관리과 화물팀장",
  education: {
    school: "한국항공대학교",
    major: "컴퓨터공학과",
    degree: "학사",
    graduation: "2003.02",
  },
};

export const highlights = [
  {
    title: "민간협력 화물주차장 개발",
    badge: "전국 최초",
    description: "남양주시청 자동차관리과 화물팀 업무 총괄 및 민간협력 화물주차장 기획·개발",
    icon: Truck,
    date: "2025.01",
    url: "https://www.youtube.com/watch?v=S1r8_NQsFVE"
  },
  {
    title: "주소정보시스템 개발",
    badge: "전국 최초",
    description: "부동산관리과 도로명주소팀장으로서 도로명주소 업무 총괄 및 주소정보시스템 혁신",
    icon: Map,
    date: "2022.03",
    url: "https://www.kihoilbo.co.kr/news/articleView.html?idxno=1107662"
  },
  {
    title: "드론 기반 불법 묘지 감시 시스템",
    badge: "전국 최초",
    description: "노인복지과 장묘문화팀장 역임 중 전국 최초로 드론 기반 감시 시스템 개발 도입",
    icon: Plane,
    date: "2020.10",
    url: "https://www.fnnews.com/news/202110170415541102"
  },
];

export const experience = [
  {
    period: "2025.01.01 - 현재",
    organization: "남양주시청 자동차관리과",
    role: "화물팀장",
    details: ["화물팀 업무 총괄", "전국 최초 민간협력 화물주차장 개발"],
    icon: Truck,
  },
  {
    period: "2022.03.14 - 2024.12.31",
    organization: "남양주시청 부동산관리과",
    role: "도로명주소팀장",
    details: ["도로명주소 업무 총괄", "전국 최초 주소정보시스템 개발"],
    icon: Map,
  },
  {
    period: "2020.10.26 - 2022.03.13",
    organization: "남양주시청 노인복지과",
    role: "장묘문화팀장",
    details: ["장묘업무 총괄", "전국 최초 드론 기반 불법 묘지 감시 시스템 개발"],
    icon: Server,
  },
  {
    period: "2019.05.07 - 2020.10.25",
    organization: "남양주시청 도서관정책과",
    role: "도서관지원팀장",
    details: ["정약용 도서관 등 건립 총괄"],
    icon: Building2,
  },
  {
    period: "2018.01.02 - 2019.05.06",
    organization: "오남읍",
    role: "지역안전팀장 (행정6급)",
    details: ["지역안전팀 업무 총괄"],
    icon: Briefcase,
  },
  {
    period: "2006.11.16 - 2017.12.31",
    organization: "총무기획국 자치지원과",
    role: "행정7급",
    details: ["행정서비스헌장 담당"],
    icon: Briefcase,
  },
  {
    period: "2006.10.20",
    organization: "남양주시청",
    role: "행정7급",
    details: ["공채시험(행정7급) 합격"],
    icon: Award,
  },
];

export const awards = [
  {
    date: "2024.12.23",
    title: "남양주시 적극행정 경진대회 (우수상)",
    organization: "남양주시 주관",
  },
  {
    date: "2024.08.28",
    title: "경기도 적극행정 경진대회 (장려상)",
    organization: "경기도 주관",
  },
  {
    date: "2021.11.30",
    title: "장사문화 발전 유공",
    organization: "보건복지부장관",
  },
  {
    date: "2016.03.31",
    title: "자랑스러운 공무원",
    organization: "경기도지사",
  },
  {
    date: "2010.12.31",
    title: "2010년 직무수행능력평가 시험우수(1등)",
    organization: "남양주시장",
  },
  {
    date: "2010.09.01",
    title: "정보화능력 경진대회 (최우수)",
    organization: "남양주시장",
  },
];

export const mediaCoverage = [
  {
    year: "2010",
    title: "남양주시 '정보지식분야 최고기관' 뽐냈다",
    url: "https://www.kyeongin.com/article/543045",
    publisher: "경인일보"
  },
  {
    year: "2020",
    title: "남양주시 '정약용 도서관', '2020년 균형발전사업 평가'서 우수사례로 선정",
    url: "https://www.kmib.co.kr/article/view.asp?arcid=0014596418",
    publisher: "국민일보"
  },
  {
    year: "2021",
    title: "남양주시 장사행정 혁신선도...드론도입",
    url: "https://www.fnnews.com/news/202110170415541102",
    publisher: "파이낸셜뉴스"
  },
  {
    year: "2023",
    title: "민관 디지털 안전주소정보시설 설치사업 [남양주]",
    url: "https://www.youtube.com/watch?v=d-N9-zP82O8",
    publisher: "딜라이브TV"
  },
  {
    year: "2024",
    title: "[정약용 '시대정신'과 오늘] 전국 최초 스마트 주소정보시설",
    url: "https://www.kihoilbo.co.kr/news/articleView.html?idxno=1107662",
    publisher: "기호일보"
  },
  {
    year: "2025",
    title: "'우리 동네 화물주차장'으로 불법주차 해소",
    url: "https://www.youtube.com/watch?v=S1r8_NQsFVE",
    publisher: "SBS"
  }
];

export const aiActivities = [
  {
    date: "2025.02",
    title: "남양주시 '스마트 행정혁신 연구동아리' 회장 역임",
    description: "AI를 활용한 스마트 행정혁신 사례 발굴 및 개발"
  },
  {
    date: "2026.05",
    title: "남양주시 월례조회 직원 및 시민 대상 발표",
    description: "발표 내용 : AI가 여는 스마트 행정의 새로운 패러다임"
  }
];

