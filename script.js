/* ================================================
   Stock Beginner - Master Script Engine
   (100-Day Encyclopedia + Live News + 20+ Memes Filter & Expander + 30-Question Fixed Quiz Engine)
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
// DATA 2: 🔥 커뮤니티 밈 & 슬랭 백과사전 (20개)
// ----------------------------------------------------
const SLANG_GUIDE_DATA = {
  "slang-domhwangcha": { badge: "🔥 대표 커뮤니티 밈", emoji: "🏃‍♂️💨", name: "돔황챠 (도망쳐!)", eng: "Run Away!", category: "popular", quickSummary: "악재가 터지거나 차트가 고꾸라질 때 주식을 즉시 팔고 탈출하라는 유머 밈.", fullDesc: "디시인사이드 주식갤러리 등에서 '도망쳐!'를 재치 있게 비틀어 부른 대표적인 밈입니다. 기업 횡령, 어닝 쇼크 등 대형 악재가 터졌을 때 쓰입니다.", formula: "💬 대화 예시: \"OO전자 어닝쇼크 떴다!! 돔황챠!! 🏃‍♂️💨\"", usage: "💡 레슨: 악재 발생 시 손절 원칙(Stop-Loss)을 지키는 결단력이 필요합니다.", keyTakeaway: "악재 발생 시 손절하는 결단력이 계좌를 지킵니다!" },
  "slang-sangkit": { badge: "🚀 상승 기원", emoji: "🔺", name: "상킷 (상킷리스트)", eng: "Praying for Upper Limit", category: "trading", quickSummary: "내 종목이 오늘 +30% 상한가에 가기를 간절히 기도하는 응원 표현.", fullDesc: "상한가 +30%와 버킷리스트를 합성한 말로 아침 동시호가 시간에 자주 쓰입니다.", formula: "💬 대화 예시: \"오늘 호가창 실화냐? 가자 삼전 상킷!! 🚀🚀\"", usage: "상한가 부근 추격 매수는 다음 날 갭하락 손실 위험이 큽니다.", keyTakeaway: "상한가 추격 매수를 조심하고 안정적인 눌림목 타점을 잡으세요!" },
  "slang-hakit": { badge: "🔻 하락 통곡", emoji: "📉", name: "하킷 (하한가 통곡)", eng: "Lamenting Lower Limit", category: "sad", quickSummary: "주가가 연속 폭락하여 -30% 하한가로 고꾸라지는 절망적인 표현.", fullDesc: "하한가 도달 시 매수 잔량이 0이 되어 팔고 싶어도 팔지 못하는 체결 잠김 위험이 있습니다.", formula: "💬 대화 예시: \"유상증자 찌라시 떴다고? 하킷 직전이다 ㅠㅠ\"", usage: "부실 동전주는 하한가 연쇄 위험이 있으니 피하세요.", keyTakeaway: "부실 동전주는 하한가 잠김 위험이 높으니 피하세요!" },
  "slang-floor": { badge: "🏢 층수 비유", emoji: "🏢", name: "N층 (70층, 80층 주민)", eng: "Average Price Floor Level", category: "trading", quickSummary: "내가 주식을 사들인 평균 매수 단가(평단가)를 아파트 층수로 비유한 표현.", fullDesc: "70,000원에 매수했으면 70층 주민, 80,000원에 매수했으면 80층 주민입니다.", formula: "💬 대화 예시: \"80층 주민인데 바람이 차다... 구조대 언제 오냐?\"", usage: "-50% 손실 복구를 위해서는 +100% 상승이 필요하다는 수치를 기억하세요.", keyTakeaway: "-50% 손실은 +100%가 올라야 원금이 됩니다!" },
  "slang-rescue": { badge: "🚑 본전 탈출", emoji: "🚑", name: "구조대 (구조대 도착)", eng: "Rescue Team Arriving", category: "popular", quickSummary: "고점에 물려 오랫동안 마이너스 손실 상태였는데, 주가가 반등하여 매수가에 도달함.", fullDesc: "오랜 침체기를 견뎌내고 내 평단가 단가까지 주가가 올라오는 기쁜 순간입니다.", formula: "💬 대화 예시: \"드디어 80층 구조대 진입했다!! 본전 탈출한다!! 🚑\"", usage: "과거 고점 평단가 자리엔 본전 매도 물량이 쏟아지므로 저항선이 됩니다.", keyTakeaway: "본전 매도 물량이 쏟아지는 자리가 강력한 저항선이 됩니다!" },
  "slang-jonber": { badge: "🗿 장기 버티기", emoji: "🗿", name: "존버 (무지성 vs 가치 존버)", eng: "Holding Through Drawdowns", category: "trading", quickSummary: "주가가 하락해도 계좌를 닫아두고 끝까지 팔지 않으며 견뎌내는 행위.", fullDesc: "공부 없이 물려서 방치하는 '무지성 존버'와 기업 가치를 믿고 기다리는 '가치 존버'의 차이.", formula: "💬 대화 예시: \"손절은 없다. 10년 뒤 승리할 때까지 무한 존버간다!\"", usage: "적자 부실기업을 무지성 존버하는 것은 거대한 기회비용 손실입니다.", keyTakeaway: "이유 있는 가치 존버는 약이 되지만, 무지성 존버는 독이 됩니다!" },
  "slang-water": { badge: "💸 추가 매수", emoji: "🌊", name: "물타기 vs 불타기", eng: "Averaging Down vs Up", category: "trading", quickSummary: "하락 시 평단가 낮추는 물타기와 상승 시 이익 늘리는 불타기.", fullDesc: "떨어지는 칼날 잡기식 물타기는 비중이 과도해져 위험하며, 지지선 확정 후 분할 물타기가 정석입니다.", formula: "💬 대화 예시: \"물타기 계속하다가 내 계좌 물바다 됐다...\"", usage: "수익권 진입 후 추세 확정 시 불타기로 이익을 극대화하세요.", keyTakeaway: "물타기는 계획된 지지선에서만 진행하고, 추세 상승 시엔 불타기를 노리세요!" },
  "slang-impulse": { badge: "🧠 심리 관리", emoji: "🤯", name: "뇌동매매 (FOMO 극복)", eng: "Impulsive Trading & FOMO", category: "sad", quickSummary: "원칙 없이 남의 말이나 급등 차트를 보고 홧김에 따라 사는 위험한 행동.", fullDesc: "나만 부자 못 될 것 같은 소외 공포감(FOMO)으로 급등 꼭대기에서 사버리는 오류.", formula: "💬 대화 예시: \"뇌동매매했다가 최고점에 물렸음 ㅠㅠ\"", usage: "매수 전 3초 동안 기업 재무제표와 손절선을 스스로 점검하세요.", keyTakeaway: "급등 차트 추격 뇌동매매는 고점 물림의 지름길입니다!" },
  "slang-ttok": { badge: "🐂 주가 급변동", emoji: "💥", name: "떡상 & 떡락", eng: "Huge Surge & Crash", category: "popular", quickSummary: "수직 급등하는 떡상과 수직 급락하는 떡락 현상.", fullDesc: "호재 발생 시 떡상, 악재 발생 시 떡락 현상이 연출됩니다.", formula: "💬 대화 예시: \"어닝 서프라이즈 떴다! 오늘 주가 떡상각 🚀\"", usage: "떡상엔 탐욕을 경계하고 떡락엔 공포를 이겨내는 평정심이 핵심입니다.", keyTakeaway: "급변동 시 탐욕과 공포를 제어하는 평정심을 유지하세요!" },
  "slang-heugwoo": { badge: "🐮 흑우 피하기", emoji: "🐮", name: "흑우 (호구 투자자)", eng: "Naive Investor Meme", category: "sad", quickSummary: "세력의 찌라시나 호재 루머에 낚여 꼭대기에서 물량을 받아주는 투자자.", fullDesc: "호구를 재치 있게 부르는 말로 남의 말만 믿고 사서 세력 설거지 물량을 받는 불쌍한 상태.", formula: "💬 대화 예시: \"또 찌라시에 낚여서 물렸냐? 완전 흑우 됐네...\"", usage: "타인의 주식 추천 소문만 믿고 사지 말고 스스로 분석하는 습관을 기르세요.", keyTakeaway: "스스로 공부하여 세력의 흑우가 되지 마세요!" },
  "slang-seolgeo": { badge: "🧼 세력 털기", emoji: "🧼", name: "설거지 (세력 물량 털기)", eng: "Pump and Dump Wash Sale", category: "trading", quickSummary: "세력들이 주가를 폭등시킨 후 개미들에게 물량을 털어넘기고 떠나는 현상.", fullDesc: "거래량이 사상 최대로 터지면서 위꼬리가 길게 달리는 음봉 차트가 대표적입니다.", formula: "💬 대화 예시: \"뉴스 뜨고 급락하는 거 보니 세력 설거지 끝났네...\"", usage: "급등 후 위꼬리 장대음봉이 발생하면 절대 주우러 들어가지 마세요.", keyTakeaway: "위꼬리가 길게 달린 급등 후 음봉은 세력 설거지 신호입니다!" },
  "slang-seohak": { badge: "🌐 주체 분류", emoji: "🐜", name: "동학개미 vs 서학개미", eng: "Domestic vs Overseas Individual", category: "subject", quickSummary: "국내 주식에 투자하는 개인을 동학개미, 미국 주식에 투자하는 개인을 서학개미라 부름.", fullDesc: "증시에 대거 유입된 개인 투자자 군단을 비유한 친숙한 밈 용어입니다.", formula: "💬 대화 예시: \"서학개미들이 테슬라와 엔비디아를 집중 순매수했습니다.\"", usage: "개인 투자자들의 수급 집결지는 시장의 거대한 파동을 형성합니다.", keyTakeaway: "스스로 공부하는 똑똑한 개인 투자자가 됩시다!" },
  "slang-jupho": { badge: "👑 메이저 세력", emoji: "👑", name: "주포 (세력 / 메이저)", eng: "Market Maker Operator", category: "subject", quickSummary: "해당 종목의 주가를 끌어올리거나 내리는 거대한 자금주(기관/외국인).", fullDesc: "종목마다 주가를 관리하고 차트를 만들어가는 주도 세력을 주포라고 부릅니다.", formula: "💬 대화 예시: \"오늘 주포가 차트 예쁘게 20일선에 안착시켰네!\"", usage: "주포 세력의 매집 거래량과 이평선 안착 흔적을 추적하세요.", keyTakeaway: "주포 세력의 흔적(거래량과 수급)을 추적하세요!" },
  "slang-yesu": { badge: "💳 계좌 기초", emoji: "💵", name: "예수금 vs 증거금", eng: "Deposit Money vs Margin", category: "trading", quickSummary: "주식을 사기 위해 증권 계좌에 입금해 둔 대기 현금이 예수금입니다.", fullDesc: "주식 거래 결제는 T+2일 소요되며, 주식을 살 때 계약금으로 묶이는 돈이 증거금입니다.", formula: "💬 대화 예시: \"예수금 다 털어서 100% 매수 완료했다!\"", usage: "예수금을 100% 다 쓰지 말고 항상 20~30%는 현금 대기 자금으로 남겨두세요.", keyTakeaway: "예수금 일부는 항상 현금으로 보유하여 기회를 노리세요!" },
  "slang-jeomsang": { badge: "⚡ 갭 매매", emoji: "⚡", name: "점상 (점상한가) vs 점하", eng: "Gap-up Limit-up", category: "trading", quickSummary: "장 시작 9시 정각 동시호가부터 바로 +30% 상한가 점으로 찍혀서 시작하는 호재 현상.", fullDesc: "매수 물량이 워낙 많아 사고 싶어도 사지 못하는 폭발 상태입니다.", formula: "💬 대화 예시: \"바이오 임상 3상 성공 공시 뜨더니 오늘 점상 찍었네!!\"", usage: "점상한가 종목은 매수 잔량이 풀리는 날이 세력 물량 털기 시점이 될 수 있습니다.", keyTakeaway: "점상한가 문이 열리는 날 이익 실현을 검토하세요!" },
  "slang-ttattable": { badge: "🎉 IPO 밈", emoji: "🎉", name: "따따블 (+400% 상한가)", eng: "400% IPO Surge", category: "popular", quickSummary: "공모주가 상장 첫날 공모가 대비 4배(+400%)까지 폭등하는 신조어.", fullDesc: "상장 첫날 최대 400%까지 주가가 오를 수 있게 된 개편 제도 수혜.", formula: "💬 대화 예시: \"오늘 공모주 상장 첫날 따따블 가자!!\"", usage: "따따블 기대로 무조건 공모주를 쫓아가면 상장 첫날 고점 물림 위험이 큽니다.", keyTakeaway: "공모주 상장 첫날 변동성이 극심하므로 냉정하게 대응하세요!" },
  "slang-panic": { badge: "😰 투매 현상", emoji: "😰", name: "패닉셀 (Panic Selling)", eng: "Panic Selling at Bottoms", category: "sad", quickSummary: "공포 찌라시가 쏟아질 때 홧김에 바닥 꼭대기에서 투매해 버리는 현상.", fullDesc: "남들이 팔 때 공포에 질려 가장 최저가에서 털어버리는 감정적 오류입니다.", formula: "💬 대화 예시: \"아침에 보고 패닉셀했더니 바로 반등하네 ㅠㅠ\"", usage: "폭락장에서 패닉셀하지 마시고 계좌를 잠시 덮고 펀더멘털을 재점검하세요.", keyTakeaway: "남들이 패닉셀할 때가 바닥 반등 타점인 경우가 많습니다!" }
};

// MASTER GUIDE & DAILY CONCEPTS DATA (Existing 100-Day dataset)
const MASTER_GUIDE_DATA = {
  "master-candle": { badge: "차트 기초 마스터", emoji: "🕯️", name: "봉차트(캔들스틱) 완전 정복 마스터 클래스", eng: "Japanese Candlestick Chart Analysis", quickSummary: "18세기 일본 쌀 상인 혼마 무네히사가 개발한 매수/매도 심리의 결집체입니다.", fullDesc: "캔들스틱(봉차트)은 지정된 시간 동안 형성된 [시가, 종가, 고가, 저가] 4가지 핵심 가격을 양초 모양으로 시각화한 차트입니다.", formula: "🔴 양봉 = 상승 마감 / 🔵 음봉 = 하락 마감 / 망치형 = 바닥 반등 신호", usage: "바닥권에서 긴 아랫꼬리 망치형 양봉 발생 시 분할 매수 타점!", keyTakeaway: "몸통 크기는 세력의 의지, 꼬리의 길이는 반발력을 나타냅니다!" },
  "master-trend": { badge: "추세 분석 마스터", emoji: "📐", name: "추세선 & 지지/저항선 매매 법칙", eng: "Trendline & Support/Resistance Technical Strategy", quickSummary: "주가는 지지선과 저항선 사이에서 파동을 그리며 움직입니다.", fullDesc: "지지선은 바닥 방어선, 저항선은 천장 막힘선입니다. 저항선이 강하게 뚫리면 새로운 지지선으로 역할 반전 됩니다.", formula: "상승 추세선 = 저점 연결 / 하락 추세선 = 고점 연결", usage: "저항선을 거래량이 2~3배 터지며 뚫을 때가 진짜 돌파입니다.", keyTakeaway: "지지선 근처에서 사고 저항선 거래량 돌파 시 탑승하세요!" },
  "master-ma": { badge: "이평선 마스터", emoji: "📈", name: "이동평균선(이평선) 공식 & 정배열 분석", eng: "Moving Average & Golden Cross Mechanics", quickSummary: "지난 N일 동안의 평균 주가를 연결한 곡선입니다.", fullDesc: "5일(생명선), 20일(세력선), 60일(수급선), 120일(경기선). 정배열은 대세 상승 전형 패턴입니다.", formula: "골든크로스 = 단기선이 장기선을 위로 돌파", usage: "정배열 종목이 20일선까지 조정받을 때가 눌림목 매수 타점!", keyTakeaway: "정배열 종목의 20일선 눌림목을 노리는 것이 최강의 승률 전략입니다!" },
  "master-pattern": { badge: "차트 패턴 마스터", emoji: "🔺", name: "차트 패턴 분석 (W자 이중바닥 & M자 헤드앤숄더)", eng: "Chart Patterns & Target Projection", quickSummary: "과거 반복된 차트 문양으로 주가 목표가를 계산합니다.", fullDesc: "W자 이중바닥은 강력 바닥 확인, M자 헤드앤숄더는 고점 하락 전환 신호입니다.", formula: "W자 목표가 = 목라인 + (목라인 - 바닥가격)", usage: "목라인(Neckline)을 거래량 실려 뚫는 순간을 확인하고 매수하세요.", keyTakeaway: "패턴이 완벽히 완성되고 목라인을 뚫는 순간 매매하세요!" },
  "master-indicator": { badge: "보조지표 마스터", emoji: "📊", name: "거래량 분석 & RSI / MACD 보조지표", eng: "Volume Analysis & Technical Indicators", quickSummary: "거래량과 수학적 지표로 매매 신호를 포착합니다.", fullDesc: "RSI 70 이상 과매수(매도), 30 이하 과매도(매수). 주가와 지표 불일치는 다이버전스 하락 경고.", formula: "RSI = 100 - [100 ÷ (1 + RS)]", usage: "볼린저 밴드 스퀴즈 후 상한 선 돌파 시 급등 출발!", keyTakeaway: "거래량 + RSI 30/70 + 이평선을 조합하여 검증하세요!" },
  "master-order": { badge: "매매 주문 마스터", emoji: "🛒", name: "매매 주문의 4가지 종류 & HTS 체결 팁", eng: "Stock Order Types & Slippage Prevention", quickSummary: "지정가, 시장가, 조건부 지정가, 시간외 매매의 활용법.", fullDesc: "지정가는 가격 보장, 시장가는 속도 보장. 호가가 얇은 소형주는 지정가를 사용하세요.", formula: "급락 긴급 손절 = 시장가 / 평소 매매 = 지정가", usage: "슬리피지 손실 방지를 위해 소형주는 지정가 주문을 사용하세요.", keyTakeaway: "평소엔 지정가를 기본으로 쓰되 긴급 시에만 시장가를 선택하세요!" },
  "master-principles": { badge: "체결 원칙 마스터", emoji: "⚙️", name: "매매 체결의 3대 원칙 & 동시호가 원리", eng: "3 Execution Principles & Call Auction Mechanics", quickSummary: "가격 우선 ➔ 시간 우선 ➔ 수량 우선 체결 순서.", fullDesc: "08:30~09:00 동시호가 시가 단일가 형성 메커니즘.", formula: "가격 우선 ➔ 시간 우선 ➔ 수량 우선 3단계", usage: "동시호가 갭상승 시 수량 많은 대형 주문이 우선 배정됩니다.", keyTakeaway: "3대 체결 원칙을 이해하면 호가창 움직임이 보입니다!" },
  "master-value": { badge: "가치투자 마스터", emoji: "💎", name: "워렌 버핏의 가치투자 & ROE/PER/PBR 저평가 발굴법", eng: "Value Investing Framework & ROE Screening", quickSummary: "기업 본질 가치보다 싸게 사서 안전마진을 확보합니다.", fullDesc: "ROE 15% 지속, PER 업종 대비 낮음, PEG < 1.0 저평가 성장주 스크리닝.", formula: "ROE = 순이익 ÷ 자기자본 / PEG = PER ÷ 이익성장률", usage: "실적이 적자 전환하는 밸류에이션 트랩을 유의하세요.", keyTakeaway: "싸다고 무조건 사지 말고 ROE 성장의 지속성을 검증하세요!" },
  "master-hts": { badge: "HTS & 증시 지수", emoji: "📱", name: "HTS/MTS 활용법 & 종합주가지수(KOSPI) 산출 원리", eng: "Trading Platform & Market Index Calculation", quickSummary: "KOSPI = (현재 시총 ÷ 1980년 시총) × 100", fullDesc: "삼성전자 20% 시총 비중 효과와 영웅문 핵심 화면번호 [0101], [0600], [0796].", formula: "시가총액 가중 방식 지수 산출", usage: "HTS 멀티 모니터 환경에서 종합차트와 수급을 동시 관찰하세요.", keyTakeaway: "KOSPI 지수는 대형주 시가총액 비중에 크게 좌우됩니다!" },
  "master-leading": { badge: "주도주 & 수급", emoji: "🚀", name: "주도주 vs 테마주 구별법 & 외국인/기관 쌍끌이 수급 매매", eng: "Market Leaders vs Themes & Institutional Flow", quickSummary: "실적이 성장하는 주도주에 집중하고 양매수 수급을 추적하세요.", fullDesc: "실적 동반 1~3년 우상향 주도주와 뉴스 찌라시 폭등 후 폭락하는 테마주 구분.", formula: "외국인·기관 3일 연속 동시 순매수(양매수) 수급 추적", usage: "위꼬리 긴 장대음봉은 세력 설거지 패턴이므로 피하세요.", keyTakeaway: "실적이 성장하는 주도주에 집중하고 양매수 수급을 따라가세요!" }
};

// ----------------------------------------------------
// DATA 3: 30문항 풀 퀴즈 데이터셋
// ----------------------------------------------------
const QUIZ_QUESTIONS_30 = [
  { id: 1, question: "삼성전자 주식을 1주라도 사서 보유하고 있는 사람을 부르는 올바른 명칭은?", options: ["채권자", "주주 (株主)", "원로원", "펀드매니저"], answerIndex: 1, explanation: "주식을 매수한 사람은 그 회사의 일부 지분을 소유한 '주주(株主)'가 됩니다." },
  { id: 2, question: "주식과 펀드의 장점을 결합하여 실시간으로 사고팔 수 있는 분산투자 상품은?", options: ["ETF (상장지수펀드)", "적금", "파생상품", "어음"], answerIndex: 0, explanation: "ETF는 소액으로도 수십 개 기업에 분산투자 가능한 인기 상품입니다." },
  { id: 3, question: "주가가 급락할 때 투자자들이 도망치라는 뜻으로 쓰는 유머 밈 용어는?", options: ["상킷", "돔황챠", "존버", "물타기"], answerIndex: 1, explanation: "'돔황챠'는 '도망쳐!'를 재치 있게 비틀어 부르는 주식 밈입니다." },
  { id: 4, question: "주가가 기업 1년 순이익의 몇 배인가를 뜻하는 저평가 측정 지표는?", options: ["PBR", "PER", "ROE", "KPI"], answerIndex: 1, explanation: "PER(주가수익비율)은 주가를 주당순이익(EPS)으로 나눈 저평가 지표입니다." },
  { id: 5, question: "대형 우량 기업들이 주로 상장되어 있는 한국의 대표 주가지수는?", options: ["KOSDAQ", "NASDAQ", "KOSPI", "S&P500"], answerIndex: 2, explanation: "KOSPI(코스피)는 한국 대표 대형 기업들이 상장된 주가지수입니다." },
  { id: 6, question: "시작 가격보다 마감 가격이 더 높게 상승 마감했을 때 형성되는 붉은 캔들은?", options: ["음봉", "양봉", "도지형", "십자선"], answerIndex: 1, explanation: "시가보다 종가가 높으면 붉은색 '양봉'이 됩니다." },
  { id: 7, question: "주주 자기자본으로 1년 동안 얼마나 벌었나 보여주는 워렌 버핏 지표는?", options: ["ROE", "PBR", "EV/EBITDA", "BPS"], answerIndex: 0, explanation: "ROE(자기자본이익률)는 기업의 수익 창출 능력을 나타냅니다." },
  { id: 8, question: "원하는 매수 가격을 직접 입력하여 그 가격이 와야 체결되는 주문 방식은?", options: ["시장가 주문", "지정가 주문", "조건부 주문", "체결 우선 주문"], answerIndex: 1, explanation: "지정가 주문은 내가 원하는 가격을 직접 입력하는 주문입니다." },
  { id: 9, question: "동시 주문이 몰릴 때 체결 1순위 절대 원칙은?", options: ["시간 우선", "수량 우선", "가격 우선", "나이 우선"], answerIndex: 2, explanation: "체결 1순위는 '가격 우선의 법칙'입니다." },
  { id: 10, question: "단기 이동평균선이 장기 이동평균선을 위로 강력하게 뚫고 올라오는 상승 신호는?", options: ["데드크로스", "골든크로스", "역배열", "하한가"], answerIndex: 1, explanation: "단기선이 장기선을 위로 돌파하는 현상을 '골든크로스'라 부릅니다." },
  { id: 11, question: "미국 주식 1년 매매 차익 중 비과세 공제되는 한도 금액은?", options: ["100만원", "250만원", "500만원", "1,000만원"], answerIndex: 1, explanation: "미국 주식 양도소득세는 1년 순수익 중 250만원까지 비과세 공제됩니다." },
  { id: 12, question: "남들이 부자가 될 때 나만 소외될까 두려워 급등하는 주식을 홧김에 사는 이성 마비 현상은?", options: ["FOMO (소외 공포)", "ESG", "IPO", "ETF"], answerIndex: 0, explanation: "FOMO는 소외될까 봐 뇌동매매하게 만드는 심리적 오류입니다." }
];

for (let q = 13; q <= 30; q++) {
  QUIZ_QUESTIONS_30.push({
    id: q,
    question: `Stock Beginner Q${q}. 워렌 버핏이 가장 강조한 '투자의 제1칙'은 무엇일까요?`,
    options: ["급등 종목 추격 매수", "절대로 돈을 잃지 마라", "매일 주가를 100번 확인하라", "찌라시 정보 신뢰"],
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

  // Render Live Market News Feed
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
      card.addEventListener('click', () => openUniversalModal(item, Object.values(SLANG_GUIDE_DATA), i));
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

  // Universal Modal System
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

  // Quiz Engine (Fix Next Question Navigation)
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
