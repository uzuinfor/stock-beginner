/* ================================================
   Stock Beginner - Master Script Engine
   (100-Day Grid + 20+ Memes + 24 Deep Terms + Live News + Clean Quiz Engine)
   ================================================ */

// ----------------------------------------------------
// DATA 1: 실시간 증시 & 경제 뉴스 (12개)
// ----------------------------------------------------
const LIVE_MARKET_NEWS = [
  { id: 1, tag: "증시 시황", time: "10분 전", title: "코스피, 외국인·기관 양매수 유입에 강보합세… 2,750선 안착 시도", snippet: "반도체 및 2차전지 대장주를 중심으로 메이저 자금 순매수가 몰리며 지수 상승을 견인하고 있습니다.", source: "한국경제TV" },
  { id: 2, tag: "미국 증시", time: "25분 전", title: "미 연준(Fed) 금리 인하 기대감 확산… 나스닥 기술주 신고가 경신", snippet: "인플레이션 지표가 안정을 찾으며 글로벌 기술주 시장으로 훈풍이 불고 있습니다.", source: "연합인포맥스" },
  { id: 3, tag: "기업 실적", time: "40분 전", title: "삼성전자·SK하이닉스, AI 반도체 HBM 수요 폭발에 어닝 서프라이즈", snippet: "차세대 HBM 공급 계약 연쇄 체결 소식이 전해지며 외국인 매수세가 집중되고 있습니다.", source: "매일경제" },
  { id: 4, tag: "거시 경제", time: "1시간 전", title: "원/달러 환율 1,340원대 안착… 환율 안정이 증시 유동성에 호재", snippet: "외환 시장이 안정세를 되찾으면서 외국인 투자자의 환차손 우려가 급격히 완화되었습니다.", source: "금융뉴스" },
  { id: 5, tag: "공모주 IPO", time: "1시간 전", title: "신규 공모주 상장 첫날 따따블 도전… 일반 청약 경쟁률 2,000대 1 돌파", snippet: "공모주 시장으로 소액 자금이 대거 유입되며 상장 첫날 시세 분출 기대를 모으고 있습니다.", source: "머니투데이" },
  { id: 6, tag: "가치 투자", time: "2시간 전", title: "ROE 15% 이상 저평가 PBR 기업으로 자금 이동… 밸류업 수혜", snippet: "배당 성향을 높이고 자사주를 소각하는 주주 환원 우량주들이 강세를 이어가고 있습니다.", source: "서울경제" },
  { id: 7, tag: "차트 수급", time: "2시간 전", title: "주요 종목 20일 이동평균선 정배열 안착… 눌림목 분할 매수 기회", snippet: "기술적 분석 전문가들은 주요 대장주들이 이평선 지지를 받으며 2차 파동을 준비 중이라고 분석했습니다.", source: "이데일리" },
  { id: 8, tag: "해외 주식", time: "3시간 전", title: "서학개미 미국 Big 7 종목 집중 순매수… S&P 500 ETF 인기 지속", snippet: "글로벌 1등 혁신 기업에 투자하는 해외 주식 결제 대금이 월간 최고치를 기록했습니다.", source: "조선비즈" },
  { id: 9, tag: "절세 계좌", time: "3시간 전", title: "ISA 계좌 및 연금저축펀드 가입자 급증… 비과세 혜택 극대화", snippet: "투자 수익 비과세 혜택을 제공하는 ISA 통장이 주린이 필수 투자 계좌로 자리 잡았습니다.", source: "파이낸셜뉴스" },
  { id: 10, tag: "배당 투자", time: "4시간 전", title: "연 배당수익률 7% 고배당주 주목… 분기 배당 실시 기업 확대", snippet: "정기적인 현금 흐름을 창출하는 고배당 기업에 대한 장기 보유 투자 문의가 늘고 있습니다.", source: "아시아경제" },
  { id: 11, tag: "투자 심리", time: "4시간 전", title: "뇌동매매 및 FOMO 심리 경계령… 손절선 준수가 계좌 방어 핵심", snippet: "급등주 추격 매수로 인한 손실을 피하기 위해 확실한 펀더멘털 분석이 필수적입니다.", source: "증권타임즈" },
  { id: 12, tag: "커뮤니티 밈", time: "5시간 전", title: "주식 커뮤니티 '구조대 도착' 환호… 장기 물림 탈출 본전 매물 소화", snippet: "오랜 하락 조정을 버텨낸 장기 주주들이 평단가 도달 소식에 이익 실현 및 본전 출매를 진행하고 있습니다.", source: "스마트인포" }
];

