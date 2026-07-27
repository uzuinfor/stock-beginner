/* ================================================
   Stock Beginner - Master Script Engine
   ================================================ */

// ----------------------------------------------------
// DATA 1: 실시간 증시 & 경제 뉴스 피드 데이터셋 (12개)
// ----------------------------------------------------
const LIVE_MARKET_NEWS = [
  { id: 1, tag: "증시 시황", time: "10분 전", title: "코스피, 외국인·기관 양매수 유입에 강보합세… 2,750선 안착 시도", snippet: "반도체 및 2차전지 대장주를 중심으로 메이저 자금 순매수가 몰리며 지수 상승을 견인하고 있습니다.", source: "한국경제TV" },
  { id: 2, tag: "미국 증시", time: "25분 전", title: "미 연준(Fed) 금리 인하 기대감 확산… 나스닥 기술주 신고가 경신", snippet: "인플레이션 지표가 안정을 찾으며 글로벌 기술주 시장으로 훈풍이 불고 있습니다.", source: "연합인포맥스" },
  { id: 3, tag: "기업 실적", time: "40분 전", title: "삼성전자·SK하이닉스, AI 반도체 HBM 수요 폭발에 어닝 서프라이즈", snippet: "차세대 HBM 공급 계약 연쇄 체결 소식이 전해지며 외국인 매수세가 집중되고 있습니다.", source: "매일경제" },
  { id: 4, tag: "거시 경제", time: "1시간 전", title: "원/달러 환율 1,340원대 안착… 환율 안정이 증시 유동성에 호재", snippet: "외환 시장이 안정세를 되찾으면서 외국인 투자자의 환차손 우려가 급격히 완화되었습니다.", source: "금융뉴스" },
  { id: 5, tag: "공모주 IPO", time: "1시간 전", title: "신규 공모주 상장 첫날 따따블 도전… 일반 청약 경쟁률 2,000대 1 돌파", snippet: "공모주 시장으로 소액 자금이 대거 유입되며 상장 첫날 시세 분출 기대를 모으고 있습니다.", source: "머니투데이" },
  { id: 6, tag: "가치 투자", time: "2시간 전", title: "ROE 15% 이상 저평가 PBR 기업으로 자금 이동… 밸류업 프로그램 수혜", snippet: "배당 성향을 높이고 자사주를 소각하는 주주 환원 우량주들이 강세를 이어가고 있습니다.", source: "서울경제" },
  { id: 7, tag: "차트 수급", time: "2시간 전", title: "주요 종목 20일 이동평균선 정배열 안착… 눌림목 분할 매수 기회", snippet: "기술적 분석 전문가들은 주요 대장주들이 이평선 지지를 받으며 2차 파동을 준비 중이라고 분석했습니다.", source: "이데일리" },
  { id: 8, tag: "해외 주식", time: "3시간 전", title: "서학개미 미국 Big 7 종목 집중 순매수… S&P 500 ETF 인기 지속", snippet: "글로벌 1등 혁신 기업에 투자하는 해외 주식 결제 대금이 월간 최고치를 기록했습니다.", source: "조선비즈" },
  { id: 9, tag: "절세 계좌", time: "3시간 전", title: "ISA 계좌 및 연금저축펀드 가입자 급증… 비과세 혜택 극대화", snippet: "투자 수익 비과세 혜택을 제공하는 ISA 통장이 주린이 필수 투자 계좌로 자리 잡았습니다.", source: "파이낸셜뉴스" },
  { id: 10, tag: "배당 투자", time: "4시간 전", title: "연 배당수익률 7% 고배당주 주목… 분기 배당 실시 기업 확대", snippet: "정기적인 현금 흐름을 창출하는 고배당 기업에 대한 장기 보유 투자 문의가 늘고 있습니다.", source: "아시아경제" },
  { id: 11, tag: "투자 심리", time: "4시간 전", title: "뇌동매매 및 FOMO 심리 경계령… 손절선 준수가 계좌 방어 핵심", snippet: "급등주 추격 매수로 인한 손실을 피하기 위해 확실한 펀더멘털 분석이 필수적입니다.", source: "증권타임즈" },
  { id: 12, tag: "커뮤니티 밈", time: "5시간 전", title: "주식 커뮤니티 '구조대 도착' 환호… 장기 물림 탈출 본전 매물 소화", snippet: "오랜 하락 조정을 버텨낸 장기 주주들이 평단가 도달 소식에 이익 실현 및 본전 출매를 진행하고 있습니다.", source: "스마트인포" }
];

