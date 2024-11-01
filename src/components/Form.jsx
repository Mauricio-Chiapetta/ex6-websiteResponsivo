import { Button } from "./Button";
import { Input } from "./input";

export function Form() {
  return (
    <div className="mb-10">
      <h2 className="font-bold text-xl mb-3">Subscribe to Our Newsletter</h2>
      <p className="text-gray-500 mb-3 dark:text-gray-400">
        Stay updated with the latest event news, speaker announcements, and
        more!
      </p>
      <form action="#" method="post" className="flex flex-col text-left">
        <div className="flex flex-col items-left mb-3">
          <label for="name" className="font-medium mb-3">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            type="text"
          />
        </div>
        <div className="flex flex-col items-left mb-4">
          <label for="email" className="font-medium mb-3">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your Email"
            type="email"
          />
        </div>
        <Button type="submit" title="Subscribe" />
      </form>
    </div>
  );
}
