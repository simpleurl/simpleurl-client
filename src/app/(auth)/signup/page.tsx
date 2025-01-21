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
import SignUpForm from '@/components/auth/sign-up-form';

export const metadata: Metadata = {
  title: 'SignUp',
  description: 'Sign up for your SimpleUrl account',
};

const SignUpPage = () => {
  return (
    <Card className="w-full -translate-y-10 shadow-md md:w-[400px] md:-translate-y-0 md:p-4">
      <CardHeader>
        <CardTitle>SignUp</CardTitle>
        <CardDescription>to your SimpleUrl account</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter>
        <div>
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link className="font-semibold text-primary" href="/login">
              Log In.
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignUpPage;
