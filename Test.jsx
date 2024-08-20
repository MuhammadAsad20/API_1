import React from "react";

const HomePage = () => {
  return (
    <div className="font-sans leading-relaxed text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-bold transition-transform transform hover:scale-105">College Name</div>
          <nav className="space-x-4">
            <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">Home</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">About</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">Programs</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">Admissions</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-600 bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg transition-transform transform hover:scale-105">Welcome to Our College</h1>
          <p className="text-lg mb-6 drop-shadow-md">Empowering students to achieve their full potential.</p>
          <button className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">
            Explore Programs
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8 animate-slide-in">About Our College</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in">
            Our college is committed to providing high-quality education and fostering a vibrant learning environment. With a rich history and a focus on innovation, we prepare our students for the challenges of the future.
          </p>
          <img src="https://source.unsplash.com/random/800x400" alt="About Us" className="mx-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" />
        </div>
      </section>

      {/* Programs/Departments Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12 animate-slide-in">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Engineering</h3>
              <p className="text-gray-600 mb-4">
                Explore the world of engineering with our comprehensive programs in various disciplines.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Learn More</button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Business</h3>
              <p className="text-gray-600 mb-4">
                Develop your business acumen and leadership skills with our top-notch business programs.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Learn More</button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Arts & Humanities</h3>
              <p className="text-gray-600 mb-4">
                Discover the depth and diversity of human culture through our arts and humanities programs.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 animate-slide-in">Admissions</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto animate-fade-in">
            Join our college and be part of a vibrant community. We offer a wide range of programs and resources to support your academic journey.
          </p>
          <button className="bg-yellow-400 text-blue-800 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">
            Apply Now
          </button>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12 animate-slide-in">News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Upcoming Event: Science Fair</h3>
              <p className="text-gray-600 mb-4">
                Join us for our annual science fair, where students showcase their innovative projects.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Read More</button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Latest News: College Expansion</h3>
              <p className="text-gray-600 mb-4">
                We are excited to announce the expansion of our campus with new state-of-the-art facilities.
              </p>
              <button className="text-blue-600 font-semibold hover:underline">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8 animate-slide-in">Student Life</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in">
            Our college offers a vibrant student life with numerous clubs, activities, and opportunities to engage in the community. Experience a holistic education that goes beyond the classroom.
          </p>
          <img src="https://source.unsplash.com/random/800x400" alt="Student Life" className="mx-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-slide-in">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-blue-800 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <p className="mb-4">
                "The supportive environment and excellent faculty at this college have made my academic journey truly enriching."
              </p>
              <div className="font-bold">- Student A</div>
            </div>
            <div className="bg-white text-blue-800 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <p className="mb-4">
                "I have grown both personally and professionally through the various opportunities provided here."
              </p>
              <div className="font-bold">- Student B</div>
            </div>
            <div className="bg-white text-blue-800 shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <p className="mb-4">
                "The college has truly prepared me for the challenges of the real world."
              </p>
              <div className="font-bold">- Student C</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 College Name. All rights reserved.</p>
          <div className="space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300 ease-in-out">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
