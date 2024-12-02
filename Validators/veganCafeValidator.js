const veganCafeValidator = (cafe) => {
  const { name, latitude, longitude } = cafe;

  // Check if all required fields are provided
  if (!name || latitude === undefined || longitude === undefined) {
    return { valid: false, message: "Name, latitude, and longitude are required." };
  }

  // Validate that latitude and longitude are numbers
  if (typeof latitude !== "number" || isNaN(latitude)) {
    return {
      valid: false,
      message: "Latitude must be a valid number.",
    };
  }

  if (typeof longitude !== "number" || isNaN(longitude)) {
    return {
      valid: false,
      message: "Longitude must be a valid number.",
    };
  }

  return { valid: true };
};

export default veganCafeValidator;
