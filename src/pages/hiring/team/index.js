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
  ButtonBack,
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
import ToastMessage from "../../../components/Toast";
import { Dna } from "react-loader-spinner";
import Button from "../../../styles/GlobalComponents/Button";
const Team = () => {
  const [data, setData] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });
  const [loader, setloader] = useState(false)
  function handleChange(params) {
    const { name, value } = params.target;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setloader(true)
    emailjs
      .sendForm(
        "service_ol6c8kb",
        "template_8vsenup",
        e.target,
        "mnm9JpPuKG4fSikGi"
      )
      .then(
        (result) => {
          console.log(result.text);
          ToastMessage({ type: 'success', message: "Email Sent!, Thank you, I'll get back to you ASAP." });
          setloader(false)
          setData({});
        },
        (error) => {
          ToastMessage({type:'error', message:error} );

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
              required
              minlength="3"
              maxlength="20"
              value={data.from_name}
              onChange={handleChange}
            ></Input>
            <Input
              name="email_id"
              placeholder="Email"
              type="email"
              required
              minlength="10"
              maxlength="25"
              value={data.email_id}
              onChange={handleChange}
            ></Input>
            <Input
              name="message"
              type="text"
              required
              minlength="1"
              value={data.message}
              placeholder="Message"
              onChange={handleChange}
            ></Input>
            <ButtonBack  type="submit">
              Send Email
            </ButtonBack>
            <Dna
              visible={loader}
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
              />
            <SectionDivider2 />
          </div>
        </Section>
      </form>
    </Layout>
  );
};
export default Team;
