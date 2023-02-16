import jwt from "jsonwebtoken";
export function verifyToken(req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];

    if (!token) {
      return res.status(401).send({
        status: true,
        message: "unauthorized",
      });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_TOKEN_SECRET, (error, data) => {
        if(error){
            return res.status(403).send({
                status: false, 
                message: "invalid token"
            })
        }

        req.userId = data.uid
    });
}
