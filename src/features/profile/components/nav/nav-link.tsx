import Link from "next/link";
import React from "react";

export function NavLink({
  href,
  children, // Ensure children are passed
  ...props
}: React.ComponentProps<"a"> & {
  href: string;
  children: React.ReactNode; // Require children
}) {
  const shouldUseNextLink = href.startsWith("/");

  if (shouldUseNextLink) {
    return <Link href={href} {...props}>{children}</Link>;
  }

  return <a href={href} {...props}>{children}</a>;
}