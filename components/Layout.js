import Head from "next/head"
import styles from "./layout.module.scss"
import utilStyles from "../styles/utils.module.scss"
import Link from "next/link"
import SideBar from "../components/SideBar/SideBar.js"

export const siteTitle = "JonnyBoyDev Portfolio and Blog"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <SideBar />

        {children}
      </main>
    </div>
  )
}
