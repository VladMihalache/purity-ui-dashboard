const Card = {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  variants: {
    panel: (props) => ({
      bg: props.colorMode === "dark" ? "gray.700" : "white",
      width: "100%",
      boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
      borderRadius: "15px",
    }),
  },
  defaultProps: {
    variant: "panel",
  },
};

export const CardComponent = {
  components: {
    Card,
  },
};