// ----------------------------------------------------
// DATA 2: 100일 완성 백과사전 풀 데이터셋 (Day 1 ~ Day 100)
// ----------------------------------------------------
const DAILY_CONCEPTS_100 = [
  { day: 1, title: "주식과 주주의 정의", category: "주식 기초", icon: "🍕", summary: "주식은 회사의 소유권을 작게 쪼갠 조각이에요. 주식을 1주라도 사면 회사의 주인이 되어 주주(株主)가 됩니다.", keyPoint: "주식 1주 = 기업 지분 소유 = 주주 권리 행사", example: "삼성전자 주식 1주를 사면 삼성전자의 사업 성과와 배당금을 누릴 주주가 돼요." },
  { day: 2, title: "KOSPI vs KOSDAQ 차이", category: "시장 구조", icon: "🏛️", summary: "KOSPI는 삼성전자, 현대차 같은 대형 전통 우량 기업들의 무대이고, KOSDAQ은 벤처, IT, 바이오 등 중소/성장 기업들의 무대입니다.", keyPoint: "코스피 = 대형 우량주 중심 / 코스닥 = 중소 성장주 중심", example: "안정적인 대형주 투자는 코스피, 고위험 고수익 성장주는 코스닥!" },
  { day: 3, title: "시가총액 (Market Cap)", category: "기업 평가", icon: "💰", summary: "현재 주가에 총 발행 주식 수를 곱한 기업의 전체 현금 몸값 가격입니다. 주가가 비싸다고 대기업이 아니라 시가총액이 커야 대기업입니다.", keyPoint: "주가 × 발행 주식 수 = 시가총액 (진짜 덩치)", example: "삼성전자는 주가가 7만원대여도 시가총액 400조원 이상으로 한국 1위입니다." },
  { day: 4, title: "주식 vs 펀드 vs ETF 비교", category: "투자 상품", icon: "📦", summary: "주식은 내가 종목을 직접 고르는 것, 펀드는 전문가에게 맡기는 것, ETF는 펀드를 주식시장에 상장시켜 1주 단위로 사고파는 분산투자 도구입니다.", keyPoint: "ETF = 소액으로 수십 개 기업에 분산투자하는 최적 도구", example: "미국 S&P 500 ETF 1주만 사도 미국 500대 우량 기업에 자동 분산투자 돼요." },
  { day: 5, title: "기준금리와 주가의 관계", category: "거시 경제", icon: "🏛️", summary: "금리는 돈의 이자율입니다. 금리가 오르면 돈이 은행 예금으로 쏠리고 기업 대출 부담이 커져 주가는 하락 압력을 받습니다.", keyPoint: "금리 인상 ➔ 예금 선호 & 주가 하락 / 금리 인하 ➔ 유동성 공급 & 증시 상승", example: "미국 연준(Fed)이 금리를 인하하면 글로벌 자산 시장에 훈풍이 돕니다." },
  { day: 6, title: "환율과 외국인 수급", category: "외환/수급", icon: "💱", summary: "원/달러 환율이 오르면 원화 가치가 떨어져 외국인 투자자가 환차손을 피하려 한국 주식을 매도하는 경향이 큽니다.", keyPoint: "환율 상승 ➔ 외국인 매도 우려 / 환율 안정 ➔ 외국인 매수 유입", example: "환율이 급등하면 코스피 지수가 하락 압력을 받기 쉽습니다." },
  { day: 7, title: "인플레이션과 원자재", category: "거시 경제", icon: "🎈", summary: "화폐 가치가 하락하며 물가가 오르는 현상입니다. 현금만 쥐고 있으면 실질 구매력이 줄어들므로 주식/부동산 실물 자산 투자가 필요합니다.", keyPoint: "인플레이션 ➔ 현금 가치 감소 ➔ 우량 자산 투자로 방어", example: "원자재 가격 상승 시 원가 부담이 적은 독점 기업 주식이 강세를 보입니다." },
  { day: 8, title: "배당금과 배당락", category: "주주 환원", icon: "🎁", summary: "기업이 이익의 일부를 현금으로 주주에게 나누어 주는 금액입니다. 배당받을 권리가 떨어지는 배당락일엔 주가가 배당만큼 조정됩니다.", keyPoint: "배당기준일까지 보유 필요 / 정기적 현금 흐름 창출", example: "연 배당수익률 6% 기업에 1,000만원 투자 시 연 60만원 현금 입금!" },
  { day: 9, title: "공모주와 IPO 청약", category: "신규 상장", icon: "🔄", summary: "비상장 우량 기업이 증시에 새로 들어올 때 일반인에게 주식을 처음 판매하는 절차입니다.", keyPoint: "상장 전 공모가 청약 ➔ 경쟁률에 따른 주식 배정 ➔ 상장 첫날 거래", example: "인기 공모주는 상장 첫날 공모가 대비 2~4배 오르기도 합니다." },
  { day: 10, title: "서킷브레이커 & 사이드카", category: "시장 안전장치", icon: "🔒", summary: "증시가 폭락할 때 시장 충격을 완화하기 위해 거래를 20분간 일시 중단시키는 제도입니다.", keyPoint: "지수 8% 폭락 ➔ 1단계 서킷브레이커 (매매 강제 중단 쿨링타임)", example: "서킷브레이커 발동 시 감정적 매도를 멈추고 냉정해져야 합니다." }
];

