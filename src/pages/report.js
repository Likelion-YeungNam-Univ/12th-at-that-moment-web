import LineChart from '../components/report/LineChart';
import {ReportContainer, TopWrapper, GraphWrapper, Title, TapWrapper, TapBtnWrapper, TapBtn1, TapBtn2,} from '../styles/report/ReportPage-styled';
import SlideAnimation from '../components/report/SlideAnimation';

function Report() {
  return (
    <ReportContainer>
      {/* 상단 리포트 컴포넌트 */}
      <TopWrapper>
        {/* TODO : 데이터는 추후 props로 구현 예정 - 임시로 text입력 상태*/}
        <Title>
          홀링 리포트로 나의 증상을<br />한눈으로 확인하세요
        </Title>

        {/* 탭 컴포넌트 */}
        <TapWrapper>
          {/* 탭버튼 */}
          <TapBtnWrapper>
            <TapBtn1>나의 증상분석</TapBtn1>
            <TapBtn2>짝꿍의 증상분석</TapBtn2>
          </TapBtnWrapper>
          {/* 그래프*/}
          <GraphWrapper>
            <LineChart></LineChart>
          </GraphWrapper>


          {/* 슬라이드*/}
          {/* <SlideWrapper></SlideWrapper> */}
          <SlideAnimation></SlideAnimation>
        </TapWrapper> 
      </TopWrapper>


      {/* TODO: 하단 테스트 컴포넌트 */}

    </ReportContainer>
  );
}

export default Report;
