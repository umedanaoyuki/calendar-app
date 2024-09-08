import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../components/atoms/Input";
import { PrimaryBtn } from "../components/atoms/PrimaryBtn";
import { LoginInfoType } from "../types/login";
import { login } from "../api/login";
import { loginUserState } from "../store/loginUserState";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const setLoginUser = useSetRecoilState(loginUserState);
  const [loginInfo, setLoginInfo] = useState<LoginInfoType>({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    console.log("クリック");
    event.preventDefault();
    setErrorMessage("");
    try {
      const resUser = login(loginInfo);
      setLoginUser({ id: resUser.id, name: resUser.name });
      navigate("/calendar");
    } catch {
      setErrorMessage("ログインに失敗しました");
    }
  };

  return (
    <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
      <form
        className="flex flex-col justify-center items-center gap-10"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl text-lime-800 font-bold text-center">
          ログイン
        </h1>
        {errorMessage !== "" && (
          <div className="p-5 bg-red-500 text-white w-[80%] rounded-lg">
            {errorMessage}
          </div>
        )}
        <div className="w-[80%]">
          <Input
            name="email"
            type="text"
            placeholder="email"
            value={loginInfo.email}
            onChange={changeLoginInfo}
          />
        </div>
        <div className="w-[80%]">
          <Input
            name="password"
            type="password"
            placeholder="password"
            value={loginInfo.password}
            onChange={changeLoginInfo}
          />
        </div>
        ...
        <PrimaryBtn size="lg" onClick={() => null}>
          ログイン
        </PrimaryBtn>
        ...
      </form>
    </div>
  );
};
