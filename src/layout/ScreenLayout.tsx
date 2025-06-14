import type { ReactNode } from "react";

type ScreenLayoutProps = {
  children: ReactNode;
};

const ScreenLayout = ({ children }: ScreenLayoutProps) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};

export default ScreenLayout;
