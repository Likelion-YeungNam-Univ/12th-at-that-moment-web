import React from 'react';
import {
  Wrapper,
  Header,
  Title,
  Num,
  Question,
  AnsContainer,
  Answer,
  NextBtn,
  // Img,
} from 'styles/selfTest/selfTest-styled';
import { useSelfTest } from 'hooks/test/selfTestHook';

function SelfTest() {
  const {
    selectedAnswer,
    handleAnswerClick,
    isButtonActive,
    handleNextButtonClick,
  } = useSelfTest('/SelfTest10');

  return (
    <Wrapper>
      <Header>
        <Title>갱년기 자가진단 테스트</Title>
        <Num>
          <span>09</span>/10
        </Num>
        <Question>
          갑자기 어지럽거나 균형을 잃을 것 같은 느낌이 드는 경우가 있나요?
        </Question>
      </Header>
      {/* <Img src={test_10} alt="test10" /> */}
      {/* 이미지 넣어주시면 됩니다! */}
      <AnsContainer>
        <Answer
          onClick={() => handleAnswerClick('네')}
          isSelected={selectedAnswer === '네'}
        >
          네
        </Answer>
        <Answer
          onClick={() => handleAnswerClick('아니요')}
          isSelected={selectedAnswer === '아니요'}
        >
          아니요
        </Answer>
      </AnsContainer>
      <NextBtn
        disabled={!isButtonActive}
        style={{
          backgroundColor: isButtonActive ? '#9180FF' : '#DDDDDD',
          color: isButtonActive ? '#FFFFFF' : '#B3B3B3',
          cursor: isButtonActive ? 'pointer' : 'not-allowed',
        }}
        onClick={handleNextButtonClick} // 클릭 시 페이지 이동
      >
        다음
      </NextBtn>
    </Wrapper>
  );
}

export default SelfTest;
