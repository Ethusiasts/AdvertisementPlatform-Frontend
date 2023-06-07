export const addItem = (item) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("item")) {
      cart = JSON.parse(localStorage.getItem("item"));
    }
    cart.push({
      ...item,
      count: 1,
    });

    cart = Array.from(new Set(cart.map((p) => p.id))).map((id) => {
      return cart.find((p) => p.id === id);
    });

    localStorage.setItem("item", JSON.stringify(cart));
  }
};

export const itemsCount = () => {
  console.log("count");
  if (typeof window !== "undefined") {
    if (localStorage.getItem("item")) {
      return JSON.parse(localStorage.getItem("item")).length;
    }
  }
  return 0;
};

export const getCart = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("item")) {
      return JSON.parse(localStorage.getItem("item"));
    }
  }
  return [];
};

export const checkBillboard = (id) => {
  if (typeof window !== "undefined") {
    let cart = localStorage.getItem("item");
    if (cart) {
      cart = JSON.parse(cart);
      return cart.some((item) => item.id === id);
    }
  }
};

export const removeItem = (id) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("item")) {
      cart = JSON.parse(localStorage.getItem("item"));
    }
    cart = cart.filter((item) => item.id !== id);
    localStorage.setItem("item", JSON.stringify(cart));
  }
};
