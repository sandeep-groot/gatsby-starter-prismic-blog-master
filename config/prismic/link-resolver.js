exports.linkResolver = (doc) => {
  switch (doc.type) {
    case "post":
      return `/post/${doc.uid}`;

    default:
      if (!doc.uid) return "/";
      return doc.uid;
  }
};