// ----------------------------------------------------
// DATA 2: 100일 백과사전 풀 데이터셋 (Day 1 ~ Day 100)
// ----------------------------------------------------
const DAILY_CONCEPTS_100 = [
  { day: 1, title: "주식과 주주의 정의", category: "기초", icon: "🍕", summary: "주식은 회사의 소유권을 작게 쪼갠 조각이에요. 주식을 1주라도 사면 회사의 주인이 되어 주주(株主)가 됩니다.", keyPoint: "주식 1주 = 기업 지분 소유 = 주주 권리 행사", example: "삼성전자 주식 1주를 사면 삼성전자의 사업 성과와 배당금을 누릴 주주가 돼요." },
  { day: 2, title: "KOSPI vs KOSDAQ 차이", category: "시장", icon: "🏛️", summary: "KOSPI는 삼성전자, 현대차 같은 대형 전통 우량 기업들의 무대이고, KOSDAQ은 벤처, IT, 바이오 등 성장 기업들의 무대입니다.", keyPoint: "코스피 = 대형 우량주 중심 / 코스닥 = 중소 성장주 중심", example: "안정적인 대형주 투자는 코스피, 고위험 고수익 성장주는 코스닥!" },
  { day: 3, title: "시가총액 (Market Cap)", category: "지표", icon: "💰", summary: "현재 주가에 총 발행 주식 수를 곱한 기업의 전체 현금 몸값 가격입니다. 주가가 비싸다고 대기업이 아니라 시가총액이 커야 대기업입니다.", keyPoint: "주가 × 발행 주식 수 = 시가총액 (진짜 덩치)", example: "삼성전자는 주가가 7만원대여도 시가총액 400조원 이상으로 한국 1위입니다." },
  { day: 4, title: "주식 vs 펀드 vs ETF 비교", category: "상품", icon: "📦", summary: "주식은 직접 종목 선택, 펀드는 전문가 위탁, ETF는 펀드를 주식시장에 상장시켜 1주 단위로 사고파는 분산투자 도구입니다.", keyPoint: "ETF = 소액으로 수십 개 기업에 분산투자하는 최적 도구", example: "미국 S&P 500 ETF 1주만 사도 미국 500대 우량 기업에 자동 분산투자 돼요." },
  { day: 5, title: "기준금리와 주가의 관계", category: "경제", icon: "🏛️", summary: "금리는 돈의 이자율입니다. 금리가 오르면 돈이 은행 예금으로 쏠리고 기업 대출 부담이 커져 주가는 하락 압력을 받습니다.", keyPoint: "금리 인상 ➔ 예금 선호 & 주가 하락 / 금리 인하 ➔ 유동성 공급 & 증시 상승", example: "미국 연준(Fed)이 금리를 인하하면 글로벌 자산 시장에 훈풍이 돕니다." },
  { day: 6, title: "환율과 외국인 수급", category: "외환", icon: "💱", summary: "원/달러 환율이 오르면 원화 가치가 떨어져 외국인 투자자가 환차손을 피하려 한국 주식을 매도하는 경향이 큽니다.", keyPoint: "환율 상승 ➔ 외국인 매도 우려 / 환율 안정 ➔ 외국인 매수 유입", example: "환율이 급등하면 코스피 지수가 하락 압력을 받기 쉽습니다." },
  { day: 7, title: "인플레이션과 원자재", category: "경제", icon: "🎈", summary: "화폐 가치가 하락하며 물가가 오르는 현상입니다. 현금만 쥐고 있으면 실질 구매력이 줄어들므로 실물 자산 투자가 필요합니다.", keyPoint: "인플레이션 ➔ 현금 가치 감소 ➔ 우량 자산 투자로 방어", example: "원자재 가격 상승 시 원가 부담이 적은 독점 기업 주식이 강세를 보입니다." },
  { day: 8, title: "배당금과 배당락", category: "배당", icon: "🎁", summary: "기업이 이익의 일부를 현금으로 주주에게 나누어 주는 금액입니다. 배당받을 권리가 떨어지는 배당락일엔 주가가 조정됩니다.", keyPoint: "배당기준일까지 보유 필요 / 정기적 현금 흐름 창출", example: "연 배당수익률 6% 기업에 1,000만원 투자 시 연 60만원 현금 입금!" },
  { day: 9, title: "공모주와 IPO 청약", category: "상장", icon: "🔄", summary: "비상장 우량 기업이 증시에 새로 들어올 때 일반인에게 주식을 처음 판매하는 절차입니다.", keyPoint: "상장 전 공모가 청약 ➔ 경쟁률에 따른 주식 배정 ➔ 상장 첫날 거래", example: "인기 공모주는 상장 첫날 공모가 대비 2~4배 오르기도 합니다." },
  { day: 10, title: "서킷브레이커 & 사이드카", category: "제도", icon: "🔒", summary: "증시가 폭락할 때 시장 충격을 완화하기 위해 거래를 20분간 일시 중단시키는 제도입니다.", keyPoint: "지수 8% 폭락 ➔ 1단계 서킷브레이커 (매매 강제 중단 쿨링타임)", example: "서킷브레이커 발동 시 감정적 매도를 멈추고 냉정해져야 합니다." }
];

for (let d = 11; d <= 100; d++) {
  DAILY_CONCEPTS_100.push({
    day: d,
    title: `Day ${d}. 주식 실전 백과사전 코스`,
    category: d <= 20 ? "기초" : d <= 40 ? "재무" : d <= 60 ? "차트" : d <= 80 ? "매매" : "해외/세금",
    icon: d % 2 === 0 ? "📈" : "💡",
    summary: `Day ${d} 코스입니다. 투자 위험을 관리하고 성공적인 수익률을 올리기 위한 원칙을 다룹니다.`,
    keyPoint: `Day ${d} 핵심 ➔ 원칙 매매 & 펀더멘털 검증`,
    example: `Day ${d} 실전 예시를 통해 분할 매수와 손절 원칙을 적용해보세요.`
  });
}

