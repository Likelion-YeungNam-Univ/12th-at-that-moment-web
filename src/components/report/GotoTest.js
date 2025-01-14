import React from 'react'
import {
    GotoTestWrapper,
    TopTitle,
    IconsWrapper,
    LeftIcon,
    CenterIcon,
    RightIcon,
    LeftTop,
    LeftBottom,
    CenterTop,
    CenterBottom,
    RightTop,
    RightBottom,
    BottomBtn,
    GotoBtn,
    GotoBtnColored,
    BottomText,
    TitleText,
    HigLight
} from 'styles/report/GotoTestItem-styled';
import img_check from 'assets/images/report_check.png';
import { CheckImg } from 'styles/report/ReportPage-styled';
import { useNavigate } from 'react-router-dom';

function GotoTest({ lastTest, gotest, daysForNext, daysForTest }) {
  const navigate = useNavigate();
  console.log("lastTest=", lastTest);
  return (
    <GotoTestWrapper>
        <TopTitle>
          <TitleText>
            이번주 나의 증상을<br /><CheckImg src={img_check}/><HigLight>테스트</HigLight>로 기록해보세요
          </TitleText>
        </TopTitle>

        <IconsWrapper>
          <LeftIcon>
            <LeftTop>마지막 테스트</LeftTop>
            <LeftBottom>
              {lastTest || "없음"}
            </LeftBottom>
          </LeftIcon>

          <CenterIcon gotest={gotest}>
            <CenterTop gotest={gotest}>이번 테스트</CenterTop>
            <CenterBottom gotest={gotest}>
              {daysForTest === 0 ? 'D-DAY' : `D-00${daysForTest}`}
            </CenterBottom>
          </CenterIcon>

          <RightIcon>
            <RightTop>다음 테스트</RightTop>
            <RightBottom>
              {daysForNext < 10 ? `D-00${daysForNext}` : `D-0${daysForNext}`}
            </RightBottom>
          </RightIcon>
        </IconsWrapper>

        <BottomBtn>
          {daysForTest === 0 ? (
            <GotoBtnColored onClick={() => { navigate('/symptomTest') }}>나의 증상 테스트하기</GotoBtnColored>
          ) : (
            // 버튼 비활성화
            <GotoBtn>나의 증상 테스트하기</GotoBtn>
          )}
          {daysForTest !== 0 && <BottomText>매주 테스트를 통해 리포트를 제공받아요</BottomText>}
        </BottomBtn>
    </GotoTestWrapper>
  )
}

export default GotoTest;
