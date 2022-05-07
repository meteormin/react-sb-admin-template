# React + Bootstrap Theme SB-Admin

<img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/>
<img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white"/>
<img alt="Bootstrap" src ="https://img.shields.io/badge/Bootstrap-7952B3.svg?&style=for-the-badge&logo=Bootstrap&logoColor=white"/>

- [bootstrap-sb-admin](https://github.com/StartBootstrap/startbootstrap-sb-admin)
- react-bootstrap
- react-redux
- redux-logger
- redux-thunk

## Structure

> src 하위만 설명

### assets

> css, 이미지 등

- css
- images

### components

> 재사용 가능한 컴포넌트의 집합

- layouts: 기본 레이아웃 구성 요소
- common: 공통으로 사용 가능한 독립적인 컴포넌트의 집합
- modals: modal 컴포넌트의 집합

### config

> 설정 관련 ts파일

**설정할 값들이 많아질 수 있어 설정들을 목적에 맞게 분리하여 사용한다.**

- index.ts: config 루트파일, 분리된 설정 파일들을 모아서 해당 파일을 통해 접근
- layouts.ts: 레이아웃 설정 파일
- menu.ts: 메뉴 설정 파일

### pages

> 실질적인 View

**[pages](./src/pages/README.md)**

- 실제 페이지를 구현하기 위해 필요한 컴포넌트들의 집합

### routes

> 라우팅 관련

- Router.tsx: 기본 라우터

### store

> Redux

- reducers: action, reducer의 집합, ducks패턴
- middleware: redux middleware
- sagas: redux-saga
- store.ts: configuration store

### utils

> 기타 유틸리티

### helpers.ts

utils하위의 JS 함수들을 하나의 모듈로 생성하여 사용할 수 있게

- auth: 로그인 인증 관련
- guard: 조건에 따라 컴포넌트 렌더링 여부와 redirect여부를 선택할 수 있는 컴포넌트, 함수의 집합
- api: api 호출 관련 모듈
- config: config 파일 객체화

## Rule

### Basic

- 기본 변수 및 함수는 camelCase
- React 컴포넌트와 Class는 PascalCase
- 그 외, camelCase

### React

- React 컴포넌트 파일은 .jsx로 작성
- React 컴포넌트가 없는(리엑트 설치 안해도 실행 가능한) 파일은 .js

### Redux

- Ducks 패턴 참조
- saga로직은 분리