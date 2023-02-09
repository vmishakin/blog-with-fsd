// import s from "./AboutPage.module.scss";

interface AboutPageProps {
  myName: string;
}

export const AboutPage = ({ myName }: AboutPageProps) => {
  return (
    <div>
      <p>{myName}</p>
    </div>
  );
};
