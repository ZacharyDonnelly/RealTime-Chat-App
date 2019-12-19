export const inputHelper = stated => {
  return [...stated].join("");
};

export const colors = stated => {
  if (stated.length > 20) {
    return { paddingBottom: 50, paddingTop: 10 };
  } else {
    return { height: 30 };
  }
};