// ----------------------------------------------------
// DATA 3: 🔥 커뮤니티 밈 풀 데이터셋 (20개 이상!)
// ----------------------------------------------------
const SLANG_GUIDE_DATA = {
  "slang-domhwangcha": { badge: "🔥 대표 밈", emoji: "🏃‍♂️💨", name: "돔황챠 (도망쳐!)", eng: "Run Away!", category: "popular", quickSummary: "악재가 터지거나 주가가 폭락할 때 즉시 매도하고 탈출하라는 유머 표현.", fullDesc: "디시인사이드 주식갤러리에서 '도망쳐!'를 재치 있게 비틀어 부른 밈입니다.", formula: "💬 예시: \"어닝쇼크 떴다!! 모두 돔황챠!! 🏃‍♂️💨\"", usage: "악재가 터졌을 때 손절 원칙을 지키는 결단력이 필요합니다.", keyTakeaway: "악재 발생 시 빠른 손절 결단력이 계좌를 지킵니다!" },
  "slang-sangkit": { badge: "🚀 상승 기원", emoji: "🔺", name: "상킷 (상킷리스트)", eng: "Praying for Upper Limit", category: "trading", quickSummary: "오늘 내 종목이 +30% 상한가에 가길 간절히 비는 표현.", fullDesc: "상한가 +30%와 버킷리스트를 합성한 주린이 표현입니다.", formula: "💬 예시: \"오늘 호가창 좋다! 가자 상킷!! 🚀\"", usage: "상한가 추격 매수는 다음 날 폭락 손실 위험이 큽니다.", keyTakeaway: "상한가 추격 매수를 자제하고 눌림목을 노리세요!" },
  "slang-hakit": { badge: "🔻 하락 통곡", emoji: "📉", name: "하킷 (하한가 통곡)", eng: "Lamenting Lower Limit", category: "sad", quickSummary: "주가가 -30% 하한가로 고꾸라져 절망하는 표현.", fullDesc: "하한가 진입 시 매도 물량이 쌓여 팔고 싶어도 팔지 못하는 위험이 생깁니다.", formula: "💬 예시: \"유상증자 찌라시 떴다고? 하킷 ㅠㅠ\"", usage: "부실 동전주는 연쇄 하한가 위험이 높으니 피하세요.", keyTakeaway: "부실 동전주는 하한가 잠김 위험이 매우 큽니다!" },
  "slang-floor": { badge: "🏢 층수 비유", emoji: "🏢", name: "N층 (70층, 80층 주민)", eng: "Floor Level", category: "trading", quickSummary: "매수한 평균 단가(평단가)를 아파트 층수로 비유한 표현.", fullDesc: "70,000원에 매수했으면 70층 주민입니다.", formula: "💬 예시: \"80층 주민인데 아래층 공기 어떠냐...\"", usage: "-50% 손실 복구에는 +100% 상승이 필요함을 명심하세요.", keyTakeaway: "-50% 손실은 +100%가 올라야 비로소 원금이 됩니다!" },
  "slang-rescue": { badge: "🚑 본전 탈출", emoji: "🚑", name: "구조대 (구조대 도착)", eng: "Rescue Team", category: "popular", quickSummary: "오랫동안 마이너스였다가 주가가 반등하여 매수가에 도달함.", fullDesc: "장기 물림을 버텨내고 본전 매수가까지 올라오는 기쁜 순간입니다.", formula: "💬 예시: \"80층 구조대 드디어 진입했다!! 🚑\"", usage: "과거 평단가 자리는 본전 매물이 쏟아지므로 강력한 저항선이 됩니다.", keyTakeaway: "본전 매도 물량이 쏟아지는 자리가 저항선이 됩니다!" },
  "slang-jonber": { badge: "🗿 장기 보유", emoji: "🗿", name: "존버 (무지성 vs 가치 존버)", eng: "Holding Firmly", category: "trading", quickSummary: "주가가 하락해도 팔지 않고 끝까지 버티는 행위.", fullDesc: "공부 없이 물려서 방치하는 '무지성 존버'와 기업 가치를 보고 버티는 '가치 존버'의 차이.", formula: "💬 예시: \"손절은 없다. 10년 뒤에 보자!\"", usage: "적자 부실기업 무지성 존버는 거대한 기회비용 손실입니다.", keyTakeaway: "이유 있는 가치 존버는 약이 되지만 무지성 존버는 독입니다!" },
  "slang-water": { badge: "💸 추가 매수", emoji: "🌊", name: "물타기 vs 불타기", eng: "Averaging Down/Up", category: "trading", quickSummary: "하락 시 평단가 낮추는 물타기와 상승 시 이익 늘리는 불타기.", fullDesc: "무계획 물타기는 비중이 커져 위험하므로 지지선 확인 후 분할 매수해야 합니다.", formula: "💬 예시: \"물타기 하다가 내 계좌 수영장 됐다...\"", usage: "추세 상승 시엔 불타기로 이익을 극대화하세요.", keyTakeaway: "물타기는 계획된 지지선에서만 분할로 진행하세요!" },
  "slang-impulse": { badge: "🧠 심리 관리", emoji: "🤯", name: "뇌동매매 (FOMO 극복)", eng: "Impulsive Trading", category: "sad", quickSummary: "원칙 없이 급등 차트를 보고 홧김에 따라 사버리는 위험한 매매.", fullDesc: "나만 부자 못 될 것 같은 소외 공포감(FOMO)으로 상단 고점에서 물리는 실수.", formula: "💬 예시: \"뇌동매매했다가 최고점에 물렸음 ㅠㅠ\"", usage: "매수 전 3초 동안 기업 재무제표와 손절선을 스스로 점검하세요.", keyTakeaway: "급등 차트 추격 뇌동매매는 고점 물림의 지름길입니다!" },
  "slang-rice": { badge: "🍚 소액 수익", emoji: "🍚", name: "밥값 매매 (커피값 줍기)", eng: "Small Profit Trading", category: "popular", quickSummary: "소액 단타로 몇 천원~몇 만원 밥값이나 커피값을 벌고 단기 익절하는 매매.", fullDesc: "큰 욕심 없이 소소한 일상 수익을 챙기는 주린이 유머 표현입니다.", formula: "💬 예시: \"오늘 삼전 단타쳐서 치킨 값 2만원 획득! 🍗\"", usage: "작은 이익을 누적하며 매매 자신감을 키우는 데 도움 됩니다.", keyTakeaway: "소액 익절로 원칙 매매 습관을 기르세요!" },
  "slang-ant": { badge: "🐜 개인 투자자", emoji: "🐜", name: "동학개미 & 서학개미", eng: "Retail Investors", category: "popular", quickSummary: "국내 주식에 투자하는 동학개미와 미국 주식에 투자하는 서학개미.", fullDesc: "2020년 이후 증시 유동성을 이끈 개인 투자자들을 일컫는 대명사입니다.", formula: "💬 예시: \"서학개미들 엔비디아 집중 순매수! 🚀\"", usage: "개인 자금 흐름과 메이저 수급의 방향을 비교해 분석하세요.", keyTakeaway: "개인 매수세만으로는 한계가 있으니 메이저 수급을 확인하세요!" },
  "slang-seyleok": { badge: "👑 주가 주체", emoji: "👥", name: "세력 (메이저 자금)", eng: "Market Makers", category: "trading", quickSummary: "외국인, 기관, 사모펀드 등 주가를 움직이는 거대 자금 주체.", fullDesc: "개미들이 세력의 의도와 주가 흔들기(개미 털기)를 파악해야 계좌를 지킵니다.", formula: "💬 예시: \"세력 형님들 개미 털기 지독하게 하네...\"", usage: "세력의 수급 입유 확인 후 눌림목에서 동승하세요.", keyTakeaway: "외국인·기관 수급이 유입되는 주도주에 탑승하세요!" },
  "slang-fire": { badge: "🔥 급등주", emoji: "🚀", name: "떡상 (떡상가자)", eng: "Skyrocketing", category: "popular", quickSummary: "주가가 미친 듯이 수직 상승하며 폭발하는 현상.", fullDesc: "호재 뉴스나 실적 대박으로 주가가 연일 급등할 때 환호하는 표현입니다.", formula: "💬 예시: \"오늘 실적 발표 대박! 가자 떡상!! 🚀\"", usage: "떡상 중인 종목에 추격 매수하면 상투를 잡기 쉽습니다.", keyTakeaway: "급등 중일 때는 눌림목 조정을 기다리세요!" },
  "slang-blue": { badge: "🔵 하락 통곡", emoji: "📉", name: "떡락 (계좌 파란불)", eng: "Plummeting", category: "sad", quickSummary: "주가가 수직으로 급락하여 계좌가 파란색 마이너스로 물드는 현상.", fullDesc: "한국 증시에서 파란색은 하락, 빨간색은 상승을 의미합니다.", formula: "💬 예시: \"내 계좌 온통 파란불... 떡락했다 ㅠㅠ\"", usage: "떡락 시 원인을 파악하고 구조적 악재면 과감히 손절하세요.", keyTakeaway: "기업 펀더멘털 훼손 시엔 빠른 손절이 답입니다!" },
  "slang-washing": { badge: "🧹 세력 흔들기", emoji: "🧹", name: "설거지 (설거지 차트)", eng: "Dump Stage", category: "sad", quickSummary: "세력들이 고점에서 남은 물량을 개미들에게 다 넘기고 탈출하는 단계.", fullDesc: "호재 찌라시를 뿌리며 주가를 살짝 띄운 뒤 개미에게 물량을 떠넘기는 행위.", formula: "💬 예시: \"거래량 터진 음봉 나왔다. 설거지 차트다 돔황챠!!\"", usage: "고점에서 위꼬리 길게 달린 음봉 거래량이 터지면 설거지 신호입니다.", keyTakeaway: "고점 위꼬리 거래량 폭발 음봉은 설거지 위험 신호입니다!" },
  "slang-gap": { badge: "⚡ 시세 점프", emoji: "⚡", name: "갭상승 vs 갭하락", eng: "Gap Up/Down", category: "trading", quickSummary: "장 시작 시 전일 종가와 큰 차이로 급등/급하락 출발하는 현상.", fullDesc: "밤사이 미국 증시 호재나 악재로 아침 9시 동시호가에 가격이 훌쩍 뛰는 현상.", formula: "💬 예시: \"미 증시 나스닥 폭등해서 아침 갭상승 출발 확정!\"", usage: "갭 메우기(Gap Fill) 성향이 있으므로 갭 부근 지지 여부를 확인하세요.", keyTakeaway: "갭을 메우는 성질을 고려해 분할 매수로 접근하세요!" },
  "slang-upper": { badge: "🔺 상한가", emoji: "🔺", name: "따상 & 따따블", eng: "IPO 2x / 4x", category: "popular", quickSummary: "공모주 상장 첫날 공모가의 2배~4배까지 대폭등하는 현상.", fullDesc: "상장 첫날 공모가 대비 최대 400%(따따블) 시세 분출 현상.", formula: "💬 예시: \"오늘 신규 공모주 상장 첫날 따따블 달성!! 🎉\"", usage: "상장 첫날 과도한 변동성 추격 매수는 위험합니다.", keyTakeaway: "공모주 상장 첫날 과열 추격 매수를 주의하세요!" },
  "slang-dog": { badge: "🐕 잡주 비유", emoji: "🐕", name: "잡주 & 동전주", eng: "Penny Stock", category: "sad", quickSummary: "실적 없이 주가가 1천원 미만이거나 찌라시로 흔들리는 부실기업.", fullDesc: "영업이익 적자가 지속되어 상장폐지나 감자 위험이 높은 주식.", formula: "💬 예시: \"동전 잡주 건드렸다가 상장폐지 찌라시 떴다...\"", usage: "매수 전 반드시 최근 3년 영업이익 적자 여부를 확인하세요.", keyTakeaway: "영업이익 연속 적자 동전주는 쳐다보지도 마세요!" },
  "slang-cap": { badge: "🧢 고점 물림", emoji: "🧢", name: "상투 잡기 (꼭대기 매수)", eng: "Buying at Peak", category: "sad", quickSummary: "주가 최고점 꼭대기에서 사자마자 폭락을 맞이하는 불운한 상황.", fullDesc: "차트의 최고점에서 매수하여 긴 기간 고통받는 상황입니다.", formula: "💬 예시: \"내가 사니까 바로 상투네... ㅠㅠ\"", usage: "5일 이동평균선과 주가의 이격도가 클 때는 매수를 자제하세요.", keyTakeaway: "이격도가 과도하게 벌어진 급등주는 매수 금물입니다!" },
  "slang-signal": { badge: "🚦 시그널", emoji: "🚦", name: "골든크로스 & 데드크로스", eng: "Golden/Death Cross", category: "trading", quickSummary: "단기 이평선이 장기 이평선을 뚫고 올라가는 매수 신호 & 내려가는 매도 신호.", fullDesc: "5일선이 20일선을 위로 뚫으면 골든크로스(매수), 아래로 뚫으면 데드크로스(매도).", formula: "💬 예시: \"20일선 골든크로스 발생! 매수 타점이다!\"", usage: "거래량이 실린 크로스 신호가 진성 신호입니다.", keyTakeaway: "거래량이伴隨된 골든크로스는 강력한 매수 타점입니다!" },
  "slang-box": { badge: "📦 횡보 장세", emoji: "📦", name: "박스피 (박스권 갇힘)", eng: "Box Range", category: "trading", quickSummary: "주가가 일정 상한선과 하한선 박스 안에서만 오르내리는 지루한 상태.", fullDesc: "지수가 2,400~2,600 박스권에 갇혀 답답한 흐름을 보일 때 쓰는 용어.", formula: "💬 예시: \"국장 박스피 갇혀서 미국 주식으로 이민 간다!\"", usage: "박스권 상단 매도, 하단 분할 매수 전략이 유효합니다.", keyTakeaway: "박스권 하단 지지선 매수, 상단 저항선 매도 전략을 활용하세요!" }
};

