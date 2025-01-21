import LoginForm from '@/components/auth/login-form';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LogIn',
  description: 'Log in to your SimpleUrl account',
};

const LoginPage = () => {
  return (
    <Card className="w-full -translate-y-10 shadow-md md:w-[400px] md:-translate-y-0 md:p-4">
      <CardHeader>
        <CardTitle>LogIn</CardTitle>
        <CardDescription>to your SimpleUrl account</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
      <CardFooter>
        <div>
          <p className="text-sm text-muted-foreground">
            New to SimpelUrl?{' '}
            <Link className="font-semibold text-primary" href="/signup">
              Sign Up.
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
