import {
  Button,
  Input,
  Kbd,
  Link,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle
} from "@nextui-org/react";
import NextLink from "next/link";
import { SearchIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <img
              src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/typography.png"
              className="w-24 md:w-40"  alt={"Spotlive logo"}/>
        </NextLink>
      </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Button
            radius="full"
            className="border-2 btn btn-outline border-lime bg-blueMidnight">
            <Link className="text-lime">
              Je suis organisateur
            </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Button
          radius="full"
          className="border-2 btn btn-outline border-lime bg-blueMidnight">
          <Link className="text-lime">
            Je suis organisateur
          </Link>
        </Button>
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
