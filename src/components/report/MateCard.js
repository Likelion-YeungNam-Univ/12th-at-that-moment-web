import {
    MissionCard,
    MissionConnectTitle,
    MissionConnectDescription,
    MissionConnectPlusBtn,
    MissionConnectStart,
    MissionConnectImg,
    MissionConnectNextBtn,
    MissionConnectTitleWrapper,
  } from 'styles/calendar/Mission-styled';
  import img_missionConnectNextBtn from 'assets/images/mission_connect_next_btn.svg';
  import img_missionConnectPlusBtn from 'assets/images/mission_connect_plus_btn.svg';
  import img_missionConnectMale from 'assets/images/mission_connect_img_male.svg';
  import img_missionConnectFemale from 'assets/images/mission_connect_img_female.svg';
  import { useNavigate } from 'react-router-dom';

  function MateCard({ gender }) {
    const navigate = useNavigate();
    const isCompleted = true; // 짝꿍리포트 컴포넌트를 위해 필요한 props값

    const goToStart = () =>{
      navigate('/kakaologin');
    }

    return (
      isCompleted && 
        <MissionCard completedStatus={isCompleted ? 'active' : 'inactive'}>
          <MissionConnectTitleWrapper>
          <MissionConnectTitle>짝꿍 리포트</MissionConnectTitle>
          <MissionConnectNextBtn
              src={img_missionConnectNextBtn}
          ></MissionConnectNextBtn>
          </MissionConnectTitleWrapper>
          <MissionConnectDescription>
          짝꿍의 증상테스트를 토대로 리포트를 받아, 어떤 변화가<br/>
          있었는지를 알아보고 그에 대한 솔루션을 받아보아요.
          </MissionConnectDescription>
          <MissionConnectPlusBtn
            src={img_missionConnectPlusBtn}
            onClick={goToStart}
          ></MissionConnectPlusBtn >
          <MissionConnectImg
            src={
              // 성별에 따라 이미지 변경
              (gender==='Male' ? (
                img_missionConnectMale
              ) : (
                img_missionConnectFemale
              ))
            }
          alt="Connect Image"
          ></MissionConnectImg>
          <MissionConnectStart>짝꿍과 커넥트 시작하기</MissionConnectStart>
      </MissionCard>
    )
  }

export default MateCard;