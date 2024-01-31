import { Blogs } from "@/components/Blogs";
import { Presentation } from "@/components/Presentation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Presentation/>
      <Blogs/>
    </main>
  );
}
