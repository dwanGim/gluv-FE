import React, { useEffect, useState } from "react";
import Margin from "../Margin";
import DynamicColorButton from "../DynamicColorButton";
import Contour from "../ui/Contour";
import { Link, useParams } from "react-router-dom";
import { FetchTeam, TeamLeave, TeamDelete } from "../../api/team";
import { FetchCheckRecruitsApplied } from "../../api/recruits";


function TeamLeftMenu() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "",
    day: "",
    week: "",
    max_attendance: "",
    current_attendance: "",
    frequency: 1,
    location: "무관",
    is_leader: false,
    is_closed: false,
    applied_count: 0,
  });
  const [appliedMemberData, setAppliedMemberData] = useState([]);

  const { id } = useParams();

  const fetchTeamData = async () => {
    try {
      const teamData = await FetchTeam({ id });

      if (teamData) {
        setFormData({
          id: teamData.id,
          name: teamData.name || "",
          category: teamData.category || "",
          day: teamData.day || "",
          week: teamData.week || "무관",
          max_attendance: teamData.max_attendance || "",
          current_attendance: teamData.current_attendance || "",
          frequency: teamData.frequency || "",
          location: teamData.location || "없음",
          is_leader: teamData.s_leader,
          is_closed: teamData.is_closed,
        });
      }
    } catch (error) {
      console.error("Error fetching team data:", error.message);
    }
  };

  const fetchAppliedMemberData = async () => {
    try {
      const appliedMemberData = await FetchCheckRecruitsApplied({ id });

      if (appliedMemberData) {
        setAppliedMemberData(appliedMemberData.length);
      }
    } catch (error) {
      console.error("Error fetching applied member data:", error.message);
    }
  };

  useEffect(() => {
    fetchTeamData();
    fetchAppliedMemberData();
  }, [id]);

  const teamLeave = async () => {
    try {
        const result = await TeamLeave({ id });
        window.location.href = "/users/myteams/";
    } catch (error) {
        console.error("Error in teamLeave:", error.message);
    }
};
  const teamDelete = async () => {
    console.log("teamDelete");
    try {
        const result = await TeamDelete({ id });
        window.location.href = "/users/myteams/";
    } catch (error) {
        console.error("Error in teamDelete:", error.message);
    }
};



  return (
    <div className="w-72 h-full flex justify-center items-center">
      <div className="mt-4 w-64 h-full mx-4 bg-gray-100 flex flex-col items-center text-center rounded-lg ">
        {/* 상단 여백 적용 */}
        <Margin top="5" />

        {/* 프로필 정보 */}
        <div>
          <div className="relative overflow-hidden rounded-full bg-black h-28 w-28">
            <img
              src="프로필사진의_이미지_경로.jpg"
              alt="프로필 사진"
              className="프로필_이미지_스타일 rounded-full"
            />
            asdasd
          </div>
          <Margin top="3" />
          <div className=" font-bold">{formData.category}</div>
          <div className="  text-sm">{formData.name}</div>
        </div>
        <Margin bottom="1" />
        {/* 수평 선 */}
        <Contour></Contour>
        <Margin top="2" />
        {/* 모집 정보 */}
        <div className="w-48">
          <div className="text-lg font-bold pb-4">
            모집 중 {formData.is_closed ? "" : "✔️"}
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="">최대인원</div>
              <div className="">{formData.max_attendance}명</div>
            </div>
            <div className="flex justify-between">
              <div className="">현재인원</div>
              <div className="">{formData.current_attendance}명</div>
            </div>
            <div className="flex justify-between">
              <div className="">신청인원</div>
              <div className="">{appliedMemberData}명</div>
            </div>
          </div>
        </div>

        {/* 리더 정보 */}
        <Margin top="2" />
        <div className="text-lg mt-2 mb-5">
          내 역할: {formData.is_leader ? "리더" : "구성원"}
        </div>
        <Margin top="1" />

        <Margin top="1" />
        <Contour />

        <Link to={`/teams/${id}/edit/`}>
          <div className="menu-item cursor-pointer">모임 정보 수정</div>
        </Link>
        <Contour />
        <Link to={`/teams/${id}/members/`}>
          <div className="menu-item cursor-pointer">구성원 관리</div>
        </Link>
        <Contour />
        <Link to={`/teams/${id}/apply/`}>
          <div className="menu-item  cursor-pointer">신청인원 관리</div>
        </Link>
        <Contour />
        {/* <Link to="/teams/:id/delete"> */}
        {/* 확인페이지를 만들어서 Link하거나, 공수가 안된다면 여기서 바로 삭제하겠습니다. */}
        <div className="menu-item  cursor-pointer" onClick={teamDelete}>모임 삭제</div>
        {/* </Link> */}
        <Contour />
        <div className="menu-item cursor-pointer" onClick={teamLeave}>모임 탈퇴</div>
        <Contour />
      </div>
    </div>
  );
}

export default TeamLeftMenu;
