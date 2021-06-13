import React from "react";
import profile from "../images/profileImg.png";

const MyPageInfo = ({ userInfo, onClickLogout }) => {
  return (
    <>
      <section className="profile-section">
        <div className="profile-title">
          <div>개인정보</div>
          <span>이름, 프로필 등 TechMarket에서 사용하는 기본 정보</span>
        </div>
        <div className="profile-info">
          <span>기본정보</span>
          <div className="profile-group">
            <img src={profile} alt="프로필" />
          </div>
          <div className="profile-group">
            <span>이메일 </span>
            <span>{userInfo.email}</span>
          </div>
          <div className="profile-group">
            <span>닉네임 </span>
            <span>{userInfo.username}</span>
          </div>
          <div className="profile-group">
            <span>비밀번호 </span>
            <span>{userInfo.password}</span>
          </div>
          <button className="btn-modify" type="submit" onClick={onClickLogout}>
            로그아웃
          </button>
        </div>
      </section>
    </>
  );
};

export default MyPageInfo;
