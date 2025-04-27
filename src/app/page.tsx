import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 ml-64 p-10 space-y-20">
        {/* Home */}
        <section id="home" className="min-h-screen flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Kingsley 👋</h1>
          <p className="text-lg text-gray-600">Welcome to my Portfolio</p>
        </section>

        {/* About */}
        <section id="about" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>Short bio here...</p>
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>Contact form or details here...</p>
        </section>

        {/* Education */}
        <section id="education" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p>Education details...</p>
        </section>

        {/* Experience */}
        <section id="experience" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p>Experience details...</p>
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p>Projects showcase...</p>
        </section>

        {/* Skills */}
        <section id="skills" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p>Skills list...</p>
        </section>
      </main>
    </div>
  );
}
