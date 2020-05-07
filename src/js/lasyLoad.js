const lasyLoad = targets => {
  const option = {
    rootMargin: '100px',
  };
  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target;
        const src = image.dataset.lazy;
        image.src = src;
        observer.unobserve(image);
      }
    });
  };
  const io = new IntersectionObserver(onEntry, option);
  targets.forEach(target => io.observe(target));
};

export default lasyLoad;