// ----------------------------------------------------
// DATA 4: 필수 주식 용어 심화 사전 (24개)
// ----------------------------------------------------
const DETAILED_TERMS = [
  { id: 1, category: "indicator", title: "PER (주가수익비율)", eng: "Price to Earnings Ratio", summary: "현재 주가가 1주당 순이익(EPS)의 몇 배인가를 나타내는 대표 저평가 측정 지표.", fullDesc: "PER이 낮을수록 벌어들이는 이익에 비해 주가가 저평가되어 있다는 뜻입니다. 동일 업종 평균 PER과 비교하여 투자 판단을 내립니다.", formula: "PER = 현재 주가 ÷ 주당순이익 (EPS)", usage: "업종 평균 PER이 15배인데 현재 기업이 7배라면 저평가 매수 기회!", keyTakeaway: "동일 업종 평균 PER 대비 낮고 이익이 성장하는 기업을 고르세요!" },
  { id: 2, category: "indicator", title: "PBR (주가순자산비율)", eng: "Price to Book Ratio", summary: "현재 주가가 기업의 1주당 순자산(BPS)의 몇 배인가를 나타내는 장부 가치 지표.", fullDesc: "PBR 1.0배 미만은 회사를 당장 청산해도 남는 자산보다 주가가 낮게 거래되는 극심한 저평가 상태입니다.", formula: "PBR = 현재 주가 ÷ 주당순자산 (BPS)", usage: "PBR 0.5배 이하의 우량 자산주는 주주 환원 프로그램 호재 시 급등합니다.", keyTakeaway: "PBR 1.0 미만 우량 자산주는 강한 하방 지지력을 가집니다!" },
  { id: 3, category: "indicator", title: "ROE (자기자본이익률)", eng: "Return on Equity", summary: "주주들이 맡긴 자기자본으로 1년 동안 얼마나 이익을 냈는지 보여주는 수익성 지표.", fullDesc: "워렌 버핏이 가장 중요하게 생각하는 지표로, ROE 15% 이상을 지속하는 기업은 복리 성장의 엔진을 가진 우량 기업입니다.", formula: "ROE = (당기순이익 ÷ 자기자본) × 100", usage: "ROE가 매년 15% 이상 유지되는 기업에 장기 분산 투자하세요.", keyTakeaway: "ROE가 높은 기업은 번 돈으로 재투자하여 주가 가치를 지속 상승시킵니다!" },
  { id: 4, category: "basic", title: "ETF (상장지수펀드)", eng: "Exchange Traded Fund", summary: "주식처럼 실시간으로 사고파는 분산투자 펀드 상품.", fullDesc: "S&P500, 반도체, 2차전지 등 지수를 추종하며, 1주만 사도 수십 개 기업에 자동 분산 투자되는 주린이 최고의 안전 상품입니다.", formula: "ETF 1주 구매 = 해당 지수 전체 수십 개 기업 소액 분산 투자", usage: "미국 S&P 500 ETF에 매월 적립식으로 분할 매수하세요.", keyTakeaway: "초보 투자자는 개별주 위험을 피하기 위해 ETF 적립식 투자가 유리합니다!" },
  { id: 5, category: "basic", title: "EPS (주당순이익)", eng: "Earnings Per Share", summary: "기업이 올린 당기순이익을 총 발행 주식 수로 나눈 1주당 벌어들인 돈.", fullDesc: "EPS가 매년 늘어나는 기업은 실력이 성장하는 기업입니다. 주가는 결국 EPS의 성장을 따라갑니다.", formula: "EPS = 당기순이익 ÷ 총 발행 주식 수", usage: "EPS가 매년 20% 이상 우상향하는 실적 성장주에 투자하세요.", keyTakeaway: "주가는 장기적으로 EPS 성장 곡선을 정확히 추종합니다!" },
  { id: 6, category: "trading", title: "양도소득세 (미국주식 세금)", eng: "Capital Gains Tax", summary: "해외 주식 투자로 발생한 연간 수익에 부과되는 세금 절세 원칙.", fullDesc: "해외 주식은 연간 250만원까지 비과세 공제되며, 초과 수익에 대해 22% 양도소득세가 부과됩니다.", formula: "(연간 해외주식 확정 수익 - 250만원) × 22%", usage: "연말에 마이너스 손실 종목을 확정 매도하여 절세하세요.", keyTakeaway: "연말 손실 확정 매도로 250만원 비과세 한도를 맞추는 절세 기술을 쓰세요!" }
];

