import { Moon, Menu } from "lucide-react";

const technologies = {
  Backend: [
    { name: "Typescript", icon: "TS" },
    { name: "Next.JS", icon: "N" },
    { name: "Node", icon: "No" },
    { name: "PHP", icon: "php" },
    { name: "Vite", icon: "V" },
    { name: "Webpack", icon: "W" },
    { name: "Prisma", icon: "△" },
    { name: "Terraform", icon: "Tr" },
    { name: "Python", icon: "Py" },
    { name: "Golang", icon: "Go" },
  ],
  Frontend: [
    { name: "React", icon: "⚛" },
    { name: "Typescript", icon: "TS" },
    { name: "Javascript", icon: "JS" },
    { name: "Tailwind CSS", icon: "≈" },
    { name: "Bootstrap", icon: "B" },
    { name: "SASS", icon: "S" },
    { name: "HTML", icon: "</>" },
    { name: "CSS", icon: "#" },
  ],
  Tools: [
    { name: "VS Code", icon: "⌨" },
    { name: "Github", icon: "○" },
    { name: "Wordpress", icon: "W" },
    { name: "Directus", icon: "⚡" },
    { name: "NPM", icon: "N" },
    { name: "Socket.io", icon: "◎" },
  ],
};

const TechSection = ({ title, items }) => (
  <div className="mb-8">
    <h4 className="font-semibold mb-2">{title}</h4>
    <div className="grid grid-cols-4 gap-4">
      {items.map((tech) => (
        <div
          key={tech.name}
          className="bg-gray-100 p-2 rounded flex items-center gap-2"
        >
          <span
            className={`w-6 h-6 rounded flex items-center justify-center text-xs ${
              tech.name === "React"
                ? "text-blue-500"
                : tech.name === "Javascript"
                  ? "bg-yellow-400"
                  : tech.name === "PHP"
                    ? "bg-purple-300"
                    : "bg-blue-100"
            }`}
          >
            {tech.icon}
          </span>
          <span className="text-sm">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="bg-emerald-500/10">
      <div className="max-w-5xl mx-auto p-6 font-sans">
        <header className="flex justify-between items-center mb-8">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold">
            A
          </div>
          <div className="flex gap-4">
            <Moon size={24} />
            <Menu size={24} />
          </div>
        </header>
        <main>
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Mehdi <span className="text-emerald-500">Alouane</span>,
              </h1>
              <h2 className="text-xl mb-4">Full Stack Developer</h2>
              <p className="text-gray-600 max-w-lg">
                A self-taught software developer, I create
                <span className="text-emerald-500 ml-1 mr-2 underline font-bold">
                  Backend Systems
                </span>
                I tailor
                <span className="text-emerald-500 ml-1 mr-2 underline font-bold">
                  Frontend Experiences
                </span>
                I provide
                <span className="text-emerald-500 ml-1 mr-2 underline font-bold">
                  Fullstack Solutions
                </span>
                .
              </p>
            </div>
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
              {/* Placeholder for avatar */}
              <div className="w-full h-full flex items-center justify-center text-4xl">
                😊
              </div>
            </div>
          </div>
          <section className="mb-12">
            <h3 className="text-sm font-semibold text-gray-500 mb-4"></h3>
            <div className="grid grid-cols-1 gap-4">
              {["Wanna know more?"].map((page) => (
                <button onClick={() => window.location = 'mailto:meehdialouane@gmail.com'} key={page} className="bg-white p-4 rounded">
                  <h4 className="font-semibold">{page}</h4>
                  <p className="text-sm text-gray-700">
                    {page === "Wanna know more?" && " Let's Chat!"}
                  </p>
                </button>
              ))}
            </div>
          </section>
          <section className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-500 mb-4">
              My Skills
            </h3>
            {Object.entries(technologies).map(([category, techs]) => (
              <TechSection key={category} title={category} items={techs} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
