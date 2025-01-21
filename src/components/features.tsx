import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, Zap, Shield } from 'lucide-react';

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-400">
            <Link className="w-6 h-6 mr-2" />
            Custom Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Create memorable, branded short links that stand out.
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center text-teal-400">
            <Zap className="w-6 h-6 mr-2" />
            Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Track clicks, geographic data, and referral sources for your links.
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center text-purple-400">
            <Shield className="w-6 h-6 mr-2" />
            Secure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Protect your links with password encryption and expiration dates.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Features;
