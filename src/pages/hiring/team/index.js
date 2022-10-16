import { useState } from "react";
import { message } from "antd";
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Img,
  TitleContent,
} from "../../../components/Projects/ProjectsStyles";
import { projects, team } from "../../../constants/constants";
import { Layout } from "../../../layout/Layout";
import {
  Input,
  Section,
  SectionDivider,
  SectionDivider2,
  SectionSubText,
  SectionText,
  SectionText2,
  SectionTitle,
} from "../../../styles/GlobalComponents";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faSmileWink,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { NavLink } from "../../../components/Header/HeaderStyles";
const Team = () => {
  const [data, setData] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });
  const [Emailsent, setEmailsent] = useState(false);
  function handleChange(params) {
    const { name, value } = params.target;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ol6c8kb",
        "template_8vsenup",
        e.target,
        "mnm9JpPuKG4fSikGi"
      )
      .then(
        (result) => {
          setEmailsent(true);
          message.success(
            "Email Sent!,Thank you, I will get back to you ASAP."
          );
          setData({});
        },
        (error) => {
          console.log(error.text, "error");
        }
      );
    e.target.reset();
  };

  return (
    <Layout>
      <Section nopadding>
        <SectionTitle main>Developers Team</SectionTitle>
        <SectionText2>
          We are a team of 6 developers. All of us are working as a Software
          Engineer. Covering the area of frontend development to backend
          development along with the high quality assurance testing. We adopt
          our skills and technology stack according to the requirements of the
          client. Building interactive and scalable websites is our thing.
        </SectionText2>
        <GridContainer>
          {team.map(({ id, image, description, title, name }) => (
            <BlogCard key={id}>
              <Img src={image}></Img>
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
              </TitleContent>
              <CardInfo>{description}</CardInfo>
            </BlogCard>
          ))}
        </GridContainer>
      </Section>
      <form onSubmit={handleSubmit}>
        <Section>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <SectionDivider2 />
            <SectionTitle>Contact Me</SectionTitle>
            <SectionSubText>
             To Hire my team, kindly fill the form{" "}
              <FontAwesomeIcon icon={faHandPointDown} /> or
              <Link href="/hiring/hireMe">
                <NavLink>
                  {" "}
                  Click To Hire Me <FontAwesomeIcon icon={faSmileWink} />
                </NavLink>
              </Link>
            </SectionSubText>
            <Input
              name="from_name"
              placeholder="Name"
              type="text"
              value={data.from_name}
              onChange={handleChange}
            ></Input>
            <Input
              name="email_id"
              placeholder="Email"
              type="email"
              value={data.email_id}
              onChange={handleChange}
            ></Input>
            <Input
              name="message"
              type="text"
              value={data.message}
              placeholder="Message"
              onChange={handleChange}
            ></Input>
            <button style={{ width: "100px", height: "30px" }} type="submit">
              Send Email
            </button>
            <SectionDivider2 />
          </div>
        </Section>
      </form>
    </Layout>
  );
};
export default Team;
