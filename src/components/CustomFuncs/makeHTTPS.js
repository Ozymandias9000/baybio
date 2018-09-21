const makeHTTPS = url =>
  url.slice(0, 5) === "http:" ? url.slice(0, 4) + "s" + url.slice(4) : url;

export default makeHTTPS;