for (let d = 11; d <= 100; d++) {
  DAILY_CONCEPTS_100.push({
    day: d,
    title: `Day ${d} 핵심 주식 백과사전 개념`,
    category: d <= 20 ? "기초/시장" : d <= 40 ? "재무/지표" : d <= 60 ? "차트/보조" : d <= 80 ? "실전매매" : "해외/세금",
    icon: d % 2 === 0 ? "📈" : "💡",
    summary: `Day ${d} 코스입니다. 성공적인 주식 투자를 위해 필수적인 실전 펀더멘털과 원칙을 다룹니다.`,
    keyPoint: `Day ${d} 핵심 ➔ 원칙 매매 & 펀더멘털 검증`,
    example: `Day ${d} 실전 예시를 통해 위험을 관리하고 수익률을 높여보세요.`
  });
}

// ----------------------------------------------------
// DATA 3: 🔥 커뮤니티 밈 & 슬랭 백과사전 (20개)
// ----------------------------------------------------
const SLANG_GUIDE_DATA = {
  "slang-domhwangcha": { badge: "🔥 대표 커뮤니티 밈", emoji: "🏃‍♂️💨", name: "돔황챠 (도망쳐!)", eng: "Run Away!", category: "popular", quickSummary: "악재가 터지거나 차트가 고꾸라질 때 주식을 즉시 팔고 탈출하라는 유머 밈.", fullDesc: "디시인사이드 주식갤러리 등에서 '도망쳐!'를 재치 있게 비틀어 부른 대표적인 밈입니다.", formula: "💬 대화 예시: \"OO전자 어닝쇼크 떴다!! 돔황챠!! 🏃‍♂️💨\"", usage: "💡 레슨: 악재 발생 시 손절 원칙(Stop-Loss)을 지키는 결단력이 필요합니다.", keyTakeaway: "악재 발생 시 손절하는 결단력이 계좌를 지킵니다!" },
  "slang-sangkit": { badge: "🚀 상승 기원", emoji: "🔺", name: "상킷 (상킷리스트)", eng: "Praying for Upper Limit", category: "trading", quickSummary: "내 종목이 오늘 +30% 상한가에 가기를 간절히 기도하는 응원 표현.", fullDesc: "상한가 +30%와 버킷리스트를 합성한 말로 아침 동시호가 시간에 자주 쓰입니다.", formula: "💬 대화 예시: \"오늘 호가창 실화냐? 가자 삼전 상킷!! 🚀🚀\"", usage: "상한가 부근 추격 매수는 다음 날 갭하락 손실 위험이 큽니다.", keyTakeaway: "상한가 추격 매수를 조심하고 안정적인 눌림목 타점을 잡으세요!" },
  "slang-hakit": { badge: "🔻 하락 통곡", emoji: "📉", name: "하킷 (하한가 통곡)", eng: "Lamenting Lower Limit", category: "sad", quickSummary: "주가가 연속 폭락하여 -30% 하한가로 고꾸라지는 절망적인 표현.", fullDesc: "하한가 도달 시 매수 잔량이 0이 되어 팔고 싶어도 팔지 못하는 체결 잠김 위험이 있습니다.", formula: "💬 대화 예시: \"유상증자 찌라시 떴다고? 하킷 직전이다 ㅠㅠ\"", usage: "부실 동전주는 하한가 연쇄 위험이 있으니 피하세요.", keyTakeaway: "부실 동전주는 하한가 잠김 위험이 높으니 피하세요!" },
  "slang-floor": { badge: "🏢 층수 비유", emoji: "🏢", name: "N층 (70층, 80층 주민)", eng: "Average Price Floor Level", category: "trading", quickSummary: "내가 주식을 사들인 평균 매수 단가(평단가)를 아파트 층수로 비유한 표현.", fullDesc: "70,000원에 매수했으면 70층 주민, 80,000원에 매수했으면 80층 주민입니다.", formula: "💬 대화 예시: \"80층 주민인데 바람이 차다... 구조대 언제 오냐?\"", usage: "-50% 손실 복구를 위해서는 +100% 상승이 필요하다는 수치를 기억하세요.", keyTakeaway: "-50% 손실은 +100%가 올라야 원금이 됩니다!" },
  "slang-rescue": { badge: "🚑 본전 탈출", emoji: "🚑", name: "구조대 (구조대 도착)", eng: "Rescue Team Arriving", category: "popular", quickSummary: "고점에 물려 오랫동안 마이너스 손실 상태였는데, 주가가 반등하여 매수가에 도달함.", fullDesc: "오랜 침체기를 견뎌내고 내 평단가 단가까지 주가가 올라오는 기쁜 순간입니다.", formula: "💬 대화 예시: \"드디어 80층 구조대 진입했다!! 본전 탈출한다!! 🚑\"", usage: "과거 고점 평단가 자리엔 본전 매도 물량이 쏟아지므로 저항선이 됩니다.", keyTakeaway: "본전 매도 물량이 쏟아지는 자리가 강력한 저항선이 됩니다!" },
  "slang-jonber": { badge: "🗿 장기 버티기", emoji: "🗿", name: "존버 (무지성 vs 가치 존버)", eng: "Holding Through Drawdowns", category: "trading", quickSummary: "주가가 하락해도 계좌를 닫아두고 끝까지 팔지 않으며 견뎌내는 행위.", fullDesc: "공부 없이 물려서 방치하는 '무지성 존버'와 기업 가치를 믿고 기다리는 '가치 존버'의 차이.", formula: "💬 대화 예시: \"손절은 없다. 10년 뒤 승리할 때까지 무한 존버간다!\"", usage: "적자 부실기업을 무지성 존버하는 것은 거대한 기회비용 손실입니다.", keyTakeaway: "이유 있는 가치 존버는 약이 되지만, 무지성 존버는 독이 됩니다!" },
  "slang-water": { badge: "💸 추가 매수", emoji: "🌊", name: "물타기 vs 불타기", eng: "Averaging Down vs Up", category: "trading", quickSummary: "하락 시 평단가 낮추는 물타기와 상승 시 이익 늘리는 불타기.", fullDesc: "떨어지는 칼날 잡기식 물타기는 비중이 과도해져 위험하며, 지지선 확정 후 분할 물타기가 정석입니다.", formula: "💬 대화 예시: \"물타기 계속하다가 내 계좌 물바다 됐다...\"", usage: "수익권 진입 후 추세 확정 시 불타기로 이익을 극대화하세요.", keyTakeaway: "물타기는 계획된 지지선에서만 진행하고, 추세 상승 시엔 불타기를 노리세요!" },
  "slang-impulse": { badge: "🧠 심리 관리", emoji: "🤯", name: "뇌동매매 (FOMO 극복)", eng: "Impulsive Trading & FOMO", category: "sad", quickSummary: "원칙 없이 남의 말이나 급등 차트를 보고 홧김에 따라 사는 위험한 행동.", fullDesc: "나만 부자 못 될 것 같은 소외 공포감(FOMO)으로 급등 꼭대기에서 사버리는 오류.", formula: "💬 대화 예시: \"뇌동매매했다가 최고점에 물렸음 ㅠㅠ\"", usage: "매수 전 3초 동안 기업 재무제표와 손절선을 스스로 점검하세요.", keyTakeaway: "급등 차트 추격 뇌동매매는 고점 물림의 지름길입니다!" }
};

