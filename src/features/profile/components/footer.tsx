import { SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { cn } from "@/lib/cn";
import { urlToName } from "@/utils/url";

import { USER } from "../data/user";
import { WordmarkHoverEffect } from "./wordmark-hover-effect";

export function Footer() {
  return (
    <footer className="before:bg-grid border-grid relative flex flex-col items-center gap-3 border-x pt-4 pb-[env(safe-area-inset-bottom,0px)] before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw]">
      <div className="flex max-w-xs flex-wrap justify-center gap-x-4 gap-y-1 sm:max-w-full">
        {USER.otherWebsites.map((website) => {
          return (
            <a
              key={website}
              className={cn(
                "hover:text-foreground text-muted-foreground text-sm underline-offset-4 transition-colors hover:underline",
                "last:after:content-none",
                "after:bg-border after:absolute after:mx-2 after:my-[2px] after:inline-flex after:h-4 after:w-px"
              )}
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {urlToName(website)}
            </a>
          );
        })}
      </div>

      <div className="text-muted-foreground text-center text-sm text-balance">
        Inspired by <strong className="font-semibold">tailwindcss.com</strong>.{" "}
        <span className="block sm:inline" />
        The source code is available on{" "}
        <a
          className="link"
          href={SOURCE_CODE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </div>

      <div className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} {USER.displayName}. All rights reserved.
      </div>
      
      <div className="long-line-before relative w-full">
        <div className="relative z-1 -mx-px pt-4 pb-2">
          <WordmarkHoverEffect />
        </div>
      </div>
    </footer>
  );
}
