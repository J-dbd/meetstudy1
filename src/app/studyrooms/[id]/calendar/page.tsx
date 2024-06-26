"use client";

import React, { useState, useEffect } from "react";
import StyledStudyRoomIndex from "@/app/studyrooms/StudyRoomIndexClientComponents";
import { Title } from "@/component/styled-components/TextBoxes";
import { Calendar, momentLocalizer, SlotInfo } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

interface Event {
  id: number;
  title: string;
  allDay?: boolean;
  start: Date;
  end: Date;
  desc?: string;
}

const initialEvents: Event[] = [
  {
    id: 0,
    title: "Board meeting",
    start: new Date(2024, 5, 4, 9, 0, 0), // June 4, 2024, 9:00 AM
    end: new Date(2024, 5, 4, 11, 0, 0), // June 4, 2024, 11:00 AM
    allDay: false,
  },
  {
    id: 1,
    title: "Team Lunch",
    start: new Date(2024, 5, 10, 12, 0, 0), // June 10, 2024, 12:00 PM
    end: new Date(2024, 5, 10, 13, 0, 0), // June 10, 2024, 1:00 PM
    allDay: false,
  },
  {
    id: 2,
    title: "Project Deadline",
    start: new Date(2024, 5, 15, 0, 0, 0), // June 15, 2024, All day
    end: new Date(2024, 5, 15, 23, 59, 59), // June 15, 2024, All day
    allDay: true,
  },
  {
    id: 3,
    title: "Client Meeting",
    start: new Date(2024, 5, 20, 14, 0, 0), // June 20, 2024, 2:00 PM
    end: new Date(2024, 5, 20, 15, 30, 0), // June 20, 2024, 3:30 PM
    allDay: false,
  },
  {
    id: 4,
    title: "Workshop",
    start: new Date(2024, 5, 25, 10, 0, 0), // June 25, 2024, 10:00 AM
    end: new Date(2024, 5, 25, 12, 0, 0), // June 25, 2024, 12:00 PM
    allDay: false,
  },
];

const { SearchResultSection, SearchBarWarpper } = StyledStudyRoomIndex;

import dt from "@/lib/designToken/designTokens";
const tokens = dt.DesignTokenVarNames;
const calender = () => {
  const [eventsData, setEventsData] = useState<Event[]>(initialEvents);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading, for example 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSelect = ({ start, end }: SlotInfo) => {
    const title = window.prompt("New Event name");
    if (title) {
      const newEvent: Event = {
        id: eventsData.length ? eventsData[eventsData.length - 1].id + 1 : 0,
        title,
        start,
        end,
      };
      setEventsData([...eventsData, newEvent]);
    }
  };
  return (
    <>
      <SearchBarWarpper>
        <Title
          $htype={3}
          $align={"left"}
          $color={tokens.colors.simple.blackbasic}
          $fontSize={tokens.fontSize.web.medium}
        >
          스터디룸 캘린더
        </Title>
      </SearchBarWarpper>
      <div className="w-full">
        <Calendar
          views={["day", "agenda", "work_week", "month"]}
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={eventsData}
          style={{ height: "100vh" }}
          onSelectEvent={(event) => alert(event.title)}
          onSelectSlot={handleSelect}
        />
      </div>
    </>
  );
};

export default calender;
