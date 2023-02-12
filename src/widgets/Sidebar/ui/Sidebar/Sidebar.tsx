import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import s from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
