const ProfileCard = (props) => {
  const accountAvatar = props.avatarIcon;
  return (
    <div className="w-90 border-2  font-serif bg-white flex flex-col justify-center items-center">
      <div className="bg-gradient-to-b from-indigo-500 w-full font-poppins">
        <div className="pt-10 flex justify-center items-center">
          <img
            className="border-4 border-white border-solid rounded-full"
            src={accountAvatar}
            alt="User Avatar"
            width={110}
            height={110}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="pt-10 flex justify-between items-center space-x-2">
            <p className="font-sans font-bold text-lg">{props.name}</p>
            <p className="text-gray-500">26</p>
            {/* <p className="text-gray-500">{props.age}</p> */}
          </div>
          <p className="pt-2 pb-5 text-center text-gray-500">
            {props.location ? props.location : "India"}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between space-x-4  px-10 py-5 font-poppins border-t-2 font-semibold">
        <div className="flex flex-col justify-center items-center">
          <p>{props.followerCount}</p>
          <p className="text-xs text-gray-500">Followers</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>{props.followingCount}</p>
          <p className="text-xs text-gray-500">Likes</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>{props.publicRepos}</p>
          <p className="text-xs text-gray-500">Public Repos</p>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
