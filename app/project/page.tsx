import React from 'react'

export default function Projectpage() {
  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        color: '#333',
        lineHeight: '1.6',
        fontSize: '16px',
      }}
    >
      <h1 style={{ fontSize: '2em', color: '#111', marginBottom: '20px' }}>
        개인 목표 트래커 프로젝트
      </h1>
      <p>
        저희 팀은 <strong>개인 목표 트래커</strong>라는 웹 서비스를 개발하려고
        합니다. 이 플랫폼은 사용자가 목표를 설정하고, 마감일, 중요도, 우선순위를
        추가하여 목표를 관리할 수 있도록 합니다. 목표는 세부 계획 단위로 나누어
        진행 상황을 기록하고, 목표 달성률을 시각적으로 확인할 수 있는 대시보드를
        제공합니다. 또한, 사용자는 목표를 다른 사용자들과 공유하고 피드백을
        주고받을 수 있어 소셜 상호작용을 통해 동기부여를 얻을 수 있습니다.
      </p>

      <h2
        style={{
          fontSize: '1.75em',
          marginTop: '30px',
          marginBottom: '10px',
          color: '#222',
        }}
      >
        주요 기능
      </h2>
      <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
        <li style={{ fontSize: '1.1em', marginBottom: '8px' }}>
          <strong>회원가입 및 로그인</strong>: 사용자는 개인 계정을 생성하고
          소셜 로그인 기능(Google, GitHub 등)을 통해 쉽게 로그인할 수 있습니다.
        </li>
        <li style={{ fontSize: '1.1em', marginBottom: '8px' }}>
          <strong>목표 생성 및 관리</strong>: 목표를 생성하고 세부 계획을 작성할
          수 있으며, 목표의 진행 상황을 시각적으로 관리할 수 있습니다.
        </li>
        <li style={{ fontSize: '1.1em', marginBottom: '8px' }}>
          <strong>소셜 피드백 기능</strong>: 사용자끼리 목표를 공유하고, 실시간
          피드백 및 응원 메시지를 주고받을 수 있습니다.
        </li>
        <li style={{ fontSize: '1.1em', marginBottom: '8px' }}>
          <strong>알림 기능</strong>: 마감일 및 피드백에 대한 실시간 알림 기능을
          제공합니다.
        </li>
      </ul>

      <h2
        style={{
          fontSize: '1.75em',
          marginTop: '30px',
          marginBottom: '10px',
          color: '#222',
        }}
      >
        기술적 구조
      </h2>
      <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
        <li style={{ fontSize: '1.1em', marginBottom: '8px' }}>
          <strong>프론트엔드</strong>: Next.js와 React를 사용하여 사용자에게
          빠르고 직관적인 화면을 제공합니다. 프로젝트 초기에는 기본적인
          컴포넌트와 페이지 전환을 통해 UI를 구축합니다.
        </li>
        <li style={{ fontSize: '1.1em', marginBottom: '8px' }}>
          <strong>백엔드</strong>: Next.js의 API Routes 기능을 이용해 간단한
          API를 구현하고, 사용자의 목표 데이터를 서버에 저장하거나 불러오는
          역할을 합니다.
        </li>
        <li style={{ fontSize: '1.1em', marginBottom: '8px' }}>
          <strong>데이터 저장</strong>: 목표 데이터를 간단하게 저장하기 위해
          JSON 파일이나 로컬 스토리지를 활용해 백엔드의 복잡성을 줄이고, 나중에
          MongoDB 같은 데이터베이스로 확장할 수 있습니다.
        </li>
        <li style={{ fontSize: '1.1em', marginBottom: '8px' }}>
          <strong>인증 시스템</strong>: 소셜 로그인 기능(Google, GitHub)을 통해
          사용자가 쉽게 로그인할 수 있도록 NextAuth.js를 사용합니다. 간단한
          설정으로 로그인 기능을 구현합니다.
        </li>
        <li style={{ fontSize: '1.1em', marginBottom: '8px' }}>
          <strong>배포</strong>: Vercel을 통해 프로젝트를 쉽게 배포할 수 있으며,
          별도의 서버 설정 없이 코드만으로 배포가 가능합니다.
        </li>
      </ul>

      <h2
        style={{
          fontSize: '1.75em',
          marginTop: '30px',
          marginBottom: '10px',
          color: '#222',
        }}
      >
        기대 효과
      </h2>
      <p>
        이 프로젝트를 통해 사용자는 체계적이고 시각적으로 목표를 관리할 수
        있으며, 실시간 피드백을 통해 지속적인 동기부여를 받을 수 있습니다. 또한,
        저희 팀은 백엔드와 프론트엔드 통합 개발 과정을 경험하면서, 협업과 문제
        해결 능력을 향상시키는 좋은 기회가 될 것입니다.
      </p>
    </div>
  )
}
