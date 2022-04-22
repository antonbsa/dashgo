import { ElementType } from "react";
import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";

import { ActivableLink } from "../ActivableLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  href: string;
  children: string;
}

export function NavLink({ icon, href, children, ...rest }: NavLinkProps) {
  return (
    <ActivableLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActivableLink>
  )
}