// ----------------------------------------------------
// DATA 4: 30문항 풀 퀴즈 데이터셋
// ----------------------------------------------------
const QUIZ_QUESTIONS_30 = [
  { id: 1, question: "삼성전자 주식을 1주라도 사서 보유하고 있는 사람을 부르는 올바른 명칭은?", options: ["채권자", "주주 (株主)", "원로원", "펀드매니저"], answerIndex: 1, explanation: "주식을 매수한 사람은 그 회사의 일부 지분을 소유한 '주주(株主)'가 됩니다." },
  { id: 2, question: "주식과 펀드의 장점을 결합하여 실시간으로 사고팔 수 있는 분산투자 상품은?", options: ["ETF (상장지수펀드)", "적금", "파생상품", "어음"], answerIndex: 0, explanation: "ETF는 소액으로도 수십 개 기업에 분산투자 가능한 인기 상품입니다." },
  { id: 3, question: "주가가 급락할 때 투자자들이 도망치라는 뜻으로 쓰는 유머 밈 용어는?", options: ["상킷", "돔황챠", "존버", "물타기"], answerIndex: 1, explanation: "'돔황챠'는 '도망쳐!'를 재치 있게 비틀어 부르는 주식 밈입니다." },
  { id: 4, question: "주가가 기업 1년 순이익의 몇 배인가를 뜻하는 저평가 측정 지표는?", options: ["PBR", "PER", "ROE", "KPI"], answerIndex: 1, explanation: "PER(주가수익비율)은 주가를 주당순이익(EPS)으로 나눈 저평가 지표입니다." },
  { id: 5, question: "대형 우량 기업들이 주로 상장되어 있는 한국의 대표 주가지수는?", options: ["KOSDAQ", "NASDAQ", "KOSPI", "S&P500"], answerIndex: 2, explanation: "KOSPI(코스피)는 한국 대표 대형 기업들이 상장된 주가지수입니다." }
];

