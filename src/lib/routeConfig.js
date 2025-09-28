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
    routeTitle: "back to home page",
  },
  {
    path: "/atlantis",
    routeTitle: "atlantiis",
  },
  {
    path: "/about-us",
    routeTitle: "Who we are",
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
