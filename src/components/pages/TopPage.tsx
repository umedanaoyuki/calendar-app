import { useNavigate } from "react-router-dom";
import { PrimaryBtn } from "../atoms/PrimaryBtn";

const TopPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-7xl logo">スケジュール管理APP</h1>
      <p className="pt-[10vh] text-5xl">
        お互いのスケジュールを管理するアプリです
      </p>
      <div className="pt-[20vh]">
        <button className="bg-lime-800 text-white p-4 text-lg rounded-lg">
          ...
          <PrimaryBtn size="lg" onClick={() => navigate("/login")}>
            ログイン
          </PrimaryBtn>
          ...
        </button>
      </div>
    </div>
  );
};

export default TopPage;
