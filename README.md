# React + Bootstrap Theme SB-Admin

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

### config

> 설정 관련 js파일

**설정할 값들이 많아질 수 있어 설정들을 목적에 맞게 분리하여 사용한다.**

- index.tsx: config 루트파일, 분리된 설정 파일들을 모아서 해당 파일을 통해 접근

### pages

> 실질적인 View

**[pages](./src/pages/README.md)**

- Container Component들의 집합
- Reducer를 여기서 호출하여 사용

### routes

> 라우팅 관련

- Router.tsx: 기본 라우트
- Protected.tsx: 인증 가드 역할
- Restricted.tsx: 접근 제한 역할, 조건에 따라 컴포넌트의 렌더잉르 할지 말지 결정하고 redirect로 다른 경로로 강제 이동시킬 수 있다.

### store

> Redux

- reducers: action, reducer의 집합, ducks패턴
- middleware: redux middleware
- sagas: redux-saga
- store.ts: configuration store

### utils

> 기타 유틸리티

### helpers.ts

- utils하위의 JS 함수들을 하나의 모듈로 생성하여 사용할 수 있게

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