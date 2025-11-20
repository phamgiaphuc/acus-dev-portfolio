import { Label } from "@/components/ui/label";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="max-w-7xl relative mx-auto h-20 flex items-center justify-between">
        <Label asChild className="text-lg leading-6 max-w-24">
          <Link href="/">Pham Gia Phuc</Link>
        </Label>
        <div className="flex items-center gap-16 absolute -translate-x-1/2 left-1/2">
          <Label asChild>
            <Link href="#about">About</Link>
          </Label>
          <Label asChild>
            <Link href="/">Projects</Link>
          </Label>
          <Label asChild>
            <Link href="/">Articles</Link>
          </Label>
          <Label asChild>
            <Link href="/">Contacts</Link>
          </Label>
        </div>
        <div className="flex flex-col gap-2">
          <Label asChild className="hover:underline underline-offset-2">
            <Link href="/en">En</Link>
          </Label>
          <Label asChild className="hover:underline underline-offset-2">
            <Link href="/en">Vi</Link>
          </Label>
        </div>
      </div>
    </header>
  );
};

export default Header;
