globalThis.__timing__.logStart('Load chunks/build/useFirstScreenAnimation.DC5oZruM');const firstScreenAnimation = ({ parent = "body" } = {}) => {
  const parentElement = (void 0).querySelector(parent);
  const tl = gsap.timeline();
  const titles = parentElement.querySelectorAll(".text-effect");
  if (titles.length) {
    tl.from(titles, {
      opacity: 1,
      clearProps: "all"
    });
  }
  return tl;
};

export { firstScreenAnimation as f };;globalThis.__timing__.logEnd('Load chunks/build/useFirstScreenAnimation.DC5oZruM');
//# sourceMappingURL=useFirstScreenAnimation.DC5oZruM.mjs.map
