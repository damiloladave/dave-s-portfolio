import he from "he";
import { Personalcard, Send2 } from "iconsax-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function QuickActions({
  emailEncoded,
  vCardLink,
}: {
  emailEncoded: string;
  vCardLink: string;
}) {
  return (
    <>
      <div className="h-14" />

      <div className="bg-background fixed right-0 bottom-0 left-0 z-50 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
        <div className="before:bg-grid relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw]">
          <div className="mx-auto px-4 md:max-w-3xl">
            <div className="border-grid border-x pt-2">
              <div
                className={cn(
                  "relative -mx-px grid grid-cols-2 gap-4",
                  "before:bg-grid before:absolute before:top-0 before:-left-[100vw] before:-z-1 before:h-px before:w-[200vw]",
                  "after:bg-grid after:absolute after:bottom-0 after:-left-[100vw] after:-z-1 after:h-px after:w-[200vw]"
                )}
              >
                <Button size="lg" asChild>
                  <a href={vCardLink} target="_blank" rel="noopener noreferrer">
                    <Personalcard variant="Bulk" className="fill-current" />
                    <span>Save vCard</span>
                  </a>
                </Button>

                <Button size="lg" asChild>
                  <a
                    href={`mailto:${he.decode(emailEncoded)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send2 variant="Bulk" className="fill-current" />
                    <span>Send Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
