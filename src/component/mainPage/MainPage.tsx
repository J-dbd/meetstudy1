"use client";
import useFetch from "@/hooks/useFetch";
import { UserData } from "@/lib/types";

import Wrapper from "@/component/styled-components/Wrapper";
import { FlexBoxV } from "@/component/styled-components/FlexBoxes";
import { Title } from "@/component/styled-components/TextBoxes";
import { DailyList } from "@/component/mainPage/mainClinentComponents";
import MainSubLoading from "@/component/mainPage/loading";

import dt from "@/lib/designToken/designTokens";
import MainStyledPack from "@/component/mainPage/mainStyledComponents";
const tokens = dt.DesignTokenVarNames;

const { SectionContainerH, SectionContainerV, PartContainerV, PartContainerH } =
  MainStyledPack;
// 첫번째 구역 : 일정과 참여중인 스터디룸(미완성)
export const FirstSectionMain = () => {
  const [userData, error] = useFetch<UserData>("/api/mypage");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return (
      <Wrapper $bgColor={tokens.colors.simple.whitebg}>
        {" "}
        <MainSubLoading />;
      </Wrapper>
    );
  }

  return (
    <Wrapper $bgColor={tokens.colors.simple.whitebg}>
      <SectionContainerH>
        <PartContainerV>
          <Title
            htype={3}
            content="일정"
            fontSize={tokens.fontSize.web.medium}
            color={tokens.colors.simple.blackbasic}
          />
          <DailyList userCalendars={userData.userCalendars} />
        </PartContainerV>
        <PartContainerV>
          <FlexBoxV>
            <Title
              htype={3}
              content="내가 참여중인 스터디룸"
              color={tokens.colors.simple.blackbasic}
            />
            {/* {userStudyRooms && (
            <ul>
              {userStudyRooms.map((userStudyRoom, idx) => {
                return <li key={idx}>{userStudyRoom.studyRoomId}</li>;
              })}
            </ul>
          )} */}
          </FlexBoxV>
        </PartContainerV>
      </SectionContainerH>
    </Wrapper>
  );
};

// 게시글 섹션(미완성, 향후 게시판 컴포넌트 재활용 예정)
export const SecondSectionMain = () => {
  const [userData, error] = useFetch<UserData>("/api/mypage");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return (
      <Wrapper $bgColor={tokens.colors.simple.whitebg}>
        {" "}
        <MainSubLoading />;
      </Wrapper>
    );
  }

  return (
    <Wrapper $bgColor={tokens.colors.simple.whitebg}>
      <SectionContainerV>
        <PartContainerH>
          <Title
            htype={3}
            content="내가 스크랩한 게시글"
            fontSize={tokens.fontSize.web.medium}
            color={tokens.colors.simple.blackbasic}
          />
          <DailyList userCalendars={userData.userCalendars} />
        </PartContainerH>
        <PartContainerH>
          <FlexBoxV>
            <Title
              htype={3}
              content="내가 작성한 게시글"
              color={tokens.colors.simple.blackbasic}
            />
            {/* {userStudyRooms && (
            <ul>
              {userStudyRooms.map((userStudyRoom, idx) => {
                return <li key={idx}>{userStudyRoom.studyRoomId}</li>;
              })}
            </ul>
          )} */}
          </FlexBoxV>
        </PartContainerH>
      </SectionContainerV>
    </Wrapper>
  );
};