import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, Info } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-white/75 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-lg font-semibold text-blue-600 hover:text-blue-700"
          >
            Africa Vibe Coders
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/profile">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/about">
                <Info className="h-4 w-4 mr-2" />
                About
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
