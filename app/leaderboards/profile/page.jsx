import React from "react";
import Image from "next/image";
import profilebg from "@/public/profilebg.png";
import profileImage from "@/public/profileImage.png";
import flag from "@/public/flag.png";
import divider from "@/public/divider.png";
import hcp from "@/public/hcp.png";
import swings from "@/public/swings.png";

import homecourse from "@/public/homecourse.png";
import cashIcon from "@/public/profilesmahcoin.png";
import start from "@/public/profilecardstart.png";
import rank from "@/public/profileRankcard.png";
import event from "@/public/eventcardprofile.png";
import inrangeid from "@/public/inrangeid.png";
import Card from "@/components/profile/Card";
import UserDetails from "@/components/profile/UserDetails ";
import ProfileTable from "@/components/profile/ProfileTable";
import ProfileEvents from "@/components/profile/ProfileEvents";
import data from "@/public/data/eventsLeaderboard.json";

const Profile = () => {
  return (
    <div className="w-full px-10 ">
      <Image
        className="absolute top-0 left-0 z-10 w-full"
        src={profilebg}
        alt="profile"
      />
      <h4
        className={"relative px-5 pt-10 z-20 mb-10 text-xl font-semibold font-Saira"}
      >
        Profile
      </h4>
      <div className="w-full p-10 backdrop-blur-sm  z-20 relative rounded-2xl flex justify-between bg-opacity-95 bg-[#1C1C24A6]">
        <div className="flex flex-col items-center justify-start h-full gap-4 ">
          <div className="flex items-center gap-x-5 w-[432px]  min-h-[180px]">
            <div className="bg-gradient-to-tl min-w-[180px]  h-[180px] rounded-full p-1 from-[#C99B14] via-[#FDF193] to-[#875017]">
              <Image className="border-2 border-gray-900 rounded-full" alt="profile" src={profileImage} />
            </div>
            <div>
              <h6>John Smith</h6>
              <div className="flex items-center justify-start gap-x-1">
                <Image className="w-[23px] h-[12px]" alt="flag" src={flag} />{" "}
                <span className=" inline-block text-[16px] font-[400px] uppercase">
                  USA
                </span>
              </div>
              <p className="text-[14px] min-w-[219px] font-[400]">
                Husband, father, and destroyer of people at longest drive
                competitions.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-tl gap-x-8 from-[#EE642AAB] p-[1px] to-gray-300 min-w-[444px] min-h-[130px] rounded-2xl">
            <div className="grid w-full h-full px-6 justify-between grid-cols-2 bg-[#1C1C24] min-h-[129px] rounded-2xl">
              <UserDetails level="HCP" count={17.22} icon={hcp} />
              <UserDetails level="Swings" count={13} icon={swings} />
              <UserDetails level="Home Course" count={1723} icon={homecourse} />
              <UserDetails level="Inrange ID" count={1723} icon={inrangeid} />
            </div>
          </div>
        </div>
        <Image className="" src={divider} alt="divider" />
        <div className="grid grid-cols-2 gap-y-5 gap-x-10">
          <Card icon={cashIcon} level="Smash Cash" count={10250} />
          <Card icon={start} level="Smash Cash" count={10250} />
          <Card icon={rank} level="Smash Cash" count={"#1108"} />
          <Card icon={cashIcon} level="Smash Cash" count={211} />
        </div>
      </div>
      <div className="relative z-20 flex justify-between mt-8 gap-x-4">
        <div className="w-full min-w-[848px] rounded-2xl min-h-[827px] bg-[#1C1C24A6] bg-opacity-50 backdrop-blur-sm">
          <ProfileTable data={data} title="Events Played" />
        </div>
        <div className="min-w-[402px] min-h-[827px] rounded-2xl p-8  bg-[#1C1C24A6] bg-opacity-50 backdrop-blur-sm">
          <ProfileEvents data={data} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
