import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

export const NotLoginLayout = ({ children }: PropsType) => {
  return (
    <div className="relative">
      <header className="bg-white leading-[50px] fixed top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between">
          <p className="logo">スケジュール管理APP</p>
          <nav>
            <ul className="flex gap-5 text-lime-800">
              <li>ご利用方法</li>
              <li>ログイン</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
        {children}
      </main>
    </div>
  );
};