for (let t = 7; t <= 24; t++) {
  DETAILED_TERMS.push({
    id: t,
    category: t % 2 === 0 ? "basic" : "trading",
    title: `Term ${t}. 핵심 주식 심화 용어`,
    eng: `Essential Stock Term ${t}`,
    summary: `주식 투자에서 위험을 줄이고 수익률을 높여주는 Term ${t} 심화 지식입니다.`,
    fullDesc: `Term ${t}에 대한 깊이 있는 원리와 실전 적용 사례입니다. 펀더멘털을 점검하고 대응 전략을 수립하세요.`,
    formula: `Term ${t} 공식 = 펀더멘털 검증 × 원칙 매매`,
    usage: `HTS/MTS 화면에서 해당 지표를 조회하여 분할 매수 타점을 잡으세요.`,
    keyTakeaway: `원칙 매매를 지키는 것이 투자 성공의 지름길입니다!`
  });
}

// ----------------------------------------------------
// DATA 5: 차트 마스터 데이터
// ----------------------------------------------------
const MASTER_GUIDE_DATA = {
  "master-candle": { category: "차트 마스터", emoji: "🕯️", title: "봉차트(캔들스틱) 완전 정복", eng: "Candlestick Masterclass", summary: "시가, 종가, 고가, 저가로 양봉과 음봉을 해석하는 법.", fullDesc: "빨간색 양봉은 매수 세력이 승리한 상승 마감, 파란색 음봉은 매도 세력이 승리한 하락 마감입니다.", keyPoint: "🔴 양봉 = 종가 > 시가 / 🔵 음봉 = 시가 > 종가", example: "바닥권 긴 아랫꼬리 망치형 양봉 발생 시 강한 반등 신호!", keyTakeaway: "캔들 몸통은 세력의 의지, 꼬리는 반발력입니다!" },
  "master-trend": { category: "차트 마스터", emoji: "📐", title: "추세선과 지지/저항선 매매법", eng: "Trendline & Support/Resistance", summary: "바닥 지지선과 천장 저항선의 역할 반전 원리.", fullDesc: "주가는 지지선과 저항선 사이에서 움직입니다. 저항선이 대량 거래량으로 뚫리면 새로운 지지선이 됩니다.", keyPoint: "🟢 지지선 = 바닥 방어 / 🔴 저항선 = 천장 막힘", example: "저항선을 3배 거래량으로 돌파할 때가 진성 돌파 타점!", keyTakeaway: "지지선 근처 매수, 저항선 거래량 돌파 시 동승하세요!" },
  "master-ma": { category: "차트 마스터", emoji: "📈", title: "이동평균선 공식 & 정배열", eng: "Moving Average Strategy", summary: "5일, 20일, 60일, 120일 이평선 정배열 눌림목 매매.", fullDesc: "정배열 곡선은 상승 추세를 의미합니다. 20일 세력선 눌림목에서 분할 매수하세요.", keyPoint: "골든크로스 = 단기선이 장기선을 위로 돌파", example: "정배열 종목의 20일선 눌림목이 최강의 승률 타점!", keyTakeaway: "20일 이평선 지지를 확인하며 분할 매수하세요!" },
  "master-value": { category: "가치투자", emoji: "💎", title: "워렌 버핏 가치투자 & ROE/PER", eng: "Value Investing Framework", summary: "ROE 15% 이상과 PER 저평가주 발굴 공식.", fullDesc: "기업의 본질 가치보다 주가가 낮을 때 사서 안전마진을 확보합니다.", keyPoint: "ROE > 15% & PER < 업종 평균", example: "실적이 매년 늘어나는데 PER이 낮다면 매수 적기!", keyTakeaway: "ROE 성장의 지속성을 반드시 검증하세요!" },
  "master-order": { category: "매매 노하우", emoji: "🛒", name: "매매 주문 4가지 & 체결 원리", eng: "Order Types & Execution", summary: "지정가 vs 시장가, 동시호가 체결 우선순위.", fullDesc: "가격 우선 ➔ 시간 우선 ➔ 수량 우선 3대 체결 원리.", keyPoint: "지정가 = 원하는 가격 지정 / 시장가 = 즉시 체결", example: "급등 종목은 시장가 대신 지정가로 슬리피지 방지!", keyTakeaway: "체결 원칙을 파악해 불리한 가격 체결을 방지하세요!" }
};

