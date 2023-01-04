// Function to check if a string from an object is HTML with react native

const isHtml = string => {
  const regex = /(<([^>]+)>)/gi;
  return regex.test(string);
};

export default isHtml;
