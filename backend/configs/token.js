const genToken = async (userId) => {
  try {
    const token = await JsonWebTokenError.sign(
      { userId },
      process.env.JWT_SECRET,
      { expireIn: "10d" },
    );
  } catch (error) {
    console.log(error);
  }
};

export default genToken;
