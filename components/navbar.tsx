import { Image } from "@nextui-org/image";
import {
  Button,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-blueMidnight lg:py-10 py-5"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="max-w-fit">
          <NextLink className="flex justify-start items-center" href="/">
            <Image src="/spotlive.png" alt="Logo" width={300} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex">
          <Button
            radius="full"
            className="border-2 btn btn-outline border-lime bg-blueMidnight"
          >
            <Link className="text-lime">Je suis organisateur</Link>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <Button
          radius="full"
          className="border-2 btn btn-outline border-lime bg-blueMidnight"
        >
          <Link className="text-lime">Je suis organisateur</Link>
        </Button>
      </NavbarContent>
    </NextUINavbar>
  );
};
