import {
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Palette,
  Smartphone,
} from "lucide-react";

const About = ({ hasAnimated }) => {
  const features = [
    {
      icon: <Code className="w-8 h-8 mb-4 text-black" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following best practices",
    },
    {
      icon: <Palette className="w-8 h-8 mb-4 text-black" />,
      title: "Accessibility",
      description:
        " building web experiences usable by everyone, including people with disabilities.",
    },
    {
      icon: <Smartphone className="w-8 h-8 mb-4 text-black" />,
      title: "Responsive",
      description:
        "Mobile-first approach ensuring great experience on all devices",
    },
    {
      icon: <ExternalLink className="w-8 h-8 mb-4 text-black" />,
      title: "Performance",
      description: "Optimizing for fast load times and smooth interactions",
    },
  ];
  return (
    <section id="about" className="py-16 px-6 bg-special">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            hasAnimated.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }   `}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                {/*  I specialize in creating responsive , accessible , and
                performant web applications using modern technologies. I
                understand the basics of backend development with Express, and
                MongoDB, enabling me to work on both client and server sides of
                an application.,I create stellar web experiences with modern
                technologies, */}{" "}
                I'm Passionate about creating elegant solutions to complex
                problems, and I'm constantly learning new technologies and
                techniques to stay at the forefront of the ever-evolving web
                landscape. I specialize in React, Typescript, Tailwind, Express
                to build scalable performant applications.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My journey started with a curiosity for how websites work, and
                it has evolved into a love for crafting pixel-perfect interfaces
                that users enjoy interacting with.
              </p>
              <div className="flex space-x-4">
                <Github className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                >
                  {feature.icon}
                  <h3 className="font-semibold mb-2  text-black ">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
