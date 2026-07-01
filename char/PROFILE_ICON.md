# Profile Icon Generator (GPT image-to-image) — 업로드 캐릭터 → 프로필 아이콘
**용도:** 기존 캐릭터(라이브러리 70종 등) 이미지를 GPT(`gpt-image-1`, 이미지 입력)에 넣어 **카톡/디스코드/SNS 프로필용 버스트(흉상) 원형 아이콘**으로 변환. 정체성(머리·색·의상·소품·무드)을 분석·보존하면서 매번 표정·포즈·배경색을 캐릭터에 맞게 동적으로.
> ⚠️ pollinations(글자→그림)로는 불가(업로드 캐릭터 분석 불가). **GPT 이미지 입력 필요.**

## 핵심 규칙
- **고정 기본캐릭 만들지 말 것.** 업로드 캐릭터의 정체성에 동적으로 적응.
- **보존:** 헤어스타일·길이·앞머리·질감·주색, 눈모양/스타일, 얼굴 분위기, 피부톤, 의상 정체성, 상체 디테일(넥라인·카라·리본·타이·소매·어깨), 액세서리·장식, 전체 성격/분위기.
- **구도:** 머리~어깨·상흉부만(버스트 클로즈업). 전신·다리·발❌. 얼굴이 메인, 상체 의상은 정체성 유지될 만큼만.
- **원형 프레이밍:** 캐릭터 전체(머리·헤어·액세서리·어깨·손·아웃라인)가 파스텔 원형 배경 **안에 완전히** + 여유 마진. 원 밖으로 삐져나옴❌. 필요시 살짝 작게.
- **표정 동적:** 매번 다르게(sleepy/smug/shy/annoyed/playful/relaxed/embarrassed/cheerful/tired/cool/soft-smiling/teasing/awkward-cute). 동일표정 반복❌.
- **포즈 동적:** 버스트용 단순 포즈(턱 괴기/고개 기울임/시선 회피/사이드글랜스/어깨 으쓱/살짝 기대기/졸린 슬라우치/가슴 앞 브이/소품 들기/볼 부풀리기/팔짱 가슴컷/손 입가). 동일포즈·전신·넓은포즈❌.
- **배경:** 흰 외부 + 큰 파스텔 원형 1개 + 원 안에만 미니 두들(별·점·반짝·스크리블·기하·퍼프). **배경색은 캐릭터 의상·헤어·액세서리·무드에서 동적 추출.** 고정색❌. 두들 원 밖❌.
- **컬러:** 캐릭터에서 추출한 제한 팔레트, 소프트·파스텔·정돈.

## 스타일
clean 2D anime, cute chibi, large expressive face, small upper body, smooth bold lineart, minimal cel shading, soft glossy highlights, high readability at small size, modern Korean anime profile-icon aesthetic, sticker-like finish, soft rounded shapes, polished.

## 사용법
GPT(이미지 생성)에 **캐릭터 1장 업로드 + 위 규칙 붙여넣기** → 원형 버스트 프로필 아이콘. 결과를 폴더에 넣으면 앱 아바타/프로필로 활용.
관련: [[design-bible]] · [[fusion-engine]] · [[character-compiler]]
