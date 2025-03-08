import { Button } from '@/components/ui/button';

export default function Home() {
  console.log('Hello world!');

  return (
    <main>
      <h1 className="text-3xl font-bold underline text-purple-600">
        Hello world!
      </h1>
      <div>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
