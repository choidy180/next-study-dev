# tsconfig.json
- Typescript는 Javascript의 타입설정을 위한 슈퍼셋 언어로, 컴파일 과정에서 Javascript 변환(트랜스파일)이 필요하다.
  이러한 트랜스파일 과정에서 필요한 여러 옵션들을 설정하는 파일이 tsconfig.json 인 것이다.
  또한, 이 tsconfig.json 파일이 존재하는 위치가 프로젝트의 root폴더가 된다.

  compilerOptions : 컴파일 과정에 관련된 옵션들이 설정되어있다.
  include / exclude 컴파일에 포함 / 제외할 경로 (* - 모든문자, ? - 해당문자, **/ - 모든 하위 디렉토리까지)
  baseUrl, paths : 절대경로 사용으로 import 구문 간소화. 파일의 위치가 변경되어도 유연하게 대처할 수 있다. 
  typeRoots : node_modules 에 설치된 타입 외, 사용자 설정 타입을 전역에서 사용할 수 있도록 types 디렉토리도 루트로 지정
  declaration, esModuleInterop : .d.ts 파일생성을 통해 별도관리하며, 따로 타입 import 없이도 전역에서 사용하기 위함

# ESLint
- ESLint는 Javascript, Typescript 의 코딩 스타일 도구이다. JS코드가 ECMAScript Specification에 부합하는지 검사하는 툴이다.
  코딩 스타일 가이드라인을 지정하여, 패턴을 준수하지 않을 경우 사후에 발생할 수 있는 잠재적 문제점을 사전에 방지하기 위해 사용되는 것이다.
  * 본래, TS는 TSLint 라는 코딩 스타일 도구가 있었으나, 현재는 ESLint 하나로 모두 linting이 가능 (단, TS는 별도 플러그인 필요)

  1) parser(파서)
  ESLint는 구문 분석을 위해 기본적으로 Espree 파서를 사용한다.
  이외에도, Babel과 함께 사용되는 babel-eslint, TS 구문 분석을 위해 사용되는 @typescript-eslint/parser 등이 있다.

  2) parserOptions(파서 옵션)
  
  ESLint 사용을 위해 지원하려는 Javascript 언어의 옵션을 지정할 수 있다. 버전 및 모듈사용 여부 등을 설정한다.

  ecmaVersion : 사용할 ECMAScript 버전 설정
  sourceType : parser의 export 형태를 설정
  ecmaFeatures : ECMAScript 언어 확장 기능을 설정
  globalReturn - 전역 스코프 사용 여부 (node, common.js 환경에서 최상위 스코프는 module)
  impliedStric - strict mode 사용 여부
  jsx - ECMAScript 규격의 JSX 사용 여부

  3) plugins(플러그인)
  ESLint 문법이 정의된 npm 모듈이다. 통상, eslint-plugin-[플러그인 이름] 으로 명명된다.

  4) extends(확장)
  extends는 추가한 플러그인을 사용할 규칙을 설정한다.
  플러그인은 일련의 규칙의 집합이며, 플러그인을 추가하여도 모든 규칙이 적용되지 않는다.
  그렇기에, 플러그인에 속한 규칙을 사용하기 위해 extends에서 설정해줘야하는 것이다.

  5) rules(규칙)
  ESLint에는 프로젝트에서 사용하는 규칙을 수정할 수 있다. 규칙은 기본적으로 아래 옵션과, 추가옵션은 배열 리터럴 구문으로 지정한다.
  "off" 또는 0 : 규칙을 사용하지 않음
  "warn" 또는 1 : 규칙을 경고로 사용
  "error" 또는 2 : 규칙을 오류로 사용

  6) env(환경)
  env는 global 객체를 ESLint가 인식하게 하는 부분으로, 대표적으로 "browser": true 로 설정하면 window 혹은 document 로 할당되는 것이다.
  
  7) settings
  모든 규칙에 의해 공유되는 설정을 하는 부분이며, 대표적으로는 절대경로를 src 폴더에서 사용하기 위해 설정하는 경우가 있다.

# Dark Mode
다크모드는 애플, 구글, 인스타그램 등 세계적인 브랜드들이 애용하기 시작하면서, FE개발에선 UI/UX를 위한 필수기능이 되었다.
OLED 디스플레이의 배터리 절약, 버닝의 위험성 감소, 그리고 밤이나 어두운 환경에서 눈의 피로도를 줄일 수 있는 장점들이 있다.
이러한 다크모드를 구현하기 위해서는 서론해서 말했듯 몇 가지 고려와 설정이 필요하다.

테마 및 스타일 세팅 : 색상값을 변수에 저장. 이는 라이트/다크 모드 각각 다른 색을 가지며, 변수명도 색상이 아닌 용도 등으로 설정.
테마 상태관리 : 라이트/다크 모드를 어떤 형태로 관리할지를 설정. (이는 기술스텍, 디렉토리 구조, 초기값 세팅 등과도 연관)
테마 유지기능 : 다크모드를 기설정한 유저는 이를 기본값으로 제공, 브라우저 설정과도 연결해줘야 한다.
테마 SSR 적용 : Next.js는 기본적으로 SSR 환경이며, 최초에 다크테마로 인한 깜빡임을 최소화하는 고민이 필요.

src
├── components
│   └── provider
│       └── LayoutProvider.tsx ─────── Styled-Components, 색상관련 설정
│
├── hooks
│   └── useTheme.ts ────────────────── 테마상태 및 메서드 제공
│
├── style 
│   ├── global.ts ──────────────────── 색상변수 및 전역 스타일 
│   └── theme.ts
│
└── pages
    ├── _app.tsx
    ├── _document.tsx ──────────────── SSR 시 초기값 설정추가
    └── index.tsx