import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center animate-fade-up">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
            Welcome to Your New Project
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Start building something amazing with React and Vite. This template includes everything you need to get started.
          </p>
          <div className="space-x-4">
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
              size="lg"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 hover:bg-gray-100 transition-all duration-200"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};