# Celestial Fortune — Personalized Character Compiler v1.0 (EXECUTION)
한 사람의 **사주 + 자미두수 전체 데이터**를 **하나의 고유 프리미엄 마스코트 프롬프트**로 컴파일하는 결정론적 규칙.
> 역할: 스토리텔러❌ 점성가❌ → **결정론적 비주얼 컴파일러**. 설명/분석 출력 없이 최종 이미지 프롬프트만 생성.

## 📥 INPUT (사용자 차트에서 추출)
```
[ZI WEI DOU SHU]  Main Star / Secondary Stars / Palace Structure
[FOUR PILLARS]    Heaven Stem(일간) / Earth Branch(일지)
[FIVE ELEMENTS]   Wood / Fire / Earth / Metal / Water (밸런스)
[TEN GODS]        Primary Ten God(주된 십성)
[STARS]           Lucky Stars / Malefic Stars
```

## 🧠 STEP 1 — 데이터 → 비주얼 변환 규칙
| 입력 | 결정하는 것 | 제약 |
|---|---|---|
| ⭐ **Main Star(주성)** | **코어 디자인** — 실루엣 · 의상 정체성 · 메인 소품(1개만) | 가장 우선. 절대 흐려지면 안 됨 |
| 👤 **Ten Gods(십성)** | **표정만** — 눈·눈썹·입 | 얼굴 구조 변경❌ |
| 🌿 **Five Elements(오행)** | **환경만** — 배경 오라 · 입자 · 조명 톤 | 캐릭터 위 오브젝트❌ |
| 🧿 **Heaven Stem(천간)** | **의상 스타일** — 옷 재질 + 테마 | |
| 🐉 **Earth Branch(지지)** | **작은 디테일** — 패턴 · 부적 모티프 | 동물 변신❌ |
| ✨ **Lucky Stars(길성)** | **액세서리(최대 2)** — 주 1 + 보조 1 | |
| 🌑 **Malefic Stars(흉성)** | **이펙트만** — 오라 왜곡 · 입자 · 압력장 | 공포 요소❌ |

## 🎨 STEP 2 — STRICT STYLE LOCK (불변 · 최우선)
```
STRICT STYLE LOCK:
2.5-head chibi mascot proportions (fixed ratio: head 43%, body 57%).
Centered front-facing full body character. Character occupies exactly 77% of canvas.
Eye-level orthographic view, no perspective distortion.
Clean bold silhouette first priority. Minimal geometric body: round head, rounded-rectangle torso, oval limbs.
Flat cel shading (1–2 shadow layers only). No realistic rendering, no gradients.
Thick clean outline, smooth curves, no sketch texture.
Large glossy eyes with 2–3 white highlights. Tiny nose or no nose. Small simple mouth.
White or transparent background only. No environment. Single character only.
Readable at 64x64 via silhouette alone.
Identity encoded ONLY via: 1 main accessory (identity core) + 1 optional secondary + color palette + aura particles.
DO NOT add extra complexity / realism. DO NOT change proportions.
```

## ⚖️ STEP 3 — 충돌 규칙
1. **주성 최우선** (무엇보다)
2. 액세서리 최대 2개로 축소
3. 남는 요소는 **배경 오라**로 변환
4. 실루엣 명료성 절대 유지

## 🧾 STEP 4 — 최종 출력 형식 (이 구조만)
```
[MASTER PROMPT]
[CORE CHARACTER: 주성 해석]
[FACE: 십성 표정 매핑]
[COSTUME: 천간 + 지지 매핑]
[ACCESSORY: 길성 선택]
[ENVIRONMENT: 오행 오라]
[EFFECT: 흉성 오라]
[NEGATIVE PROMPT]
```

## ✅ MASTER PROMPT (항상 맨 앞)
```
cute kawaii premium mascot character, Korean webtoon style, high-end mobile game mascot design, 2.5-head-tall proportions, identical body proportions across all characters, full body, centered, front view, character fills exactly 77% of the canvas, large glossy sparkling eyes with multiple white highlights, tiny nose, rosy blush cheeks, soft rounded face, soft fluffy hair, tiny hands and feet, clean smooth line art, soft pastel cel shading, subtle rim light, highly polished illustration, premium collectible character, adorable but elegant, silhouette instantly recognizable, high detail costume, unique signature accessory, magical aura, plain white background, transparent background compatible, 3072x3072 quality
```
## 🚫 NEGATIVE PROMPT (항상 포함)
```
low quality, blurry, realistic, photorealistic, semi realistic, anime proportions, long legs, different body size, oversized head, tiny body, cropped, close-up, side view, back view, multiple characters, animal body, furry, monster, horror, ugly face, bad anatomy, extra fingers, missing fingers, deformed hands, watermark, logo, text, background scenery, dark lighting, messy composition, inconsistent style
```

---
## 📲 앱 연동 (구현 메모)
- 앱은 이미 차트를 계산함: 명궁 주성 · 일간(천간) · 일지(지지) · 오행 밸런스 · 주된 십성 · 길성/흉성.
- JS 컴파일러 `compileDestinyCharacter(pr)` → 위 7블록 프롬프트 문자열 생성.
- 슬롯 매핑 사전: [[design-bible]]의 14주성/천간/지지/십성/오행 줄을 부품으로 재사용.
- 렌더링: (A) 프롬프트 복사 → Nano Banana 고화질 / (B) pollinations 즉시 미리보기 / (C) 둘 다.
- 참고: [[design-bible]] = 70캐릭터 라이브러리(팀 슬롯용), 본 문서 = 1인 1캐릭터 합성용.
