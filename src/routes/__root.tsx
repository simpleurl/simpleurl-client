import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
          </Button>
          <Button asChild>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </Button>
        </div>
        <ThemeToggle />
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
