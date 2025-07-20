import { ResumeLink, SocialLink } from "../types";
import GithubIcon from "../assets/svg/github.svg?react";
import LinkedinIcon from "../assets/svg/linkedin.svg?react";
import HashnodeIcon from "../assets/svg/hashnode.svg?react";
import YoutubeIcon from "../assets/svg/youtube.svg?react";

export const socialLinks: SocialLink[] = [
  {
    id:"1",
    platform: "GitHub",
    url: "https://www.github.com/driiisdev",
    icon: GithubIcon
  },
  {
    id:"2",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/idris-yakub/",
    icon: LinkedinIcon
  },
  {
    id:"3",
    platform: "Hashnode",
    url: "https://driiisdev.hashnode.dev/",
    icon: HashnodeIcon
  },
  {
    id:"4",
    platform: "YouTube",
    url: "https://www.youtube.com/@driiisdev",
    icon: YoutubeIcon
  }
]

export const resumeLink: ResumeLink = {
  platform: "google-docs",
  url: "https://docs.google.com/document/d/1nKHVDTPicvnkltmzW1Plk7JIb0WvsSS4vmKHQ0hosno/edit?usp=sharing"
}
