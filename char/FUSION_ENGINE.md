# 🌌 Celestial Fusion Engine v1.0 — 3캐릭터 → 1아바타
운명 데이터를 **3개의 시각 역할로 분해 → 충돌 제거 → 하나의 캐릭터로 재조립**하는 구조 엔진.
> 본질: "운명 캐릭터 생성"이 아니라 **"운명을 시각 역할 3분할해서 재조합하는 엔진"**.

```
INPUT(사주+자미두수) → DECOMPOSITION(3역할 분해) → FUSION(충돌제거·재조합) → OUTPUT(단일 캐릭터)
```

## 🧠 3-ROLE 분해
| 역할 | 질문 | 결정요소 | 출력 (이것만) |
|---|---|---|---|
| ⭐ **CORE** 형태 | "누구냐" | **주성**(최우선) + 최강 오행 + 천간 | 실루엣(70%) · 의상 구조 · **메인 아이템 1개** · 바디 테마 |
| 👤 **EXPRESSION** 감정 | "어떤 성격이냐" | **십성** + 보조 주성 | 눈 · 눈썹 · 입 · 미세표정 (**바디 변경❌**) |
| 🌿 **AURA** 환경 | "어떤 운명의 공기냐" | **오행 균형** + 길/흉성 + 지지 | 색 팔레트 · 조명 · 입자 · 분위기 (**오브젝트 생성❌**) |

## ⚖️ FUSION 규칙 (우선순위 CORE > EXPRESSION > AURA)
1. **SILHOUETTE LOCK** — 실루엣은 CORE만 결정. 나머지는 형태 변경 금지.
2. **FACE = EXPRESSION ONLY** — 얼굴 구조 고정, 눈/눈썹/입만 변화.
3. **AURA = NON-PHYSICAL** — 빛·입자·색·공기만. 오브젝트/배경 장식 금지.
4. **ITEM LIMIT** — 메인 1(CORE) + 서브 1(optional) = **최대 2개**. 나머지 제거.
5. **CONFLICT RESOLUTION** — 왕관vs무기→CORE 유지 / 화vs수→AURA로 블렌딩 / 밝vs어두→중간톤 / 다중속성→가장 강한 1개만.

## 🎨 MASTER STYLE LOCK (고정)
2.5등신(머리43%/몸57%) · 정중앙 · 정면 · 캔버스 77% · 흰/투명 배경 · flat cel 1~2층 · thick clean outline · 큰 유광 눈(하이라이트 2~3) · 작은 손발 · 사실주의❌ · 원근왜곡❌ · 64px 실루엣 가독 · single character.

## 🗺️ ROLE MAPPING (번역표 일부)
**주성→CORE:** 자미=왕/중심/왕관구조 · 파군=탐험/비대칭/이동성 · 태양=확장/방사형/밝은구조 (전체는 [[design-bible]] 14주성)
**십성→EXPRESSION:** 식신=밝은웃음 · 상관=자신감 · 편관=날카로운눈 · 정인=부드러움 · 비견=든든함 (전체 10종 앱 SIP_FACE)
**오행→AURA:** 목=잎/자연입자 · 화=빛/불꽃 · 토=안정/먼지입자 · 금=금속빛/반사 · 수=안개/물결

## 🧾 출력 구조
```
[MASTER STYLE LOCK]
[CORE LAYER]  silhouette + outfit + main accessory(1)
[EXPRESSION LAYER]  face only
[AURA LAYER]  color + lighting + particles
[NEGATIVE]
```

## 📲 앱 구현 (compileDestinyChar)
- CORE = `STAR_CORE[명궁주성]`(시 없으면 `EL_CORE[일간오행]`) + `STEM_COSTUME[천간]`(재질) + `BRANCH_MOTIF[지지]`(트림 패턴, 아이템❌)
- EXPRESSION = `SIP_FACE[월간 십성]` (얼굴만)
- AURA = `EL_AURA[최강오행]` + 신강약→강도(soft/balanced/bold) + 용신색 charm(서브 아이템 1, 총 2개 제한)
- 꼬리 규칙: "fuse into ONE character, max two accessories, CORE silhouette, readable small"
- 자동생성=pollinations(즉시·화풍 드리프트 있음) / 고화질·화풍고정=GPT `gpt-image-1` 이미지 레퍼런스(키 필요)

## 🚀 다음 단계
① CORE/EXPRESSION/AURA 자동선정 고도화 ② 충돌해결 v2(자미왕vs파군파괴) ③ 합성비율(Core70/Aura30) ④ 70종 도감 배치 생성. 관련: [[character-compiler]] · [[design-bible]]
