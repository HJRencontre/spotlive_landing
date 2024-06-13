export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Spotlive",
  description: "La culture à portée de pas",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Organisateur",
      href: "/organisateur",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    instagram: "https://www.instagram.com/spotlive__/",
  },
};
