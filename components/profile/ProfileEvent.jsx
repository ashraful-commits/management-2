import React from "react";
import Image from "next/image";
const ProfileEvent = (props) => {
  const photo = props.photo;
  const title = props.title;
  return (
    <div>
      <div className="flex items-center pb-2 mb-2 border-b border-b-gray-800">
        <Image
          className="rounded-xl border-4 border-[#44444F]"
          src={photo}
          alt={title || "title"}
          width="50"
          height="50"
        />
        <span className="ml-3 text-lg font-semibold">{title}</span>
      </div>
    </div>
  );
};

export default ProfileEvent;
