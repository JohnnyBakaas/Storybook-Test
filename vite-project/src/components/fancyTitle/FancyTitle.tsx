import "./FancyTitle.css";

interface FancyTitleProps {
  title: string;
  mode: "light" | "dark";
}

export const FancyTitle = ({ title, mode }: FancyTitleProps) => {
  return <h1 className={["title", mode].join(" ")}>{title}</h1>;
};
