export interface UserProfile {
  email?: string;
  username: string;
  nickname: string;
  password: string;
  interests: string[];
}

export interface UserCalendar {
  id: number;
  title: string;
  content: string;
  startDay: string;
  endDay: string;
  startTime: string;
  endTime: string;
  isHoliday: boolean;
}

// 구조 확인 필요
export interface UserStudyRoom {
  id: number;
  joinData: Date;
  permission: string;
  studyRoomId: number;
  user: { email: string; password: string };
}

export type MyaccountProps = {
  UserProfile: UserProfile;
};

export interface UserData {
  userProfile: UserProfile | null;
  userCalendars: UserCalendar[];
  userScrappedPosts: null;
  userPosts: null;
}