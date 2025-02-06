/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const text = [
  `Greetings, everyone! 👋
I am Faizan Anwar Khan, a Software Engineer and Computer Science graduate from Aligarh Muslim University. Passionate about web development and emerging technologies, I specialize in JavaScript, Java, Python, and PHP, following SOLID principles to build scalable and maintainable solutions.
With expertise in React.js, Next.js, Node.js, and Express.js, I develop robust full-stack applications and design efficient database architectures using MySQL and MongoDB. Continuously learning, I stay updated with the latest advancements in software engineering to enhance my skills and industry knowledge.`,
];

export function AboutContent({ aboutToggle }) {
  const [typing] = useTypewriter({
    words: text,
    loop: 0,
    typeSpeed: 40,
    deleteSpeed: 40,
    delaySpeed: 3000,
  });
  return (
    <>
      <p className="whitespace-pre-line mt-2 leading-6 text-justify">
        {aboutToggle ? typing : ""}
        <Cursor cursorStyle="🖋️" cursorColor="#9333ea" />
      </p>
    </>
  );
}
