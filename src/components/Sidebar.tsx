// src/components/Sidebar.tsx
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center bg-black text-white h-screen w-64 p-6 fixed top-0 left-0">
      {/* Profile Image */}
      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-4">
        <Image
          src="/images/sidebar_image.png"  
          alt="Profile Image"
          width={144}
          height={144}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name and Title */}
      <h3 className="text-yellow-400 text-2xl font-bold tracking-wide">Kingsley</h3>
      <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
        Data Analyst
      </p>

      {/* Navigation Links */}
      <nav className="mt-10 flex flex-col space-y-6 text-lg">
        {["Home", "About", "Contact", "Education", "Experience", "Project", "Skills"].map((item) => (
          <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-yellow-400 transition">
            {item}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
