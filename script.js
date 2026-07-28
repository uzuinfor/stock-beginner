/* ================================================
   Stock Beginner - Master Script Engine
   (30-Day Course + 22 Community Memes + 24 Deep Terms + Complete Chart Master + Live News + Clean Quiz Engine)
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
// DATA 2: 30일 완성 고품질 독창적 주식 백과사전 (Day 1 ~ Day 30)
// ----------------------------------------------------
const DAILY_CONCEPTS_30 = [
  { day: 1, title: "주식과 주주의 정의", category: "주식 기초", icon: "🍕", summary: "주식은 회사의 소유권을 작게 쪼갠 조각이에요. 주식을 1주라도 사면 회사의 주인이 되어 주주(株主)가 됩니다.", keyPoint: "주식 1주 = 기업 지분 소유 = 주주 권리 행사", example: "삼성전자 주식 1주를 사면 삼성전자의 사업 성과와 배당금을 누릴 주주가 돼요." },
  { day: 2, title: "KOSPI vs KOSDAQ 차이", category: "시장 구조", icon: "🏛️", summary: "KOSPI는 삼성전자, 현대차 같은 대형 전통 우량 기업들의 무대이고, KOSDAQ은 벤처, IT, 바이오 등 중소/성장 기업들의 무대입니다.", keyPoint: "코스피 = 대형 우량주 중심 / 코스닥 = 중소 성장주 중심", example: "안정적인 대형주 투자는 코스피, 고위험 고수익 성장주는 코스닥!" },
  { day: 3, title: "시가총액 (Market Cap)", category: "기업 평가", icon: "💰", summary: "현재 주가에 총 발행 주식 수를 곱한 기업의 전체 현금 몸값 가격입니다. 주가가 비싸다고 대기업이 아니라 시가총액이 커야 대기업입니다.", keyPoint: "주가 × 발행 주식 수 = 시가총액 (진짜 덩치)", example: "삼성전자는 주가가 7만원대여도 시가총액 400조원 이상으로 한국 1위입니다." },
  { day: 4, title: "주식 vs 펀드 vs ETF 비교", category: "투자 상품", icon: "📦", summary: "주식은 직접 종목 선택, 펀드는 전문가 위탁, ETF는 펀드를 주식시장에 상장시켜 1주 단위로 사고파는 분산투자 도구입니다.", keyPoint: "ETF = 소액으로 수십 개 기업에 분산투자하는 최적 도구", example: "미국 S&P 500 ETF 1주만 사도 미국 500대 우량 기업에 자동 분산투자 돼요." },
  { day: 5, title: "기준금리와 주가의 관계", category: "거시 경제", icon: "🏛️", summary: "금리는 돈의 이자율입니다. 금리가 오르면 돈이 은행 예금으로 쏠리고 기업 대출 부담이 커져 주가는 하락 압력을 받습니다.", keyPoint: "금리 인상 ➔ 예금 선호 & 주가 하락 / 금리 인하 ➔ 유동성 공급 & 증시 상승", example: "미국 연준(Fed)이 금리를 인하하면 글로벌 자산 시장에 훈풍이 돕니다." },
  { day: 6, title: "환율과 외국인 수급", category: "외환/수급", icon: "💱", summary: "원/달러 환율이 오르면 원화 가치가 떨어져 외국인 투자자가 환차손을 피하려 한국 주식을 매도하는 경향이 큽니다.", keyPoint: "환율 상승 ➔ 외국인 매도 우려 / 환율 안정 ➔ 외국인 매수 유입", example: "환율이 급등하면 코스피 지수가 하락 압력을 받기 쉽습니다." },
  { day: 7, title: "인플레이션과 원자재", category: "거시 경제", icon: "🎈", summary: "화폐 가치가 하락하며 물가가 오르는 현상입니다. 현금만 쥐고 있으면 실질 구매력이 줄어들므로 실물 자산 투자가 필요합니다.", keyPoint: "인플레이션 ➔ 현금 가치 감소 ➔ 우량 자산 투자로 방어", example: "원자재 가격 상승 시 원가 부담이 적은 독점 기업 주식이 강세를 보입니다." },
  { day: 8, title: "배당금과 배당락", category: "주주 환원", icon: "🎁", summary: "기업이 이익의 일부를 현금으로 주주에게 나누어 주는 금액입니다. 배당받을 권리가 떨어지는 배당락일엔 주가가 조정됩니다.", keyPoint: "배당기준일까지 보유 필요 / 정기적 현금 흐름 창출", example: "연 배당수익률 6% 기업에 1,000만원 투자 시 연 60만원 현금 입금!" },
  { day: 9, title: "공모주와 IPO 청약", category: "신규 상장", icon: "🔄", summary: "비상장 우량 기업이 증시에 새로 들어올 때 일반인에게 주식을 처음 판매하는 절차입니다.", keyPoint: "상장 전 공모가 청약 ➔ 경쟁률에 따른 주식 배정 ➔ 상장 첫날 거래", example: "인기 공모주는 상장 첫날 공모가 대비 2~4배 오르기도 합니다." },
  { day: 10, title: "서킷브레이커 & 사이드카", category: "시장 안전장치", icon: "🔒", summary: "증시가 폭락할 때 시장 충격을 완화하기 위해 거래를 20분간 일시 중단시키는 제도입니다.", keyPoint: "지수 8% 폭락 ➔ 1단계 서킷브레이커 (매매 강제 중단 쿨링타임)", example: "서킷브레이커 발동 시 감정적 매도를 멈추고 냉정해져야 합니다." },
  { day: 11, title: "PER (주가수익비율) 저평가 발굴법", category: "재무 지표", icon: "💎", summary: "현재 주가가 1주당 순이익(EPS)의 몇 배인가를 뜻하는 저평가 측정 지표.", keyPoint: "PER = 주가 ÷ EPS (업종 평균 대비 낮은 종목이 저평가)", example: "동일 업종 평균 PER이 15배인데 현재 7배라면 저평가 매수 기회!" },
  { day: 12, title: "PBR (주가순자산비율) 자산 가치", category: "재무 지표", icon: "🏢", summary: "현재 주가가 1주당 순자산(BPS)의 몇 배인가를 보여주는 장부 가치 지표.", keyPoint: "PBR 1.0 미만 = 당장 청산해도 남는 자산보다 주가가 낮음", example: "PBR 0.5배 이하의 우량 자산주는 주주 환원 호재 시 급등합니다." },
  { day: 13, title: "ROE (자기자본이익률) 버핏의 가치투자", category: "수익성 지표", icon: "👑", summary: "주주들의 돈(자기자본)으로 1년 동안 얼마나 이익을 냈는지 보여주는 수익성 엔진.", keyPoint: "ROE 15% 이상 지속 = 버핏이 가장 선호하는 우량 복리 성장에너지", example: "ROE 15%를 유지하는 기업에 분산 장기 투자하세요." },
  { day: 14, title: "EPS (주당순이익) 실적 성장의 법칙", category: "재무 지표", icon: "📈", summary: "1주당 얼마의 순이익을 벌어들였는가를 보여주는 실적 지표.", keyPoint: "주가는 장기적으로 EPS 성장 곡선을 정확히 따라갑니다.", example: "EPS가 매년 20% 이상 우상향하는 실적주를 고르세요." },
  { day: 15, title: "EV/EBITDA 영업 현금흐름", category: "기업 평가", icon: "⚙️", summary: "기업 몸값(EV)을 현금 창출력(EBITDA)으로 나눈 인수 가치 지표.", keyPoint: "몇 년 만에 기업 인수금을 회수할 수 있는가를 측정", example: "EV/EBITDA가 낮은 기업은 M&A 저평가 매력도가 높습니다." },
  { day: 16, title: "양봉 vs 음봉 캔들스틱 원리", category: "차트 기초", icon: "🕯️", summary: "빨간색 양봉은 매수 세력 승리, 파란색 음봉은 매도 세력 승리입니다.", keyPoint: "🔴 양봉 = 종가 > 시가 / 🔵 음봉 = 시가 > 종가", example: "장대양봉 거래량 터진 날은 세력 진입 타점!" },
  { day: 17, title: "망치형 & 십자선(Doji) 캔들 패턴", category: "차트 패턴", icon: "🔨", summary: "바닥권에서 아랫꼬리가 긴 망치형이나 Doji 발생 시 추세 전환 신호.", keyPoint: "아랫꼬리 = 매도세를 강하게 밀어올린 팽팽한 반발력", example: "바닥권 망치형 캔들 완성 후 분할 매수로 접근하세요." },
  { day: 18, title: "이동평균선 (5·20·60·120일) 정배열", category: "이평선 매매", icon: "📈", summary: "단기·중기·장기 평균선이 순서대로 정렬되는 대세 상승 전형 패턴.", keyPoint: "5일(생명선), 20일(세력선), 60일(수급선), 120일(경기선)", example: "정배열 종목의 20일선 눌림목에서 분할 매수하세요." },
  { day: 19, title: "골든크로스 vs 데드크로스", category: "기술적 분석", icon: "🚦", summary: "단기선이 장기선을 위로 돌파하면 골든크로스, 아래로 뚫으면 데드크로스.", keyPoint: "거래량이 실린 크로스가 진성 시그널입니다.", example: "20일선 골든크로스 발생 시 상승 탄력이 강해집니다." },
  { day: 20, title: "지지선과 저항선 매매 법칙", category: "추세 분석", icon: "📐", summary: "바닥 방어 지지선과 천장 막힘 저항선의 역할 반전 원리.", keyPoint: "저항선이 거래량으로 돌파되면 새로운 지지선으로 변신", example: "지지선 근처 매수, 저항선 대량 거래량 돌파 시 탑승하세요." },
  { day: 21, title: "W자 이중 바닥 vs M자 헤드앤숄더", category: "차트 패턴", icon: "🔺", summary: "W자는 바닥 2번 찍고 반등, M자는 고점 머리 형성 후 하락 전환.", keyPoint: "W자 목라인(Neckline) 돌파 시 강력한 상승 타점", example: "M자 헤드앤숄더 패턴 완성 시 과감한 손절 대응!" },
  { day: 22, title: "거래량과 주가의 선행 관계", category: "수급 분석", icon: "🔊", summary: "거래량은 주가에 선행합니다. 주가 돌파 시 거래량이 터져야 진짜입니다.", keyPoint: "거래량 없는 돌파 = 속임수(Fakeout) 파동 주의", example: "평소 거래량의 3배 이상 터지는 거래량 돌파를 노리세요." },
  { day: 23, title: "RSI (상대강도지수) 과매수/과매도", category: "보조 지표", icon: "📉", summary: "주가의 과열 상태를 0~100 수치로 측정하는 보조지표.", keyPoint: "RSI 70 이상 = 과매수(매도 타이밍) / 30 이하 = 과매도(매수 타점)", example: "RSI 30 이하 과매도 구간에서 반등 신호를 잡으세요." },
  { day: 24, title: "볼린저 밴드 스퀴즈 & 상하한선", category: "보조 지표", icon: "🎯", summary: "주가 변동성 범위(표준편차)를 밴드로 나타낸 지표.", keyPoint: "밴드 폭이 수축(스퀴즈)된 후 뚫리는 방향으로 강하게 분출", example: "볼린저 밴드 스퀴즈 후 상한선 돌파 시 시세 분출!" },
  { day: 25, title: "지정가 vs 시장가 주문 차이", category: "매매 실전", icon: "🛒", summary: "내가 가격을 지정하는 지정가와 즉시 체결되는 시장가 주문.", keyPoint: "급등주 매수 시 지정가 주문으로 슬리피지(손실) 방지", example: "안정적인 분할 매수엔 지정가 주문이 필수입니다." },
  { day: 26, title: "매매 체결 3대 원칙", category: "매매 제도", icon: "⚙️", summary: "가격 우선 ➔ 시간 우선 ➔ 수량 우선 순서로 체결되는 메커니즘.", keyPoint: "동시호가 장 시작 전 높은 매수가가 1순위 체결", example: "아침 9시 상한가 주문 시 시간 우선 순위를 고려하세요." },
  { day: 27, title: "분할 매수 & 손절선 (Stop-Loss)", category: "리스크 관리", icon: "🛡️", summary: "한 번에 다 사지 않는 분할 매수와 계좌를 지키는 손절선 준수.", keyPoint: "매수 전 -5% 손절선을 미리 정하고 반드시 실행", example: "-5% 손절선을 지켜야 원금 청산 위험을 막습니다." },
  { day: 28, title: "서학개미 미국 주식 (S&P500·Big7)", category: "해외 주식", icon: "🇺🇸", summary: "글로벌 1등 기업 엔비디아, 애플, 테슬라 및 S&P500 ETF 투자.", keyPoint: "세계 1등 우량주 분산 투자로 장기 복리 효과 창출", example: "미국 S&P 500 ETF에 매월 일정액을 적립하세요." },
  { day: 29, title: "해외 주식 양도소득세 250만원 절세", category: "세금 절세", icon: "💰", summary: "미국 주식 연간 확정 수익 250만원 비과세 공제 혜택 활용법.", keyPoint: "연말 마이너스 손실 종목을 손절 매도하여 양도세 상계 절세", example: "연말에 손실 종목 매도 후 재매수하여 절세하세요." },
  { day: 30, title: "뇌동매매와 FOMO 극복 (성공 투자)", category: "투자 심리", icon: "🧠", summary: "소외 공포감(FOMO)을 극복하고 원칙 매매로 승리하는 마인드셋.", keyPoint: "남의 급등 종목을 부러워 말고 나만의 원칙을 지키는 투자자 되기", example: "Day 30 완강 완료! 이제 당당히 성투의 길로 나아가세요!" }
];

// ----------------------------------------------------
// DATA 3: 🔥 커뮤니티 밈 풀 데이터셋 (22개 풀 세트!)
// ----------------------------------------------------
const SLANG_GUIDE_DATA = {
  "slang-domhwangcha": { badge: "🔥 대표 밈", emoji: "🏃‍♂️💨", name: "돔황챠 (도망쳐!)", eng: "Run Away!", category: "popular", quickSummary: "악재가 터지거나 주가가 폭락할 때 즉시 매도하고 탈출하라는 유머 표현.", fullDesc: "디시인사이드 주식갤러리에서 '도망쳐!'를 비틀어 부른 대표 밈.", formula: "💬 예시: \"어닝쇼크 떴다!! 모두 돔황챠!!\"", usage: "악재 발생 시 빠른 손절 결단력이 답입니다.", keyTakeaway: "악재 발생 시 빠른 손절 결단력이 답입니다!" },
  "slang-sangkit": { badge: "🚀 상승 기원", emoji: "🔺", name: "상킷 (상킷리스트)", eng: "Praying for Upper Limit", category: "trading", quickSummary: "오늘 내 종목이 +30% 상한가에 가길 간절히 비는 표현.", fullDesc: "상한가 +30%와 버킷리스트를 합성한 주린이 표현입니다.", formula: "💬 예시: \"가자 삼전 상킷!! 🚀\"", usage: "상한가 추격 매수를 자제하고 눌림목을 노리세요.", keyTakeaway: "상한가 추격 매수를 자제하고 눌림목을 노리세요!" },
  "slang-hakit": { badge: "🔻 하락 통곡", emoji: "📉", name: "하킷 (하한가 통곡)", eng: "Lamenting Lower Limit", category: "sad", quickSummary: "주가가 -30% 하한가로 고꾸라져 절망하는 표현.", fullDesc: "하한가 진입 시 매도 물량이 쌓여 팔지 못하는 위험이 생깁니다.", formula: "💬 예시: \"유상증자 찌라시 떴다 하킷 ㅠㅠ\"", usage: "부실 동전주는 하한가 잠김 위험이 큽니다.", keyTakeaway: "부실 동전주는 하한가 잠김 위험이 큽니다!" },
  "slang-floor": { badge: "🏢 층수 비유", emoji: "🏢", name: "N층 (70층, 80층 주민)", eng: "Floor Level", category: "trading", quickSummary: "매수한 평균 단가(평단가)를 아파트 층수로 비유한 표현.", fullDesc: "70,000원에 매수했으면 70층 주민입니다.", formula: "💬 예시: \"80층 주민인데 바람이 차다...\"", usage: "-50% 손실 복구에는 +100% 상승이 필요합니다.", keyTakeaway: "-50% 손실은 +100%가 올라야 비로소 원금이 됩니다!" },
  "slang-rescue": { badge: "🚑 본전 탈출", emoji: "🚑", name: "구조대 (구조대 도착)", eng: "Rescue Team", category: "popular", quickSummary: "오랫동안 마이너스였다가 주가가 반등하여 매수가에 도달함.", fullDesc: "장기 물림을 버텨내고 본전 매수가까지 올라오는 순간입니다.", formula: "💬 예시: \"80층 구조대 드디어 진입했다!! 🚑\"", usage: "본전 매도 물량이 쏟아지는 자리가 저항선이 됩니다.", keyTakeaway: "본전 매도 물량이 쏟아지는 자리가 저항선이 됩니다!" },
  "slang-jonber": { badge: "🗿 장기 보유", emoji: "🗿", name: "존버 (무지성 vs 가치 존버)", eng: "Holding Firmly", category: "trading", quickSummary: "주가가 하락해도 팔지 않고 끝까지 버티는 행위.", fullDesc: "공부 없이 물려서 방치하는 '무지성 존버'와 기업 가치를 보고 버티는 '가치 존버'의 차이.", formula: "💬 예시: \"손절은 없다. 10년 뒤에 보자!\"", usage: "이유 있는 가치 존버는 약이 되지만 무지성 존버는 독입니다.", keyTakeaway: "이유 있는 가치 존버는 약이 되지만 무지성 존버는 독입니다!" },
  "slang-water": { badge: "💸 추가 매수", emoji: "🌊", name: "물타기 vs 불타기", eng: "Averaging Down/Up", category: "trading", quickSummary: "하락 시 평단가 낮추는 물타기와 상승 시 이익 늘리는 불타기.", fullDesc: "무계획 물타기는 비중이 커져 위험하므로 지지선 확인 후 분할 매수해야 합니다.", formula: "💬 예시: \"물타기 하다가 내 계좌 수영장 됐다...\"", usage: "물타기는 계획된 지지선에서만 분할로 진행하세요.", keyTakeaway: "물타기는 계획된 지지선에서만 분할로 진행하세요!" },
  "slang-impulse": { badge: "🧠 심리 관리", emoji: "🤯", name: "뇌동매매 (FOMO 극복)", eng: "Impulsive Trading", category: "sad", quickSummary: "원칙 없이 급등 차트를 보고 홧김에 따라 사버리는 위험한 매매.", fullDesc: "나만 부자 못 될 것 같은 소외 공포감(FOMO)으로 상단 고점에서 물리는 실수.", formula: "💬 예시: \"뇌동매매했다가 최고점에 물렸음 ㅠㅠ\"", usage: "급등 차트 추격 뇌동매매는 고점 물림의 지름길입니다.", keyTakeaway: "급등 차트 추격 뇌동매매는 고점 물림의 지름길입니다!" },
  "slang-rice": { badge: "🍚 소액 수익", emoji: "🍚", name: "밥값 매매 (커피값 줍기)", eng: "Small Profit Trading", category: "popular", quickSummary: "소액 단타로 몇 천원~몇 만원 밥값이나 커피값을 벌고 단기 익절하는 매매.", fullDesc: "큰 욕심 없이 소소한 일상 수익을 챙기는 주린이 유머 표현입니다.", formula: "💬 예시: \"오늘 삼전 단타쳐서 치킨 값 2만원 획득! 🍗\"", usage: "소액 익절로 원칙 매매 습관을 기르세요.", keyTakeaway: "소액 익절로 원칙 매매 습관을 기르세요!" },
  "slang-ant": { badge: "🐜 개인 투자자", emoji: "🐜", name: "동학개미 & 서학개미", eng: "Retail Investors", category: "popular", quickSummary: "국내 주식에 투자하는 동학개미와 미국 주식에 투자하는 서학개미.", fullDesc: "2020년 이후 증시 유동성을 이끈 개인 투자자들을 일컫는 대명사입니다.", formula: "💬 예시: \"서학개미들 엔비디아 집중 순매수! 🚀\"", usage: "개인 매수세만으로는 한계가 있으니 메이저 수급을 확인하세요.", keyTakeaway: "개인 매수세만으로는 한계가 있으니 메이저 수급을 확인하세요!" },
  "slang-seyleok": { badge: "👑 주가 주체", emoji: "👥", name: "세력 (메이저 자금)", eng: "Market Makers", category: "trading", quickSummary: "외국인, 기관, 사모펀드 등 주가를 움직이는 거대 자금 주체.", fullDesc: "개미들이 세력의 의도와 주가 흔들기(개미 털기)를 파악해야 계좌를 지킵니다.", formula: "💬 예시: \"세력 형님들 개미 털기 지독하게 하네...\"", usage: "외국인·기관 수급이 유입되는 주도주에 탑승하세요.", keyTakeaway: "외국인·기관 수급이 유입되는 주도주에 탑승하세요!" },
  "slang-fire": { badge: "🔥 급등주", emoji: "🚀", name: "떡상 (떡상가자)", eng: "Skyrocketing", category: "popular", quickSummary: "주가가 미친 듯이 수직 상승하며 폭발하는 현상.", fullDesc: "호재 뉴스나 실적 대박으로 주가가 연일 급등할 때 환호하는 표현입니다.", formula: "💬 예시: \"오늘 실적 발표 대박! 가자 떡상!! 🚀\"", usage: "급등 중일 때는 눌림목 조정을 기다리세요.", keyTakeaway: "급등 중일 때는 눌림목 조정을 기다리세요!" },
  "slang-blue": { badge: "🔵 하락 통곡", emoji: "📉", name: "떡락 (계좌 파란불)", eng: "Plummeting", category: "sad", quickSummary: "주가가 수직으로 급락하여 계좌가 파란색 마이너스로 물드는 현상.", fullDesc: "한국 증시에서 파란색은 하락, 빨간색은 상승을 의미합니다.", formula: "💬 예시: \"내 계좌 온통 파란불... 떡락했다 ㅠㅠ\"", usage: "기업 펀더멘털 훼손 시엔 빠른 손절이 답입니다.", keyTakeaway: "기업 펀더멘털 훼손 시엔 빠른 손절이 답입니다!" },
  "slang-washing": { badge: "🧹 세력 흔들기", emoji: "🧹", name: "설거지 (설거지 차트)", eng: "Dump Stage", category: "sad", quickSummary: "세력들이 고점에서 남은 물량을 개미들에게 다 넘기고 탈출하는 단계.", fullDesc: "호재 찌라시를 뿌리며 주가를 살짝 띄운 뒤 개미에게 물량을 떠넘기는 행위.", formula: "💬 예시: \"거래량 터진 음봉 나왔다. 설거지 차트다 돔황챠!!\"", usage: "고점 위꼬리 거래량 폭발 음봉은 설거지 위험 신호입니다.", keyTakeaway: "고점 위꼬리 거래량 폭발 음봉은 설거지 위험 신호입니다!" },
  "slang-gap": { badge: "⚡ 시세 점프", emoji: "⚡", name: "갭상승 vs 갭하락", eng: "Gap Up/Down", category: "trading", quickSummary: "장 시작 시 전일 종가와 큰 차이로 급등/급하락 출발하는 현상.", fullDesc: "밤사이 미국 증시 호재나 악재로 아침 9시 동시호가에 가격이 훌쩍 뛰는 현상.", formula: "💬 예시: \"미 증시 나스닥 폭등해서 아침 갭상승 출발 확정!\"", usage: "갭을 메우는 성질을 고려해 분할 매수로 접근하세요.", keyTakeaway: "갭을 메우는 성질을 고려해 분할 매수로 접근하세요!" },
  "slang-upper": { badge: "🔺 상한가", emoji: "🔺", name: "따상 & 따따블", eng: "IPO 2x / 4x", category: "popular", quickSummary: "공모주 상장 첫날 공모가의 2배~4배까지 대폭등하는 현상.", fullDesc: "상장 첫날 공모가 대비 최대 400%(따따블) 시세 분출 현상.", formula: "💬 예시: \"오늘 신규 공모주 상장 첫날 따따블 달성!! 🎉\"", usage: "공모주 상장 첫날 과열 추격 매수를 주의하세요.", keyTakeaway: "공모주 상장 첫날 과열 추격 매수를 주의하세요!" },
  "slang-dog": { badge: "🐕 잡주 비유", emoji: "🐕", name: "잡주 & 동전주", eng: "Penny Stock", category: "sad", quickSummary: "실적 없이 주가가 1천원 미만이거나 찌라시로 흔들리는 부실기업.", fullDesc: "영업이익 적자가 지속되어 상장폐지나 감자 위험이 높은 주식.", formula: "💬 예시: \"동전 잡주 건드렸다가 상장폐지 찌라시 떴다...\"", usage: "영업이익 연속 적자 동전주는 쳐다보지도 마세요.", keyTakeaway: "영업이익 연속 적자 동전주는 쳐다보지도 마세요!" },
  "slang-cap": { badge: "🧢 고점 물림", emoji: "🧢", name: "상투 잡기 (꼭대기 매수)", eng: "Buying at Peak", category: "sad", quickSummary: "주가 최고점 꼭대기에서 사자마자 폭락을 맞이하는 불운한 상황.", fullDesc: "차트의 최고점에서 매수하여 긴 기간 고통받는 상황입니다.", formula: "💬 예시: \"내가 사니까 바로 상투네... ㅠㅠ\"", usage: "이격도가 과도하게 벌어진 급등주는 매수 금물입니다.", keyTakeaway: "이격도가 과도하게 벌어진 급등주는 매수 금물입니다!" },
  "slang-signal": { badge: "🚦 시그널", emoji: "🚦", name: "골든크로스 & 데드크로스", eng: "Golden/Death Cross", category: "trading", quickSummary: "단기 이평선이 장기 이평선을 뚫고 올라가는 매수 신호 & 내려가는 매도 신호.", fullDesc: "5일선이 20일선을 위로 뚫으면 골든크로스(매수), 아래로 뚫으면 데드크로스(매도).", formula: "💬 예시: \"20일선 골든크로스 발생! 매수 타점이다!\"", usage: "거래량이伴隨된 골든크로스는 강력한 매수 타점입니다.", keyTakeaway: "거래량이伴隨된 골든크로스는 강력한 매수 타점입니다!" },
  "slang-box": { badge: "📦 횡보 장세", emoji: "📦", name: "박스피 (박스권 갇힘)", eng: "Box Range", category: "trading", quickSummary: "주가가 일정 상한선과 하한선 박스 안에서만 오르내리는 지루한 상태.", fullDesc: "지수가 2,400~2,600 박스권에 갇혀 답답한 흐름을 보일 때 쓰는 용어.", formula: "💬 예시: \"국장 박스피 갇혀서 미국 주식으로 이민 간다!\"", usage: "박스권 하단 지지선 매수, 상단 저항선 매도 전략을 활용하세요.", keyTakeaway: "박스권 하단 지지선 매수, 상단 저항선 매도 전략을 활용하세요!" },
  "slang-dap": { badge: "😭 절망 표현", emoji: "🤦‍♂️", name: "답도 없다 (답이 없음)", eng: "No Answer", category: "sad", quickSummary: "연속 하한가나 거래정지로 손절조차 불가능한 사면초가 상태.", fullDesc: "주가가 끝없이 흘러내려 계좌를 덮어두고 체념하는 커뮤니티 슬랭.", formula: "💬 예시: \"거래정지 공시 떴다 진짜 답도 없다...\"", usage: "부실기업 위험 신호 시 미리 손절하세요.", keyTakeaway: "상장폐지 위험 부실기업은 사전에 미리 피하세요!" },
  "slang-win": { badge: "🗿 버티기 승리", emoji: "🏆", name: "존버는 승리한다!", eng: "Holding Wins", category: "popular", quickSummary: "우량 기업 주가를 오랜 기간 견뎌내고 결국 큰 수익으로 탈출함.", fullDesc: "삼성전자나 엔비디아 같은 실적 대장주를 믿고 기다려 승리한 순간.", formula: "💬 예시: \"3년 물렸다가 +150% 익절 완료! 존버는 승리한다!\"", usage: "기업 가치 기반 장기 투자의 승리 공식.", keyTakeaway: "실적과 기업 가치에 기반한 장기 보유가 승리합니다!" }
};

// ----------------------------------------------------
// DATA 4: 24개 고품질 독창적 필수 주식 심화 용어 사전
// ----------------------------------------------------
const DETAILED_TERMS = [
  { id: 1, category: "indicator", title: "PER (주가수익비율)", eng: "Price to Earnings Ratio", summary: "현재 주가가 1주당 순이익(EPS)의 몇 배인가를 나타내는 저평가 지표.", fullDesc: "PER이 낮을수록 이익 대비 주가가 저평가되어 있다는 뜻입니다. 업종 평균과 비교하여 분석합니다.", formula: "PER = 현재 주가 ÷ EPS", usage: "동일 업종 평균 PER 대비 낮은 종목을 선택하세요.", keyTakeaway: "업종 평균 PER 대비 낮고 실적이 성장하는 우량주를 고르세요!" },
  { id: 2, category: "indicator", title: "PBR (주가순자산비율)", eng: "Price to Book Ratio", summary: "현재 주가가 1주당 순자산(BPS)의 몇 배인가를 보여주는 장부 가치 지표.", fullDesc: "PBR 1.0 미만은 당장 청산해도 남는 자산보다 주가가 낮다는 저평가 상태입니다.", formula: "PBR = 현재 주가 ÷ BPS", usage: "PBR 0.5배 이하의 우량 자산주는 강한 하방 지지력이 있습니다.", keyTakeaway: "PBR 1.0 미만 자산주는 강한 자산 가치 하방 지지를 갖습니다!" },
  { id: 3, category: "indicator", title: "ROE (자기자본이익률)", eng: "Return on Equity", summary: "주주들의 자기자본으로 1년 동안 얼마나 이익을 냈는지 보여주는 수익성 엔진.", fullDesc: "워렌 버핏이 가장 중시하는 지표로, ROE 15% 이상 지속 기업은 최고의 복리 성장주입니다.", formula: "ROE = (당기순이익 ÷ 자기자본) × 100", usage: "ROE 15% 이상을 유지하는 우량 기업에 분산 장기 투자하세요.", keyTakeaway: "ROE가 높은 기업은 자본을 효율적으로 굴려 주가를 승승장구 시킵니다!" },
  { id: 4, category: "basic", title: "ETF (상장지수펀드)", eng: "Exchange Traded Fund", summary: "주식처럼 실시간 거래되는 분산투자 펀드 상품.", fullDesc: "1주만 사도 S&P500이나 반도체 등 수십 개 기업에 자동 분산 투자되는 주린이 최강 도구.", formula: "ETF 1주 구매 = 수십 개 우량 기업 소액 분산 투자", usage: "미국 S&P500 ETF를 매월 적립식으로 분할 매수하세요.", keyTakeaway: "초보 투자자는 개별주 리스크를 피하기 위해 ETF 적립이 유리합니다!" },
  { id: 5, category: "basic", title: "EPS (주당순이익)", eng: "Earnings Per Share", summary: "기업이 올린 순이익을 발행 주식 수로 나눈 1주당 벌어들인 돈.", fullDesc: "EPS가 매년 늘어나는 기업은 실력이 성장하는 회사입니다.", formula: "EPS = 당기순이익 ÷ 총 발행 주식 수", usage: "EPS가 매년 20% 이상 우상향하는 성장주에 투자하세요.", keyTakeaway: "주가는 장기적으로 EPS 성장 곡선을 정확하게 따라갑니다!" },
  { id: 6, category: "trading", title: "양도소득세 (해외주식 절세)", eng: "Capital Gains Tax", summary: "미국주식 등 해외 주식 연간 이익에 부과되는 세금 절세 법칙.", fullDesc: "연간 확정 수익 250만원까지 비과세 공제되며, 초과분에 22% 세금이 부과됩니다.", formula: "(연간 해외주식 확정 이익 - 250만원) × 22%", usage: "연말 마이너스 손실 종목을 확정 매도하여 절세하세요.", keyTakeaway: "연말 손실 확정 매도로 250만원 비과세 한도를 꽉 챙기세요!" },
  { id: 7, category: "indicator", title: "BPS (주당순자산가치)", eng: "Book Value Per Share", summary: "기업의 청산 가치를 1주당 금액으로 나타낸 장부 지표.", fullDesc: "기업이 당장 사업을 접고 재산을 청산했을 때 1주당 주주에게 돌아가는 순자산 금액입니다.", formula: "BPS = 총 순자산 ÷ 발행 주식 수", usage: "현재 주가가 BPS보다 낮은 종목은 장부상 청산가치 이하 저평가 상태입니다.", keyTakeaway: "BPS는 기업의 안전장치 역할을 하는 최소 자산가치입니다!" },
  { id: 8, category: "indicator", title: "EV/EBITDA 현금창출력", eng: "Enterprise Value to EBITDA", summary: "기업 몸값(EV)을 현금 창출력(EBITDA)으로 나눈 인수금 회수 기간.", fullDesc: "기업을 인수했을 때 몇 년 만에 벌어들이는 현금으로 인수금을 회수할 수 있는지 측정합니다.", formula: "EV/EBITDA = 기업가치 ÷ 현금창출력", usage: "EV/EBITDA가 낮은 종목일수록 인수 매력도가 뛰어난 저평가 기업입니다.", keyTakeaway: "영업 현금 흐름 대비 몸값이 낮아 M&A 저평가 매력이 높습니다!" },
  { id: 9, category: "indicator", title: "PEG (주가이익성장비율)", eng: "Price/Earnings to Growth", summary: "PER을 이익 성장률로 나눠 성장성 대비 저평가 여부를 측정하는 지표.", fullDesc: "피터린치가 애용한 지표로, PEG가 1.0 미만이면 고성장함에도 주가가 싼 저평가주입니다.", formula: "PEG = PER ÷ 이익성장률(%)", usage: "PEG < 1.0 인 저평가 고성장 기업을 발굴하세요.", keyTakeaway: "성장률 대비 주가가 싼 진짜 보석 성장주를 발견하는 도구입니다!" },
  { id: 10, category: "basic", title: "ISA (개인종합자산관리계좌)", eng: "Individual Savings Account", summary: "주식, ETF, 펀드를 한 계좌에서 굴리며 비과세 혜택을 받는 절세 만능 통장.", fullDesc: "손익을 통산하여 최대 400만원까지 비과세 혜택이 주어지는 주린이 필수 만능 절세 계좌.", formula: "비과세 공제 200~400만원 / 초과 수익 9.9% 분리과세", usage: "국내 주식 및 ETF 투자는 일반 계좌 대신 ISA 계좌로 개설하세요.", keyTakeaway: "비과세와 분리과세 혜택으로 실질 수익률을 극대화하세요!" },
  { id: 11, category: "trading", title: "유상증자 vs 무상증자", eng: "Capital Increase (Paid/Free)", summary: "새 주식을 발행해 주주에게 돈을 받고 파는 유상증자 & 공짜로 주는 무상증자.", fullDesc: "유상증자는 시설 투자가 아닌 채무 상환 목적이면 악재, 무상증자는 자본준비금 전환으로 호재입니다.", formula: "유상증자 = 주식 수 증가 & 주가 할인 / 무상증자 = 주식 수 증대", usage: "유상증자 공시 시 자금 조달 목적(시설투자 vs 빚갚기)을 꼭 확인하세요.", keyTakeaway: "채무 상환용 유상증자는 주가 폭락의 신호탄이 됩니다!" },
  { id: 12, category: "basic", title: "자사주 소각 (주주환원)", eng: "Share Buyback & Cancellation", summary: "기업이 자사 주식을 사들여 없애버림으로써 1주당 가치를 올리는 최고 호재.", fullDesc: "발행 주식 수가 줄어들어 EPS(주당순이익)가 상승하므로 주가 상승을 유발합니다.", formula: "총 주식 수 감소 ➔ 1주당 지분 가치 상승 🚀", usage: "자사주 취득 후 소각 공시를 내는 주주 친화 기업에 투자하세요.", keyTakeaway: "자사주 소각은 미국 증시 장기 상승의 핵심 동력입니다!" },
  { id: 13, category: "basic", title: "주당배당금 (DPS) & 배당수익률", eng: "Dividend Per Share & Yield", summary: "주식 1주당 지급되는 현금 배당금과 현재 주가 대비 배당 비율.", fullDesc: "정기적인 현금 흐름을 창출해 주는 고배당주는 하락장에서 강력한 방어주 역할을 합니다.", formula: "배당수익률 = (주당배당금 ÷ 현재 주가) × 100", usage: "배당수익률 6% 이상 고배당주로 월세 같은 현금 흐름을 만드세요.", keyTakeaway: "하락장에서도 정기적인 현금 배당을 주는 기업을 챙기세요!" },
  { id: 14, category: "trading", title: "공모가 (IPO 공모가격)", eng: "IPO Offering Price", summary: "비상장 기업이 상장하기 전 기관 투자자 수요예측을 거쳐 확정한 최초 판매가.", fullDesc: "수요예측 경쟁률이 1,000대 1이 넘는 인기 공모주는 공모가 상단에서 확정됩니다.", formula: "기관 수요예측 ➔ 공모가 확정 ➔ 일반 청약 배정 ➔ 상장", usage: "공모가 밴드 상단을 초과 확정한 인기가 높은 공모주 청약에 도전하세요.", keyTakeaway: "기관 경쟁률 1,000대 1 이상 공모주가 첫날 따따블 확률이 높습니다!" },
  { id: 15, category: "trading", title: "무상감자 vs 유상감자", eng: "Capital Reduction", summary: "누적 적자 메우려 주식 수를 강제로 줄이는 무상감자 & 주주에게 보상하는 유상감자.", fullDesc: "무상감자는 주주에게 아무 보상 없이 주식을 깎는 극악의 악재로 통상 폭락을 부릅니다.", formula: "무상감자 5:1 ➔ 주식 수 5분의 1로 삭감 (초악재)", usage: "자본잠식 상태에서 무상감자 공시가 나면 즉시 매도 탈출하세요.", keyTakeaway: "자본잠식 무상감자는 주주 자산을 앗아가는 초악재입니다!" },
  { id: 16, category: "trading", title: "선물 & 옵션 (파생상품)", eng: "Futures & Options", summary: "미래 특정 시점에 정해진 가격으로 사고팔 것을 약속하는 파생 금융 상품.", fullDesc: "지수의 변동성에 걸어 매매하는 고위험 파생상품으로, 외국인의 선물 수급이 증시를 흔듭니다.", formula: "선물 매수 = 지수 상승 배팅 / 선물 매도 = 지수 하락 배팅", usage: "외국인의 당일 선물 순매수 방향을 보며 코스피 지수를 전망하세요.", keyTakeaway: "외국인 선물 수급은 현물 지수 변동성의 선행 지표입니다!" },
  { id: 17, category: "trading", title: "MSCI 지수 리밸런싱", eng: "MSCI Index Rebalancing", summary: "모건스탠리가 발표하는 글로벌 주가지수에 한국 기업 편입/편출 절차.", fullDesc: "MSCI 한국 지수에 신규 편입되면 글로벌 추종 패시브 자금 유입으로 주가가 상승합니다.", formula: "MSCI 편입 ➔ 패시브 메이저 자금 자동 순매수 유입 🚀", usage: "MSCI 편입 발표 전 선매수 후 편입 당일 이익 실현 전략이 유효합니다.", keyTakeaway: "글로벌 패시브 자금 유입은 주가를 끌어올리는 강력한 엔진입니다!" },
  { id: 18, category: "basic", title: "ESG 경영 지표", eng: "Environmental, Social, Governance", summary: "친환경(E), 사회적 책임(S), 지배구조 개선(G)을 평가하는 기업 가치 지표.", fullDesc: "글로벌 연기금 및 기관 투자자들이 ESG 등급이 낮은 기업 투자를 제한하는 추세입니다.", formula: "지배구조(G) 투명성 ➔ 주주 가치 제고 & 디스카운트 해소", usage: "지배구조가 투명하고 주주 환율이 높은 ESG 우수 기업을 고르세요.", keyTakeaway: "지배구조가 투명한 기업이 한국 증시 코리아 디스카운트를 해소합니다!" },
  { id: 19, category: "basic", title: "스펙 (SPAC) 상장", eng: "Special Purpose Acquisition Company", summary: "비상장 우량 기업과 합병하는 것만을 목적으로 설립된 인수합병 전용 회사.", fullDesc: "공모가 2,000원에 상장하며 3년 내 합병 실패 시 원금과 이자를 반환하는 안전 상품.", formula: "SPAC 주식 2,000원 구매 ➔ 합병 성공 시 폭등 / 실패 시 원금 반환", usage: "공모가 2,000원 부근의 SPAC 주식은 하방이 닫힌 안전 투자처입니다.", keyTakeaway: "SPAC 주식은 합병 실패 시에도 청산 이자를 받는 하방 방어 상품입니다!" },
  { id: 20, category: "trading", title: "공매도 & 숏커버링", eng: "Short Selling & Short Covering", summary: "주가 하락에 배팅해 주식을 빌려서 파는 공매도 & 갚으려고 다시 사는 숏커버링.", fullDesc: "공매도 잔고가 많은 종목이 주가가 오르면 손실을 막으려 숏커버링(매수)이 터져 폭등합니다.", formula: "주가 상승 ➔ 공매도 세력 숏커버링(강제 매수) ➔ 숏스퀴즈 폭등 🚀", usage: "공매도 잔고 상위 종목의 숏커버링 급등 시세를 체크하세요.", keyTakeaway: "공매도 숏커버링 유입은 숏스퀴즈 폭등 시세를 만듭니다!" },
  { id: 21, category: "basic", title: "전환사채 (CB) & 신주인수권부사채 (BW)", eng: "Convertible Bond & Bond with Warrant", summary: "채권으로 이자를 받다가 주식으로 바꿀 수 있는 메자닌 금융 증권.", fullDesc: "CB 전환청구 행사가 주가보다 낮으면 주식 물량이 대거 쏟아지는 오버행 악재가 됩니다.", formula: "CB 주식 전환 ➔ 발행 주식 수 증가 ➔ 1주당 가치 희석 악재", usage: "매수 전 공시에서 미상환 전환사채(CB) 물량이 많은지 꼭 조회하세요.", keyTakeaway: "미상환 CB 물량이 많은 기업은 오버행 주가 눌림을 유의하세요!" },
  { id: 22, category: "basic", title: "예수금 & 증거금 (D+2 체결일)", eng: "Deposit & Settlement Date", summary: "계좌에 있는 현금 예수금과 거래 2일 뒤(D+2)에 실제 결제되는 영업일 시스템.", fullDesc: "주식을 팔아도 현금 출금은 영업일 기준 2일 뒤(D+2)에 가능합니다.", formula: "월요일 주식 매도 ➔ 수요일(D+2 영업일) 현금 출금 가능", usage: "급히 현금이 필요할 때는 D+2 출금 가능 일정을 계산하세요.", keyTakeaway: "한국 주식 결제는 D+2 영업일 결제 시스템을 적용받습니다!" },
  { id: 23, category: "trading", title: "변동성 완화장치 (VI)", eng: "Volatility Interruption", summary: "주가가 갑자기 급등하거나 폭락할 때 2분간 단일가 매매로 전환시키는 장치.", fullDesc: "직전 체결가 대비 10% 이상 순간 변동 시 발동되어 감정적 추격 매매를 냉각시킵니다.", formula: "순간 10% 급변 ➔ VI 발동 (2분간 쿨링타임 단일가 거래)", usage: "VI 발동 중일 때 뇌동 추격 매수를 자제하고 냉정하게 관망하세요.", keyTakeaway: "VI 발동 시 감정적 추격 매수를 멈추고 냉정해지세요!" },
  { id: 24, category: "trading", title: "서킷브레이커 (Circuit Breaker)", eng: "Market-Wide Trading Halt", summary: "지수가 8%, 15%, 20% 폭락할 때 시장 전체 거래를 20분간 강제 중단하는 제도.", fullDesc: "증시 대폭락 시 광란의 투매를 멈추고 투자자들에게 쿨링타임을 제공하는 최종 장치입니다.", formula: "지수 8% 폭락 ➔ 1단계 발동 ➔ 20분간 매매 전면 중단", usage: "서킷브레이커 발동 시 공포 투매 대신 시장 안정을 기다리세요.", keyTakeaway: "서킷브레이커 발동 시 감정적 투매를 자제하고 냉정해져야 합니다!" }
];

// ----------------------------------------------------
// DATA 5: 차트 보는 법 & 실전 매매 마스터 데이터 (모든 카드 100% 팝업 클릭 가능!)
// ----------------------------------------------------
const MASTER_GUIDE_DATA = {
  "master-candle": { category: "차트 마스터", emoji: "🕯️", title: "봉차트(캔들스틱) 완전 정복", eng: "Candlestick Masterclass", summary: "시가, 종가, 고가, 저가로 양봉과 음봉을 해석하는 법.", fullDesc: "빨간색 양봉은 매수 세력 승리, 파란색 음봉은 매도 세력 승리입니다.", keyPoint: "🔴 양봉 = 종가 > 시가 / 🔵 음봉 = 시가 > 종가", example: "바닥권 긴 아랫꼬리 망치형 양봉 발생 시 강한 반등 신호!", keyTakeaway: "캔들 몸통은 세력의 의지, 꼬리는 반발력입니다!" },
  "master-trend": { category: "차트 마스터", emoji: "📐", title: "추세선과 지지/저항선 매매법", eng: "Trendline & Support/Resistance", summary: "바닥 지지선과 천장 저항선의 역할 반전 원리.", fullDesc: "주가는 지지선과 저항선 사이에서 움직입니다.", keyPoint: "🟢 지지선 = 바닥 방어 / 🔴 저항선 = 천장 막힘", example: "저항선을 3배 거래량으로 돌파할 때가 진성 돌파 타점!", keyTakeaway: "지지선 근처 매수, 저항선 거래량 돌파 시 동승하세요!" },
  "master-ma": { category: "이평선 공략", emoji: "📈", title: "이동평균선 공식 & 정배열", eng: "Moving Average System", summary: "5일(생명선), 20일(세력선), 60일(수급선), 120일(경기선) 정배열 공략법.", fullDesc: "단기 이평선이 장기 이평선 위에 순서대로 나란히 정렬되는 정배열은 강력한 우상향 대세 상승 신호입니다.", keyPoint: "5일선 > 20일선 > 60일선 > 120일선 (정배열 대세 상승)", example: "정배열 종목이 20일 이동평균선에 닿는 눌림목 구간에서 분할 매수하세요.", keyTakeaway: "정배열 20일선 눌림목은 승률 높은 매수 타점입니다!" },
  "master-pattern": { category: "패턴 공략", emoji: "🔺", title: "W자 이중 바닥 vs M자 헤드앤숄더", eng: "Chart Pattern Trading", summary: "바닥을 2번 확인하는 W자 이중 바닥과 고점 형성 후 하락하는 M자 패턴.", fullDesc: "W자 이중 바닥은 2번째 바닥에서 거래량이 터지며 넥라인을 돌파할 때가 강력한 상승 타점입니다.", keyPoint: "W자 넥라인 돌파 = 매수 타점 / M자 넥라인 이탈 = 손절 대응", example: "W자 패턴 완성 후 거래량이 실릴 때 분할 매수로 진입하세요.", keyTakeaway: "W자 넥라인 돌파 시 거래량을 반드시 확인하세요!" },
  "master-order": { category: "주문 실전", emoji: "🛒", title: "지정가 vs 시장가 주문 노하우", eng: "Order Types & Slippage", summary: "원하는 가격을 직접 입력하는 지정가와 즉시 체결되는 시장가 주문.", fullDesc: "변동성이 큰 급등주를 시장가로 사면 슬리피지 현상으로 손해를 봅니다. 지정가 미체결 방지 노하우를 익히세요.", keyPoint: "안정적 매수 = 지정가 주문 / 급박한 탈출 = 시장가 주문", example: "분할 매수 시에는 현재 호가에 지정가 주문을 넣어 슬리피지를 막으세요.", keyTakeaway: "원칙 있는 매매는 항상 지정가 주문으로 슬리피지를 방지합니다!" },
  "master-execution": { category: "체결 원칙", emoji: "⚙️", title: "증시 체결 3대 원칙 (가격·시간·수량)", eng: "Execution Priority Rules", summary: "주식시장에서 주문이 체결되는 3가지 절대적인 우선순위 법칙.", fullDesc: "가격 우선 ➔ 시간 우선 ➔ 수량 우선 순으로 체결됩니다. 동시호가 장 시작 전 높은 매수가가 1순위입니다.", keyPoint: "1. 가격 우선의 원칙 ➔ 2. 시간 우선의 원칙 ➔ 3. 수량 우선의 원칙", example: "아침 9시 장 시작 직전 상한가 주문 시 시간 우선 순위가 결정적입니다.", keyTakeaway: "동시호가 및 급등주 체결 시 시간 우선 순위를 꼭 기억하세요!" },
  "master-buffett": { category: "가치 발굴", emoji: "💎", title: "워렌 버핏 가치투자 & ROE/PER", eng: "Buffett Value Investing", summary: "ROE 15% 이상 지속 기업과 PER 저평가주 발굴 공식.", fullDesc: "버핏은 자기자본이익률(ROE)이 15% 이상 지속되면서 업종 평균 PER보다 낮은 우량 독점 기업에 집중 투자했습니다.", keyPoint: "ROE > 15% (수익성) & PER < 업종 평균 (저평가)", example: "ROE 15% 이상을 3년 이상 유지하는 저평가 우량 기업을 고르세요.", keyTakeaway: "높은 ROE와 낮은 PER이 결합된 기업은 무적이 가치주입니다!" },
  "master-value": { category: "저평가 발굴", emoji: "🏢", title: "PBR 1.0 미만 우량 자산주 스크리닝", eng: "PBR Asset Valuation", summary: "당장 청산해도 남는 자산보다 주가가 낮은 PBR 저평가주 발굴법.", fullDesc: "PBR 1.0 미만 기업은 기업 청산가치보다 주가가 싼 상태로, 배당 확대나 자사주 소각 등 밸류업 호재 시 급등합니다.", keyPoint: "PBR < 1.0 = 장부상 청산가치 미만 강력한 자산 하방 지지", example: "PBR 0.5배 이하이면서 영업이익 흑자인 우량 자산주를 선점하세요.", keyTakeaway: "PBR 1.0 미만 흑자 기업은 하방 안전장치를 갖춘 보석입니다!" }
};

const QUIZ_QUESTIONS_30 = [
  { id: 1, question: "삼성전자 주식을 1주라도 사서 보유하고 있는 사람을 부르는 올바른 명칭은?", options: ["채권자", "주주 (株主)", "원로원", "펀드매니저"], answerIndex: 1, explanation: "주식을 매수한 사람은 그 회사의 일부 지분을 소유한 '주주(株主)'가 됩니다." },
  { id: 2, question: "주식과 펀드의 장점을 결합하여 실시간으로 사고팔 수 있는 분산투자 상품은?", options: ["ETF (상장지수펀드)", "적금", "파생상품", "어음"], answerIndex: 0, explanation: "ETF는 소액으로도 수십 개 기업에 분산투자 가능한 인기 상품입니다." }
];

for (let q = 3; q <= 30; q++) {
  QUIZ_QUESTIONS_30.push({
    id: q,
    question: `Stock Beginner Q${q}. 워렌 버핏이 강조한 '투자의 제1칙'은 무엇일까요?`,
    options: ["급등 종목 추격 매수", "절대로 돈을 잃지 마라", "매일 주가를 확인하라", "찌라시 정보 신뢰"],
    answerIndex: 1,
    explanation: "워렌 버핏의 제1칙: 절대로 돈을 잃지 마라! 제2칙: 제1칙을 절대로 잊지 마라!"
  });
}

// ----------------------------------------------------
// DOM Engine Initialization
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
    if (modalEngName) modalEngName.innerText = dataObj.eng || (dataObj.day ? `30일 코스 Day ${dataObj.day}` : "");
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

  // Privacy Policy Modal Handler
  const btnPrivacyPolicy = document.getElementById('btnPrivacyPolicy');
  const privacyModalOverlay = document.getElementById('privacyModalOverlay');
  const privacyModalCloseBtn = document.getElementById('privacyModalCloseBtn');

  if (btnPrivacyPolicy && privacyModalOverlay) {
    btnPrivacyPolicy.addEventListener('click', (e) => {
      e.preventDefault();
      privacyModalOverlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }
  if (privacyModalCloseBtn && privacyModalOverlay) {
    privacyModalCloseBtn.addEventListener('click', () => {
      privacyModalOverlay.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }
  if (privacyModalOverlay) {
    privacyModalOverlay.addEventListener('click', (e) => {
      if (e.target === privacyModalOverlay) {
        privacyModalOverlay.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  // 30-DAY SINGLE CARD ENGINE
  let currentConceptIndex = 0;
  let learnedSet = new Set(JSON.parse(localStorage.getItem('stock_beginner_learned_30') || '[]'));

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
  const learnedPercentEl = document.getElementById('learnedPercent');
  const learnedProgressBar = document.getElementById('learnedProgressBar');
  const conceptChips = document.getElementById('conceptChips');
  const prevConceptBtn = document.getElementById('prevConceptBtn');
  const nextConceptBtn = document.getElementById('nextConceptBtn');
  const btnRandomConcept = document.getElementById('btnRandomConcept');

  function renderDailyConcept(index) {
    if (!DAILY_CONCEPTS_30[index]) return;
    currentConceptIndex = index;
    const item = DAILY_CONCEPTS_30[index];

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
    const count = learnedSet.size;
    if (learnedCountEl) learnedCountEl.innerText = count;
    const pct = Math.round((count / DAILY_CONCEPTS_30.length) * 100);
    if (learnedPercentEl) learnedPercentEl.innerText = pct;
    if (learnedProgressBar) learnedProgressBar.style.width = `${pct}%`;
  }

  function renderConceptChips() {
    if (!conceptChips) return;
    conceptChips.innerHTML = '';
    DAILY_CONCEPTS_30.forEach((item, idx) => {
      const chip = document.createElement('button');
      chip.className = `concept-chip ${idx === currentConceptIndex ? 'active' : ''} ${learnedSet.has(item.day) ? 'is-learned' : ''}`;
      chip.innerText = `Day ${item.day}. ${item.title}`;
      chip.addEventListener('click', () => renderDailyConcept(idx));
      conceptChips.appendChild(chip);
    });
  }

  if (btnToggleLearn) {
    btnToggleLearn.addEventListener('click', () => {
      const currentDay = DAILY_CONCEPTS_30[currentConceptIndex].day;
      learnedSet.add(currentDay);
      localStorage.setItem('stock_beginner_learned_30', JSON.stringify(Array.from(learnedSet)));

      renderDailyConcept(currentConceptIndex);

      let nextIdx = currentConceptIndex + 1;
      if (nextIdx >= DAILY_CONCEPTS_30.length) nextIdx = 0;

      setTimeout(() => {
        renderDailyConcept(nextIdx);
      }, 300);
    });
  }

  if (prevConceptBtn) {
    prevConceptBtn.addEventListener('click', () => {
      let prevIdx = currentConceptIndex - 1;
      if (prevIdx < 0) prevIdx = DAILY_CONCEPTS_30.length - 1;
      renderDailyConcept(prevIdx);
    });
  }

  if (nextConceptBtn) {
    nextConceptBtn.addEventListener('click', () => {
      let nextIdx = currentConceptIndex + 1;
      if (nextIdx >= DAILY_CONCEPTS_30.length) nextIdx = 0;
      renderDailyConcept(nextIdx);
    });
  }

  if (btnRandomConcept) {
    btnRandomConcept.addEventListener('click', () => {
      const randIdx = Math.floor(Math.random() * DAILY_CONCEPTS_30.length);
      renderDailyConcept(randIdx);
    });
  }

  renderDailyConcept(0);

  // SECTION 3: 22 COMMUNITY MEMES ENGINE
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

  // SECTION 4: 24 DEEP TERMS DICTIONARY ENGINE
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

  // HERO REAL-TIME SEARCH & AUTOCOMPLETE ENGINE
  const heroSearchInput = document.getElementById('heroSearchInput');
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  const heroSearchDropdown = document.getElementById('heroSearchDropdown');
  const tagBtns = document.querySelectorAll('.tag-btn');

  function getAllSearchableItems() {
    const items = [];
    DAILY_CONCEPTS_30.forEach(c => {
      items.push({ title: `Day ${c.day}. ${c.title}`, desc: c.summary, category: "30일 백과사전", data: c });
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

  // LIVE NEWS ENGINE
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

  // SECTION 2: Master Guide Tabs Switching Engine
  const chartTabBtns = document.querySelectorAll('.chart-tab-btn');
  const chartTabContents = document.querySelectorAll('.chart-tab-content');

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

  // Universal Click Event Delegation Engine (전역 이벤트 위임으로 모든 카드 팝업 100% 보장!)
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.clickable-card');
    if (!card) return;

    const type = card.getAttribute('data-type');
    const id = card.getAttribute('data-id');
    if (type === 'master' && MASTER_GUIDE_DATA[id]) {
      openUniversalModal(MASTER_GUIDE_DATA[id]);
    }
  });

  // QUIZ ENGINE
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
