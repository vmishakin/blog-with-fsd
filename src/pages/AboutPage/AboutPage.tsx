import s from "./AboutPage.module.scss";

interface AboutPageProps {
  myName: string;
}

const AboutPage = ({ myName }: AboutPageProps) => {
  return (
    <div>
      <p>{myName}</p>
    </div>
  );
};

export default AboutPage;
