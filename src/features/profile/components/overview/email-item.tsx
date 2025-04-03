"use client";

import he from "he";
import { Sms } from "iconsax-react";
import { isMobile } from "react-device-detect";

import { useIsClient } from "@/hooks/use-is-client";

import { IntroItem } from "./intro-item";

export function EmailItem({ emailEncoded }: { emailEncoded: string }) {
  const isClient = useIsClient();

  return (
    <IntroItem
      icon={<Sms variant="Bulk" className="fill-current" />}
      content={isClient ? he.decode(emailEncoded) : "[Email protected]"}
      href={isClient ? `mailto:${he.decode(emailEncoded)}` : "#"}
      target={isClient ? (isMobile ? "_self" : "_blank") : undefined}
    />
  );
}
