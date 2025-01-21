import {
  urlInputSchema,
  type UrlInputSchema,
} from '@/lib/validation/url-input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

const UrlInputForm = () => {
  const form = useForm<UrlInputSchema>({
    resolver: zodResolver(urlInputSchema),
    defaultValues: {
      url: '',
    },
  });

  const onSubmit = (data: UrlInputSchema) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div>
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <div className="flex flex-col md:items-center sm:flex-row gap-2">
                    <Input
                      className="w-full bg-background px-4 py-5 md:text-lg rounded-lg border-2 border-gray-300 dark:border-gray-700 md:placeholder:text-lg placeholder:text-base focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                      placeholder="Enter URL"
                      {...field}
                    />
                    <Button
                      type="submit"
                      className="px-4 py-5 md:text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 flex items-center justify-center"
                    >
                      Shorten
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="mt-2 text-sm text-red-500" />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default UrlInputForm;
