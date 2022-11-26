export const withParams = (path) => {
  if (window) {
    const queryString = window.location.search;

    return queryString === "" ? path : rightTrim(path, "/") + queryString;
  }

  console.error('"window" is not existed in server side');

  return "/";
};

export const getParam = (param) => {
  if (window) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    return urlParams.get(param);
  }

  console.error('"window" is not existed in server side');

  return "";
};

export const leftTrim = (rawString, searchString = "", replaceString = "") => {
  if (typeof rawString !== "string" || !rawString || rawString === "") {
    console.warn("String is not in appropriate", rawString);

    return "";
  }

  rawString = rawString.trimStart();
  let splitArray = rawString.split("");
  splitArray[0] = splitArray[0].replace(searchString, replaceString);

  return splitArray.join("");
};

export const rightTrim = (rawString, searchString = "", replaceString = "") => {
  if (typeof rawString !== "string" || !rawString || rawString === "") {
    console.warn("String is not in appropriate", rawString);

    return "";
  }

  rawString = rawString.trimEnd();
  let splitArray = rawString.split("");
  splitArray[splitArray.length - 1] = splitArray[splitArray.length - 1].replace(
    searchString,
    replaceString
  );

  return splitArray.join("");
};
