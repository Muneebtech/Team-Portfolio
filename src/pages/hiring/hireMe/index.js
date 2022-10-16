import { Layout } from "../../../layout/Layout";
import {
  Section,
  SectionDivider,
  SectionDivider2,
  SectionSubText,
  SectionText2,
  SectionTitle,
} from "../../../styles/GlobalComponents";
import { message } from "antd";
import emailjs from "@emailjs/browser";
import { myInformation } from "../../../constants/constants";
import {
  GridContainer,
  Img,
} from "../../../components/Projects/ProjectsStyles";
import Link from "next/link";
import { NavLink } from "../../../components/Header/HeaderStyles";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./HireMeStyles";

const HireMe = () => {
  const [data, setData] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });
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
          console.log(result.text);
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
      <Section>
        <SectionTitle>{myInformation.title}</SectionTitle>
        <GridContainer>
          <Img src={myInformation.image}></Img>
          <SectionText2>
            {myInformation.description} You can
            <Link href="/#tech"> learn more</Link> about the technology stacks I
            have worked with here.
          </SectionText2>
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
            <SectionDivider2></SectionDivider2>
            <SectionTitle>Contact Me</SectionTitle>
            <SectionSubText>
              Hire me as a developer, kindly fill the form{" "}
              <FontAwesomeIcon icon={faHandPointDown} /> or
              <Link href="/hiring/team">
                <NavLink>
                  {" "}
                  Click To Hire My Team <FontAwesomeIcon icon={faSmileWink} />
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
            <SectionDivider2></SectionDivider2>
          </div>
        </Section>
      </form>
    </Layout>
  );
};
export default HireMe;
