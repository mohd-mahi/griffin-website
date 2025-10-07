export const headerConfig = {
  nonTransparentRoutes: [
    "/about-us",
    "/our-services",
    "/our-projects",
    "/contact-us",
    "/404",
  ],
};

export const pageTransitionConfig = [
  {
    path: "/",
    routeTitle: "Welcome to Griffin",
  },
  {
    path: "/atlantis",
    routeTitle: "Project Atlantiis",
  },
  {
    path: "/about-us",
    routeTitle: "About Us",
  },
  {
    path: "/other-projects",
    routeTitle: "Projects Executed",
  },

  {
    path: "/media",
    routeTitle: "Media Page",
  },

  {
    path: "/contact",
    routeTitle: "Get in Touch",
  },

  {
    path: "*",
  },
];