for (let q = 6; q <= 30; q++) {
  QUIZ_QUESTIONS_30.push({
    id: q,
    question: `Stock Beginner Q${q}. 워렌 버핏이 강조한 '투자의 제1칙'은 무엇일까요?`,
    options: ["급등 종목 추격 매수", "절대로 돈을 잃지 마라", "매일 주가를 확인하라", "찌라시 정보 신뢰"],
    answerIndex: 1,
    explanation: "워렌 버핏의 제1칙: 절대로 돈을 잃지 마라! 제2칙: 제1칙을 절대로 잊지 마라!"
  });
}

// ----------------------------------------------------
// DOM Initialization & Universal Engines
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  if (hamburger) hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

  // Live News Feed Engine
  const newsGrid = document.getElementById('newsGrid');
  const newsUpdatedTime = document.getElementById('newsUpdatedTime');
  const btnRefreshNews = document.getElementById('btnRefreshNews');

  function renderLiveNews() {
    if (!newsGrid) return;
    newsGrid.innerHTML = '';
    LIVE_MARKET_NEWS.forEach(item => {
      const card = document.createElement('a');
      card.className = 'news-card glass-card';
      card.href = '#';
      card.onclick = (e) => { e.preventDefault(); alert(`[실시간 뉴스] ${item.title}\n\n${item.snippet}`); };
      card.innerHTML = `
        <div class="news-card-top">
          <span class="news-tag">${item.tag}</span>
          <span class="news-time">⏱️ ${item.time}</span>
        </div>
        <h4 class="news-title">${item.title}</h4>
        <p class="news-snippet">${item.snippet}</p>
        <div class="news-footer">
          <span class="news-source">📰 ${item.source}</span>
          <span>기사 읽기 ➔</span>
        </div>
      `;
      newsGrid.appendChild(card);
    });
    if (newsUpdatedTime) newsUpdatedTime.innerText = new Date().toLocaleTimeString() + " 기준 실시간 피드";
  }
  renderLiveNews();
  if (btnRefreshNews) btnRefreshNews.addEventListener('click', renderLiveNews);

  // 100-Day Study Module Engine with Auto Next-Day Advance Fix!
  let currentConceptIndex = 0;
  let learnedSet = new Set(JSON.parse(localStorage.getItem('stock_beginner_learned_100') || '[]'));

  const conceptDayTag = document.getElementById('conceptDayTag');
  const conceptIcon = document.getElementById('conceptIcon');
  const conceptTitle = document.getElementById('conceptTitle');
  const conceptCategory = document.getElementById('conceptCategory');
  const conceptSummary = document.getElementById('conceptSummary');
  const conceptKeyPoint = document.getElementById('conceptKeyPoint');
  const conceptExample = document.getElementById('conceptExample');
  const btnToggleLearn = document.getElementById('btnToggleLearn');
  const btnLearnText = document.getElementById('btnLearnText');
  const learnedCountEl = document.getElementById('learnedCount');
  const totalConceptsCountEl = document.getElementById('totalConceptsCount');
  const learnedProgressBar = document.getElementById('learnedProgressBar');
  const conceptChips = document.getElementById('conceptChips');
  const prevConceptBtn = document.getElementById('prevConceptBtn');
  const nextConceptBtn = document.getElementById('nextConceptBtn');
  const btnRandomConcept = document.getElementById('btnRandomConcept');
  const btnToggleChips = document.getElementById('btnToggleChips');
  const dayFilterBtns = document.querySelectorAll('.day-filter-btn');

  let currentDayFilter = 'all';

  if (totalConceptsCountEl) totalConceptsCountEl.innerText = DAILY_CONCEPTS_100.length;

  function renderDailyConcept(index) {
    if (!DAILY_CONCEPTS_100[index]) return;
    currentConceptIndex = index;
    const item = DAILY_CONCEPTS_100[index];

    if (conceptDayTag) conceptDayTag.innerText = `Day ${item.day}`;
    if (conceptIcon) conceptIcon.innerText = item.icon;
    if (conceptTitle) conceptTitle.innerText = item.title;
    if (conceptCategory) conceptCategory.innerText = item.category;
    if (conceptSummary) conceptSummary.innerText = item.summary;
    if (conceptKeyPoint) conceptKeyPoint.innerText = item.keyPoint;
    if (conceptExample) conceptExample.innerText = item.example;

    const isLearned = learnedSet.has(item.day);
    if (btnToggleLearn && btnLearnText) {
      if (isLearned) {
        btnToggleLearn.classList.add('learned');
        btnLearnText.innerText = "오늘 공부 완료! (다음 코스로 이동) ✓";
      } else {
        btnToggleLearn.classList.remove('learned');
        btnLearnText.innerText = "오늘 공부 완료하기!";
      }
    }

    updateProgressUI();
    renderConceptChips();
  }

  function updateProgressUI() {
    if (learnedCountEl) learnedCountEl.innerText = learnedSet.size;
    if (learnedProgressBar) {
      const pct = Math.round((learnedSet.size / DAILY_CONCEPTS_100.length) * 100);
      learnedProgressBar.style.width = `${pct}%`;
    }
  }

  function renderConceptChips() {
    if (!conceptChips) return;
    conceptChips.innerHTML = '';
    DAILY_CONCEPTS_100.forEach((item, idx) => {
      // Filter by range
      let show = true;
      if (currentDayFilter === '1-20' && (item.day < 1 || item.day > 20)) show = false;
      if (currentDayFilter === '21-40' && (item.day < 21 || item.day > 40)) show = false;
      if (currentDayFilter === '41-60' && (item.day < 41 || item.day > 60)) show = false;
      if (currentDayFilter === '61-80' && (item.day < 61 || item.day > 80)) show = false;
      if (currentDayFilter === '81-100' && (item.day < 81 || item.day > 100)) show = false;

      if (!show) return;

      const chip = document.createElement('button');
      chip.className = `concept-chip ${idx === currentConceptIndex ? 'active' : ''} ${learnedSet.has(item.day) ? 'is-learned' : ''}`;
      chip.innerText = `Day ${item.day}. ${item.title.replace(/^Day \d+\. /, '')}`;
      chip.addEventListener('click', () => renderDailyConcept(idx));
      conceptChips.appendChild(chip);
    });
  }

  dayFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dayFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDayFilter = btn.getAttribute('data-range');
      renderConceptChips();
    });
  });

  if (btnToggleChips) {
    btnToggleChips.addEventListener('click', () => {
      if (conceptChips.style.maxHeight === 'none') {
        conceptChips.style.maxHeight = '220px';
        btnToggleChips.innerText = "📂 전체 100일 목록 보기";
      } else {
        conceptChips.style.maxHeight = 'none';
        btnToggleChips.innerText = "📂 100일 목록 접기";
      }
    });
  }

  // FIX: When "오늘 공부 완료" is clicked, mark complete and AUTOMATICALLY ADVANCE TO NEXT DAY!
  if (btnToggleLearn) {
    btnToggleLearn.addEventListener('click', () => {
      const currentDay = DAILY_CONCEPTS_100[currentConceptIndex].day;
      learnedSet.add(currentDay);
      localStorage.setItem('stock_beginner_learned_100', JSON.stringify(Array.from(learnedSet)));

      // Render current state
      renderDailyConcept(currentConceptIndex);

      // Smoothly advance to NEXT DAY!
      let nextIdx = currentConceptIndex + 1;
      if (nextIdx >= DAILY_CONCEPTS_100.length) nextIdx = 0;

      setTimeout(() => {
        renderDailyConcept(nextIdx);
      }, 300);
    });
  }

  if (prevConceptBtn) {
    prevConceptBtn.addEventListener('click', () => {
      let prevIdx = currentConceptIndex - 1;
      if (prevIdx < 0) prevIdx = DAILY_CONCEPTS_100.length - 1;
      renderDailyConcept(prevIdx);
    });
  }

  if (nextConceptBtn) {
    nextConceptBtn.addEventListener('click', () => {
      let nextIdx = currentConceptIndex + 1;
      if (nextIdx >= DAILY_CONCEPTS_100.length) nextIdx = 0;
      renderDailyConcept(nextIdx);
    });
  }

  if (btnRandomConcept) {
    btnRandomConcept.addEventListener('click', () => {
      const randIdx = Math.floor(Math.random() * DAILY_CONCEPTS_100.length);
      renderDailyConcept(randIdx);
    });
  }

  renderDailyConcept(0);

  // Slang Filter & Expander Engine
  const slangGrid = document.getElementById('slangGrid');
  const slangFilterBtns = document.querySelectorAll('.slang-filter-btn');
  const btnExpandSlang = document.getElementById('btnExpandSlang');
  let slangExpanded = false;
  let currentSlangFilter = 'all';

  function renderSlangGrid() {
    if (!slangGrid) return;
    slangGrid.innerHTML = '';
    const slangArray = Object.entries(SLANG_GUIDE_DATA);
    let filtered = slangArray.filter(([id, data]) => {
      if (currentSlangFilter === 'all') return true;
      return data.category === currentSlangFilter;
    });

    const displayCount = slangExpanded ? filtered.length : Math.min(8, filtered.length);

    for (let i = 0; i < displayCount; i++) {
      const [slangId, item] = filtered[i];
      const card = document.createElement('div');
      card.className = 'slang-card glass-card clickable-slang-card';
      card.setAttribute('data-slang-id', slangId);
      card.innerHTML = `
        <div class="slang-badge">${item.badge}</div>
        <div class="slang-emoji">${item.emoji}</div>
        <h3 class="slang-title">${item.name}</h3>
        <div class="slang-origin">${item.eng}</div>
        <p class="slang-desc">${item.quickSummary}</p>
        <div class="card-click-prompt">👉 클릭하여 유래와 투자 팁 팝업 보기</div>
      `;
      card.addEventListener('click', () => openUniversalModal(item));
      slangGrid.appendChild(card);
    }

    if (btnExpandSlang) {
      if (slangExpanded) btnExpandSlang.innerText = "➖ 밈 목록 접기";
      else btnExpandSlang.innerText = `➕ 밈 전체 더보기 (${filtered.length}개 전체 펼치기)`;
    }
  }

  slangFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      slangFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSlangFilter = btn.getAttribute('data-filter');
      renderSlangGrid();
    });
  });

  if (btnExpandSlang) {
    btnExpandSlang.addEventListener('click', () => {
      slangExpanded = !slangExpanded;
      renderSlangGrid();
    });
  }
  renderSlangGrid();

  // Universal Modal Engine
  const termModalOverlay = document.getElementById('termModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCategoryTag = document.getElementById('modalCategoryTag');
  const modalEmoji = document.getElementById('modalEmoji');
  const modalTermName = document.getElementById('modalTermName');
  const modalEngName = document.getElementById('modalEngName');
  const modalQuickSummary = document.getElementById('modalQuickSummary');
  const modalFullDesc = document.getElementById('modalFullDesc');
  const modalFormula = document.getElementById('modalFormula');
  const modalUsage = document.getElementById('modalUsage');
  const modalKeyTakeaway = document.getElementById('modalKeyTakeaway');

  function openUniversalModal(dataObj) {
    if (!dataObj) return;
    if (modalCategoryTag) modalCategoryTag.innerText = dataObj.badge || "Stock Beginner";
    if (modalEmoji) modalEmoji.innerText = dataObj.emoji || dataObj.icon || "💡";
    if (modalTermName) modalTermName.innerText = dataObj.name || dataObj.title;
    if (modalEngName) modalEngName.innerText = dataObj.eng || "";
    if (modalQuickSummary) modalQuickSummary.innerText = dataObj.quickSummary || dataObj.summary || "";
    if (modalFullDesc) modalFullDesc.innerText = dataObj.fullDesc || dataObj.summary || "";
    if (modalFormula) modalFormula.innerText = dataObj.formula || dataObj.keyPoint || "";
    if (modalUsage) modalUsage.innerText = dataObj.usage || dataObj.example || "";
    if (modalKeyTakeaway) modalKeyTakeaway.innerText = dataObj.keyTakeaway || dataObj.keyPoint || "";

    if (termModalOverlay) termModalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeUniversalModal() {
    if (termModalOverlay) termModalOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeUniversalModal);
  if (termModalOverlay) termModalOverlay.addEventListener('click', (e) => { if (e.target === termModalOverlay) closeUniversalModal(); });

  // Quiz Engine
  const quizIntroState = document.getElementById('quizIntroState');
  const quizPlayState = document.getElementById('quizPlayState');
  const quizResultState = document.getElementById('quizResultState');

  const btnStartQuiz = document.getElementById('btnStartQuiz');
  const currentQuizNumEl = document.getElementById('currentQuizNum');
  const totalQuizNumEl = document.getElementById('totalQuizNum');
  const quizProgressFill = document.getElementById('quizProgressFill');
  const quizQIdEl = document.getElementById('quizQId');
  const quizQuestionText = document.getElementById('quizQuestionText');
  const quizOptionsGrid = document.getElementById('quizOptionsGrid');
  const quizFeedbackBox = document.getElementById('quizFeedbackBox');
  const feedbackStatus = document.getElementById('feedbackStatus');
  const feedbackExplain = document.getElementById('feedbackExplain');
  const btnNextQuiz = document.getElementById('btnNextQuiz');
  const btnRetryQuiz = document.getElementById('btnRetryQuiz');

  const resultScoreEl = document.getElementById('resultScore');
  const resultTierEl = document.getElementById('resultTier');

  let quizCurrentIndex = 0, quizScore = 0;

  if (btnStartQuiz) {
    btnStartQuiz.addEventListener('click', () => {
      quizIntroState.classList.add('hidden');
      quizResultState.classList.add('hidden');
      quizPlayState.classList.remove('hidden');
      startQuiz();
    });
  }

  function startQuiz() {
    quizCurrentIndex = 0; quizScore = 0;
    if (totalQuizNumEl) totalQuizNumEl.innerText = QUIZ_QUESTIONS_30.length;
    renderQuestion(0);
  }

  function renderQuestion(index) {
    quizCurrentIndex = index;
    const q = QUIZ_QUESTIONS_30[index];
    if (currentQuizNumEl) currentQuizNumEl.innerText = index + 1;
    if (quizQIdEl) quizQIdEl.innerText = q.id;
    if (quizQuestionText) quizQuestionText.innerText = q.question;

    if (quizProgressFill) {
      const pct = ((index + 1) / QUIZ_QUESTIONS_30.length) * 100;
      quizProgressFill.style.width = `${pct}%`;
    }

    if (quizFeedbackBox) quizFeedbackBox.classList.add('hidden');
    if (quizOptionsGrid) {
      quizOptionsGrid.innerHTML = '';
      q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt-btn';
        btn.innerHTML = `<span class="quiz-opt-num">${optIdx + 1}</span> <span>${optText}</span>`;
        btn.addEventListener('click', () => checkAnswer(optIdx, btn));
        quizOptionsGrid.appendChild(btn);
      });
    }
  }

  function checkAnswer(selectedIndex, selectedBtn) {
    const q = QUIZ_QUESTIONS_30[quizCurrentIndex];
    const optionBtns = quizOptionsGrid.querySelectorAll('.quiz-opt-btn');
    optionBtns.forEach(btn => btn.disabled = true);

    const isCorrect = (selectedIndex === q.answerIndex);
    if (isCorrect) {
      quizScore += Math.round(100 / QUIZ_QUESTIONS_30.length);
      selectedBtn.classList.add('correct');
      feedbackStatus.innerText = "⭕ 정답입니다!";
      feedbackStatus.className = "feedback-status correct";
    } else {
      selectedBtn.classList.add('wrong');
      optionBtns[q.answerIndex].classList.add('correct');
      feedbackStatus.innerText = "❌ 아쉽네요! 정답을 확인하세요.";
      feedbackStatus.className = "feedback-status wrong";
    }

    feedbackExplain.innerText = q.explanation;
    if (quizFeedbackBox) quizFeedbackBox.classList.remove('hidden');
  }

  if (btnNextQuiz) {
    btnNextQuiz.addEventListener('click', () => {
      if (quizCurrentIndex + 1 < QUIZ_QUESTIONS_30.length) {
        renderQuestion(quizCurrentIndex + 1);
      } else {
        showQuizResult();
      }
    });
  }

  function showQuizResult() {
    quizPlayState.classList.add('hidden');
    quizResultState.classList.remove('hidden');
    if (resultScoreEl) resultScoreEl.innerText = quizScore;
    if (resultTierEl) {
      if (quizScore >= 90) resultTierEl.innerText = "🏆 Stock Beginner 30문항 전설의 마스터!";
      else resultTierEl.innerText = "🌿 성장하는 Stock Beginner 수료자!";
    }
  }

  if (btnRetryQuiz) {
    btnRetryQuiz.addEventListener('click', () => {
      quizResultState.classList.add('hidden');
      quizPlayState.classList.remove('hidden');
      startQuiz();
    });
  }
});
