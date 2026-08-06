exports.isAdmin = (req, res, next) => {

  if (!req.user) {

    return res.status(401).json({
      success: false,
      message: "Please Login First"
    });

  }

  if (req.user.role !== "admin") {

    return res.status(403).json({
      success: false,
      message: "Admin Access Only"
    });

  }

  next();

};