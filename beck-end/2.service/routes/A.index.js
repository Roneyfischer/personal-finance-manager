import publicPages from "./B.publicPages.js";
import userRoutes from "./C.authRoutes.js";
import loggedRoutes from "./D.userArea.js";
import verifyJWT from "./jwtToken.js";

const fRouter = (app) => {
  app
    .use(`/`, publicPages)
    .use(`/auth`, userRoutes)
    .use("/user", verifyJWT, loggedRoutes);
};

export default fRouter;
