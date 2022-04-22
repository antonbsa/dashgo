import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActivableLinkProps extends LinkProps {
  shouldMatchExactHref?: boolean;
  children: ReactElement;
}

export function ActivableLink({
  shouldMatchExactHref = false,
  children,
  ...rest
}: ActivableLinkProps) {
  const { asPath } = useRouter();

  function shouldBeActive(): boolean {
    if (shouldMatchExactHref) {
      if (asPath === rest.href || rest.as) return true;
    } else {
      if (asPath.startsWith(String(rest.href))
        || asPath.startsWith(String(rest.as))) return true;
    }
    return false;
  }

  const isActive = shouldBeActive();

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}
