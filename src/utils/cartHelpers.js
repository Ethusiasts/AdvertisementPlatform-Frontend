export const addAgency = (item, next) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("agency")) {
      cart = JSON.parse(localStorage.getItem("agency"));
    }
    cart.push({
      ...item,
      count: 1,
    });

    cart = Array.from(new Set(cart.map((p) => p._id))).map((id) => {
      return cart.find((p) => p._id === id);
    });

    localStorage.setItem("agency", JSON.stringify(cart));
    next();
  }
};

export const itemsCount = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("agency")) {
      return JSON.parse(localStorage.getItem("agency")).length;
    }
  }
  return 0;
};

export const getCart = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("agency")) {
      return JSON.parse(localStorage.getItem("agency"));
    }
  }
  return [];
};
