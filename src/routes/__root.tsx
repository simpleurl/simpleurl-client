import Features from '@/components/features';
import { BackgroundBeams } from '@/components/ui/background-beams';
import UrlInputForm from '@/components/url-input-form';
import { createRootRoute, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { FaGithub } from 'react-icons/fa';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex font-poppins h-svh flex-col max-w-4xl mx-auto justify-between">
        <section className="  px-4 py-20">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            SimpleUrl
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Simplify your links, amplify your reach.
          </p>
          <div className="mb-12">
            <UrlInputForm />
          </div>
          <Features />
        </section>
        <footer className="py-6 px-4 flex items-center justify-between">
          <span className="md:text-base text-sm">
            SimpleUrl &copy; {new Date().getFullYear()}
          </span>
          <Link to="/">
            <FaGithub size={16} />
          </Link>
        </footer>
      </div>
      <BackgroundBeams />
      <TanStackRouterDevtools />
    </>
  ),
});
