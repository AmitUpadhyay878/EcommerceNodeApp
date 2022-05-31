const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers;

        const {token} = authHeader;   
 if(authHeader)
    {
       
    //  const token= authHeader.split(" ")[1]

    jwt.verify(token, process.env.JWT_SEC, (err,user) => {
        if (err) res.status(403).json("Token is Not Valid");
        req.user = user;
        next();
      }
     )
    }
    else{ res.status(401).json("You Are Not Authenticate User")
        console.log(user)        
}

};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id === req.params.id || req.user.usAdmin) {
        next()
    }else{
        res.status(403).json("You Are Not Allow To ")
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.usAdmin) {
          next()
      }else{
          res.status(403).json("You Are Not Allow To ")
      }
    });
  };

module.exports = { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin };
