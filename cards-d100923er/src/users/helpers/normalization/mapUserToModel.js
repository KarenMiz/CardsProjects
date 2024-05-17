// const mapUserToModel = (user) => {
//     return {
//       first: user.name.first,
//       middle: user.name.middle,
//       last: user.name.last,
//       phone: user.phone,
//       email: user.email,
//       password: user.password,
//       state: user.address.state,
//       country: user.address.country,
//       city: user.address.city,
//       street: user.address.street,
//       zip: user.address.zip,
//       houseNumber: user.address.houseNumber,
//       url: user.image.url,
//       alt: user.image.alt,
//       isBusiness: user.isBusiness,
//     };
//   };
  
//   export default mapUserToModel;
  
const mapUserToModel = (user) => {
    return {
      first: user.name?.first || "",
      middle: user.name?.middle || "",
      last: user.name?.last || "",
      phone: user.phone || "",
      email: user.email || "",
      password: user.password || "",
      url: user.image?.url || "",
      alt: user.image?.alt || "",
      state: user.address?.state || "",
      country: user.address?.country || "",
      city: user.address?.city || "",
      street: user.address?.street || "",
      houseNumber: user.address?.houseNumber || "",
      zip: user.address?.zip || "",
      isBusiness: user.isBusiness || false,
    };
  };
  
  export default mapUserToModel;
  
