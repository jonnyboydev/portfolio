import Image from "next/image"
import { FaFileDownload } from "react-icons/fa"
import Link from "next/link"
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiPython,
  DiSass,
  DiPostgresql,
  DiMongodb,
} from "react-icons/di"

export default function SideBar() {
  const resumeLink =
    "https://drive.google.com/file/d/1cvuItCpu0P7LKUCA_MJHfnNDZvO3qOV4/view?usp=sharing"
  return (
    <container>
      <div>
        <Image
          src="/images/profile.jpg"
          alt="JonnyBoyDev profile"
          width={100}
          height={100}
          className="profile-img"
        />
      </div>
      <div className="download">
        <a href={resumeLink}>
          <FaFileDownload />
          Resume
        </a>
      </div>
      <div className="links-area">
        <ul>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
      </div>
      <div className="skills-area">
        <div class="skills-logos">
          <DiHtml5 color="f06529" /> <DiCss3 color="264de4" />
          <DiJavascript color="f0db4f" />
          <DiSass color="c69" /> <DiMongodb color="4DB33D" />
          <DiPostgresql color="blue" /> <DiPython color="4B8BBE" />
        </div>
      </div>
    </container>
  )
}
