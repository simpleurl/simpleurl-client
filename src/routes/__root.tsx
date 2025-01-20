import { BackgroundBeams } from '@/components/ui/background-beams';
import UrlInputForm from '@/components/url-input-form';
import { createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10">
        <section className="font-poppins max-w-2xl mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            SimpleUrl
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Simplify your links, amplify your reach
          </p>
          <div>
            <UrlInputForm />
          </div>
        </section>
      </div>
      <BackgroundBeams />
      <TanStackRouterDevtools />
    </div>
  ),
});
