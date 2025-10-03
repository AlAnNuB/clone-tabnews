exports.up = (pgm) => {
  pgm.addColumn("users", {
    features: {
      type: "varchar[]",
      nutNull: true,
      default: "{}",
    },
  });
};

exports.down = false;
