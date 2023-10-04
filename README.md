## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Next.js 사용 팁

1. 페이지 컴포넌트 파일들은 src/app 하위에 생성하면 됨

- 라우팅은 폴더를 생성하면 사용 가능, 동적 라우팅의 경우 `/[파라미터]`로 생성할 것
- 이 밖에도 지정 파일들이 있으니(page.tsx, layout.tsx, error.tsx 등) 공식문서 참고할 것

2. components, utils, assets 등의 파일 폴더들은 src 아래 app 폴더와 동등한 레벨에 생성 및 사용할 것

3. 기본값으로 server component로 사용됨. useState등의 훅을 사용하려면 'use client'를 파일 최상단에 기입할 것

## 간단한 코드 컨벤션

### 커밋 컨벤션

| 태그 이름        | 설명                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| Feat             | 새로운 기능을 추가할 경우                                                                                |
| Fix              | 버그를 고친 경우                                                                                         |
| Design           | CSS 등 사용자 UI 디자인 변경                                                                             |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                                                                   |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야하는 경우                                                                   |
| Style            | 코드 포맷 변경, 세미 콜론 누락, 오타 수정, 탭 사이즈 변경, 변수명 변경 등 코어 로직을 안건드는 변경 사항 |
| Refactor         | 프로덕션 코드 리팩토링                                                                                   |
| Comment          | 필요한 주석 추가 및 변경                                                                                 |
| Docs             | 문서(Readme.md)를 수정한 경우                                                                            |
| Rename           | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                                                       |
| Remove           | 파일을 삭제하는 작업만 수행한 경우                                                                       |
| Test             | 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)                                                       |
| Chore            | 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)                                |

### 네이밍 컨벤션

1. **\*.tsx** : PascalCase
2. **\*.ts** : camelCase
3. 페이지 폴더 (**pages/**/**\***.tsx\*\*) : index.tsx
4. 나머지 폴더 : **kebab-case**
5. constants : camelCase
6. git branch name : kebab-case

### 폴더 구조

```
├── 📁 node_modules
├── 📁 public
├── 📁 src
│  ├── 📁 assets
│  │   ├── 📁 contants
│  │   ├── 📁 fonts
│  │   └── 📁 images
│  ├── 📁 components
│  │   ├── 📁 layout
│  │   ├── 📁 ...
│  │   └── ...
│  ├── 📁 app
│  │   ├── 📁 home
│  │   ├── 📁 ...
│  │   ├── 📁 ...
│  │   ├── page.tsx
│  │   ├── layout.tsx
│  │   └── global.css
│  └── 📁 utils
│      ├── 📁 hooks
│      ├── 📁 recoil
│      └── 📁 types
├── .eslintrc.json
├── .gitgnore
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfjg.json
└── yarn.lock
```
