import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';

const SocialLogin = () => {
  return (
    <aside className="flex -translate-y-10  flex-col items-center md:-translate-y-0 md:flex-row">
      <div className="my-4 h-px w-20 bg-gray-300 md:mx-4 md:h-20 md:w-px" />
      <form>
        <Button type="submit" className="w-full rounded-full px-4 py-5">
          <FcGoogle className="size-6" />
          <span className="text-base transition">
            <span>Continue with Google</span>
          </span>
        </Button>
      </form>
    </aside>
  );
};

export default SocialLogin;
