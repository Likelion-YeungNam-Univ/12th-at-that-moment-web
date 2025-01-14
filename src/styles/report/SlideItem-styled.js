import styled, { css } from 'styled-components';

// ----- 공통속성 스타일링
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
// wrapper 공통 스타일링
export const wrapperStyle = css`
  width: 263px;
  height: 213px;
  border-radius: 13px;
  margin: 40px 0 0 56px;
  padding: 25px 25px 24px 26px;
`

// 현재 주차 wrapper
export const CurrenttWrapper = styled.div`  
  ${flexCenter}
  ${wrapperStyle}
  background-color: #9180FF;
  border: 1px solid #FFFFFF;

`;
// 지난 주차 wrapper
export const PasttWrapper = styled.div`  
  ${flexCenter}
  ${wrapperStyle}
  background-color: #ffffff;
  border: 1px solid #DDDDDD;
`;


// 현재 주차 리포트 컴포넌트
export const Current = styled.div`  
  width: 212px;
  height: 164px;
`;
// 지난 주차 리포트 컴포넌트
export const Past = styled.div`  
  width: 212px;
  height: 164px;

`;


export const SlideTop = styled.div`  
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 212px;
  height: 30%;
`;
export const SlideBottom = styled.div`  
  width: 212px;
  height: 87px;
  margin-top: 20px;
`;

// n주차 text 공통 스타일링
export const weekStyle = css`
  width: 80px;
  height: 29px;
  border-radius: 21px;
  padding: 15px, 4px, 15px;
  font-size: 15px;
  font-weight: 700;
`
// n주차 text
export const CurrentWeek = styled.div` 
  ${flexCenter}
  ${weekStyle}
  background-color: #ffffff;
  color: #9180FF;
`;
export const PastWeek = styled.div` 
  ${flexCenter}
  ${weekStyle}
  background-color: #B3B3B3;
  color: #ffffff;
`;

// 더보기버튼 공통 스타일링
const moreBtn = css`
  ${flexCenter}
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`
// 더보기버튼
export const CurrentBtn = styled.div`  
  ${moreBtn}
  color: #ffffff;
`;
export const PastBtn = styled.div` 
  ${moreBtn}
  color: #5B5B5B;
`;

// 랭킹 text
export const CurrentRank = styled.div`  
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
`;
export const PastRank = styled.div`  
  color: #9180FF;
  font-weight: 1000;
  font-size: 14px;
`;

// 설명 text
export const CurrentOverView = styled.div`  
  color: #ffffff;
  font-weight: 700;
  font-size: 22px;
`;
export const PastOverView = styled.div`  
  color: #000000;
  font-weight: 700;
  font-size: 22px;
`;
export const TextDecoWhite = styled.span`  
  color: #ffffff;
  text-decoration: underline;
`;
export const TextDecoBlue = styled.span`  
  color: #5643D1;
  text-decoration: underline;
`;
export const TextDecoGray = styled.span`  
  color: #5B5B5B;
  text-decoration: underline;
`;




// Swiper.js 컴포넌트 스타일링
export const SwiperWrapper = styled.div`
  width: 600px;
`;