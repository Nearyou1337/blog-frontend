export const navVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 50,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.2,
    },
  },
};
export const postVariantTabs = {
  hidden: {
    x: -100,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 50,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.3,
    },
  },
};
export const postVariantPosts = {
  hidden: {
    x: 100,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 50,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.6,
    },
  },
};
export const postVariantFooter = {
  hidden: {
    y: 100,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 50,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.6,
    },
  },
};