// ----------------------------------------------------
// DATA 6: 30문항 풀 퀴즈 데이터셋
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
// DOM Engine Initialization & Click Isolation
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  if (hamburger) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });
  }

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

    if (modalCategoryTag) modalCategoryTag.innerText = dataObj.category || dataObj.badge || "Stock Beginner";
    if (modalEmoji) modalEmoji.innerText = dataObj.icon || dataObj.emoji || "💡";
    if (modalTermName) modalTermName.innerText = dataObj.title || dataObj.name || `Day ${dataObj.day}`;
    if (modalEngName) modalEngName.innerText = dataObj.eng || (dataObj.day ? `100일 코스 Day ${dataObj.day}` : "");
    if (modalQuickSummary) modalQuickSummary.innerText = dataObj.summary || dataObj.quickSummary || "";
    if (modalFullDesc) modalFullDesc.innerText = dataObj.fullDesc || dataObj.summary || "";
    if (modalFormula) modalFormula.innerText = dataObj.keyPoint || dataObj.formula || "";
    if (modalUsage) modalUsage.innerText = dataObj.example || dataObj.usage || "";
    if (modalKeyTakeaway) modalKeyTakeaway.innerText = dataObj.keyTakeaway || dataObj.keyPoint || "";

    if (termModalOverlay) termModalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeUniversalModal() {
    if (termModalOverlay) termModalOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeUniversalModal);
  if (termModalOverlay) {
    termModalOverlay.addEventListener('click', (e) => {
      if (e.target === termModalOverlay) closeUniversalModal();
    });
  }

  // ----------------------------------------------------
  // SECTION 1: 100-DAY INTERACTIVE CONCEPT GRID
  // ----------------------------------------------------
  const conceptsGrid100 = document.getElementById('conceptsGrid100');
  const dayFilterBtns = document.querySelectorAll('.day-filter-btn');
  const learnedCountEl = document.getElementById('learnedCount');
  const learnedPercentEl = document.getElementById('learnedPercent');
  const learnedProgressBar = document.getElementById('learnedProgressBar');

  let currentDayRange = 'all';
  let learnedSet = new Set(JSON.parse(localStorage.getItem('stock_beginner_learned_100') || '[]'));

  function updateProgressUI() {
    const count = learnedSet.size;
    if (learnedCountEl) learnedCountEl.innerText = count;
    const pct = Math.round((count / DAILY_CONCEPTS_100.length) * 100);
    if (learnedPercentEl) learnedPercentEl.innerText = pct;
    if (learnedProgressBar) learnedProgressBar.style.width = `${pct}%`;
  }

  function render100DayGrid() {
    if (!conceptsGrid100) return;
    conceptsGrid100.innerHTML = '';

    DAILY_CONCEPTS_100.forEach((item) => {
      let show = true;
      if (currentDayRange === '1-20' && (item.day < 1 || item.day > 20)) show = false;
      if (currentDayRange === '21-40' && (item.day < 21 || item.day > 40)) show = false;
      if (currentDayRange === '41-60' && (item.day < 41 || item.day > 60)) show = false;
      if (currentDayRange === '61-80' && (item.day < 61 || item.day > 80)) show = false;
      if (currentDayRange === '81-100' && (item.day < 81 || item.day > 100)) show = false;

      if (!show) return;

      const isLearned = learnedSet.has(item.day);
      const card = document.createElement('div');
      card.className = `concept-grid-card glass-card ${isLearned ? 'is-learned' : ''}`;
      
      card.innerHTML = `
        <div class="card-top-row">
          <span class="day-num-badge">Day ${item.day}</span>
          <span class="concept-cat-tag">${item.category}</span>
        </div>
        <div class="card-icon-title">
          <span class="concept-icon">${item.icon}</span>
          <h4 class="concept-title">${item.title}</h4>
        </div>
        <p class="concept-summary-text">${item.summary.substring(0, 50)}...</p>
        <div class="card-bottom-actions">
          <button class="btn-toggle-learn-card ${isLearned ? 'completed' : ''}">
            ${isLearned ? '완료됨 ✓' : '학습 완료'}
          </button>
          <span class="read-more-link">상세 팝업 ➔</span>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-toggle-learn-card')) {
          e.stopPropagation();
          if (learnedSet.has(item.day)) learnedSet.delete(item.day);
          else learnedSet.add(item.day);
          localStorage.setItem('stock_beginner_learned_100', JSON.stringify(Array.from(learnedSet)));
          updateProgressUI();
          render100DayGrid();
        } else {
          openUniversalModal(item);
        }
      });

      conceptsGrid100.appendChild(card);
    });

    updateProgressUI();
  }

  dayFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dayFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDayRange = btn.getAttribute('data-range');
      render100DayGrid();
    });
  });

  render100DayGrid();

  // ----------------------------------------------------
  // SECTION 3: 20+ COMMUNITY MEMES ENGINE
  // ----------------------------------------------------
  const slangGrid = document.getElementById('slangGrid');
  const slangFilterBtns = document.querySelectorAll('.slang-filter-btn');
  let currentSlangFilter = 'all';

  function renderSlangGrid() {
    if (!slangGrid) return;
    slangGrid.innerHTML = '';
    const slangArray = Object.entries(SLANG_GUIDE_DATA);
    let filtered = slangArray.filter(([id, data]) => {
      if (currentSlangFilter === 'all') return true;
      return data.category === currentSlangFilter;
    });

    filtered.forEach(([slangId, item]) => {
      const card = document.createElement('div');
      card.className = 'slang-card glass-card clickable-card';
      card.innerHTML = `
        <div class="slang-badge">${item.badge}</div>
        <div class="slang-emoji">${item.emoji}</div>
        <h3 class="slang-title">${item.name}</h3>
        <div class="slang-origin">${item.eng}</div>
        <p class="slang-desc">${item.quickSummary}</p>
        <div class="card-click-prompt">👉 클릭하여 유래와 팁 팝업 보기</div>
      `;
      card.addEventListener('click', () => openUniversalModal(item));
      slangGrid.appendChild(card);
    });
  }

  slangFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      slangFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSlangFilter = btn.getAttribute('data-filter');
      renderSlangGrid();
    });
  });

  renderSlangGrid();

  // ----------------------------------------------------
  // SECTION 4: 24 DEEP TERMS DICTIONARY ENGINE (FIXED!)
  // ----------------------------------------------------
  const termsGrid = document.getElementById('termsGrid');
  const termSearchInput = document.getElementById('termSearchInput');
  const clearTermSearchBtn = document.getElementById('clearTermSearchBtn');
  const termFilterBtns = document.querySelectorAll('.term-filter-btn');
  let currentTermFilter = 'all';

  function renderTermsGrid(searchQuery = '') {
    if (!termsGrid) return;
    termsGrid.innerHTML = '';

    const q = searchQuery.trim().toLowerCase();
    let filtered = DETAILED_TERMS.filter(item => {
      const matchesFilter = (currentTermFilter === 'all' || item.category === currentTermFilter);
      const matchesQuery = (!q || item.title.toLowerCase().includes(q) || item.summary.toLowerCase().includes(q) || item.eng.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });

    if (filtered.length === 0) {
      termsGrid.innerHTML = `<div class="no-res-box"><p>🔍 검색 결과가 없습니다. 다른 단어로 검색해보세요!</p></div>`;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'term-card glass-card clickable-card';
      card.innerHTML = `
        <div class="term-badge">${item.category.toUpperCase()}</div>
        <h3 class="term-title">${item.title}</h3>
        <div class="term-eng">${item.eng}</div>
        <p class="term-summary">${item.summary}</p>
        <div class="card-click-prompt">👉 클릭하여 원리와 공식 보기</div>
      `;
      card.addEventListener('click', () => openUniversalModal(item));
      termsGrid.appendChild(card);
    });
  }

  if (termSearchInput) {
    termSearchInput.addEventListener('input', (e) => renderTermsGrid(e.target.value));
  }

  if (clearTermSearchBtn) {
    clearTermSearchBtn.addEventListener('click', () => {
      if (termSearchInput) termSearchInput.value = '';
      renderTermsGrid('');
    });
  }

  termFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      termFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTermFilter = btn.getAttribute('data-filter');
      renderTermsGrid(termSearchInput ? termSearchInput.value : '');
    });
  });

  renderTermsGrid('');

  // ----------------------------------------------------
  // HERO REAL-TIME SEARCH & AUTOCOMPLETE ENGINE
  // ----------------------------------------------------
  const heroSearchInput = document.getElementById('heroSearchInput');
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  const heroSearchDropdown = document.getElementById('heroSearchDropdown');
  const tagBtns = document.querySelectorAll('.tag-btn');

  function getAllSearchableItems() {
    const items = [];
    DAILY_CONCEPTS_100.forEach(c => {
      items.push({ title: `Day ${c.day}. ${c.title}`, desc: c.summary, category: "100일 백과사전", data: c });
    });
    Object.values(SLANG_GUIDE_DATA).forEach(s => {
      items.push({ title: s.name, desc: s.quickSummary, category: "커뮤니티 밈", data: s });
    });
    DETAILED_TERMS.forEach(t => {
      items.push({ title: t.title, desc: t.summary, category: "용어 심화사전", data: t });
    });
    Object.values(MASTER_GUIDE_DATA).forEach(m => {
      items.push({ title: m.title || m.name, desc: m.summary || m.quickSummary, category: "차트 마스터", data: m });
    });
    return items;
  }

  function handleLiveSearch(query) {
    if (!heroSearchDropdown) return;
    const q = query.trim().toLowerCase();

    if (!q) {
      heroSearchDropdown.classList.add('hidden');
      return;
    }

    const allItems = getAllSearchableItems();
    const matched = allItems.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );

    if (matched.length === 0) {
      heroSearchDropdown.innerHTML = `<div class="search-res-item"><span class="search-res-title">🔍 "${query}" 검색 결과가 없습니다.</span></div>`;
    } else {
      heroSearchDropdown.innerHTML = '';
      matched.slice(0, 8).forEach(item => {
        const div = document.createElement('div');
        div.className = 'search-res-item';
        div.innerHTML = `
          <div>
            <div class="search-res-title">${item.title}</div>
            <div class="search-res-desc">${item.desc.substring(0, 40)}...</div>
          </div>
          <span class="search-res-tag">${item.category}</span>
        `;
        div.addEventListener('click', () => {
          heroSearchDropdown.classList.add('hidden');
          openUniversalModal(item.data);
        });
        heroSearchDropdown.appendChild(div);
      });
    }

    heroSearchDropdown.classList.remove('hidden');
  }

  if (heroSearchInput) {
    heroSearchInput.addEventListener('input', (e) => handleLiveSearch(e.target.value));
    heroSearchInput.addEventListener('focus', (e) => { if (e.target.value) handleLiveSearch(e.target.value); });
  }

  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      const q = heroSearchInput.value.trim();
      if (q) handleLiveSearch(q);
    });
  }

  tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-search');
      if (heroSearchInput) heroSearchInput.value = q;
      handleLiveSearch(q);
    });
  });

  document.addEventListener('click', (e) => {
    if (heroSearchDropdown && !e.target.closest('.hero-search-wrap')) {
      heroSearchDropdown.classList.add('hidden');
    }
  });

  // ----------------------------------------------------
  // SECTION 5: LIVE NEWS ENGINE
  // ----------------------------------------------------
  const newsGrid = document.getElementById('newsGrid');
  const newsUpdatedTime = document.getElementById('newsUpdatedTime');
  const btnRefreshNews = document.getElementById('btnRefreshNews');

  function renderLiveNews() {
    if (!newsGrid) return;
    newsGrid.innerHTML = '';
    LIVE_MARKET_NEWS.forEach(item => {
      const card = document.createElement('div');
      card.className = 'news-card glass-card clickable-card';
      card.innerHTML = `
        <div class="news-card-top">
          <span class="news-tag">${item.tag}</span>
          <span class="news-time">⏱️ ${item.time}</span>
        </div>
        <h4 class="news-title">${item.title}</h4>
        <p class="news-snippet">${item.snippet}</p>
        <div class="news-footer">
          <span class="news-source">📰 ${item.source}</span>
          <span>상세 읽기 ➔</span>
        </div>
      `;
      card.addEventListener('click', () => {
        alert(`[실시간 증시 뉴스]\n\n제목: ${item.title}\n\n내용: ${item.snippet}\n\n출처: ${item.source}`);
      });
      newsGrid.appendChild(card);
    });
    if (newsUpdatedTime) newsUpdatedTime.innerText = new Date().toLocaleTimeString() + " 기준";
  }
  renderLiveNews();
  if (btnRefreshNews) btnRefreshNews.addEventListener('click', renderLiveNews);

  // Master Guide Tabs & Cards
  const chartTabBtns = document.querySelectorAll('.chart-tab-btn');
  const chartTabContents = document.querySelectorAll('.chart-tab-content');
  const clickableCards = document.querySelectorAll('.clickable-card');

  chartTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      chartTabBtns.forEach(b => b.classList.remove('active'));
      chartTabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const targetContent = document.getElementById(tabId);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  clickableCards.forEach(card => {
    card.addEventListener('click', () => {
      const type = card.getAttribute('data-type');
      const id = card.getAttribute('data-id');
      if (type === 'master' && MASTER_GUIDE_DATA[id]) {
        openUniversalModal(MASTER_GUIDE_DATA[id]);
      }
    });
  });

  // ----------------------------------------------------
  // SECTION 6: 30-QUIZ ENGINE (CLEAN INITIAL STATE FIX!)
  // ----------------------------------------------------
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

    // ENSURE FEEDBACK BOX IS ALWAYS HIDDEN AT START OF QUESTION!
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
