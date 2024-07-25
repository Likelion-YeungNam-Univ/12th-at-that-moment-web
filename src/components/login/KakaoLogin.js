import React from 'react';
import login_kakao from 'assets/images/login_kakao.png';

const KakaoLogin = () => {
  const Rest_api_key = 'd6f6575143c8fbcb6742cad1756bc92f'; // REST API KEY
  const redirect_uri = 'http://43.201.5.161:8080/auth/token'; // Redirect URI
  // OAuth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <img
        src={login_kakao} // import한 이미지 사용
        alt="카카오 로그인"
        style={{ cursor: 'pointer' }} // 커서를 포인터로 변경하여 클릭 가능함을 나타냄
        onClick={handleLogin}
      />
    </>
  );
};

export default KakaoLogin;
