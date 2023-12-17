import { Route, Routes } from "react-router-dom";

import ROUTES from "./ROUTES";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/register/RegisterPage";
import Error404Page from "../pages/404/Error404Page";
import LoginPage from "../pages/login/LoginPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import SandboxPage from "../pages/Sandbox/SandboxPage";
import CreateCardPage from "../pages/CreateCardPage/CreateCardPage";
import AuthGuard from "../Guard/AuthGuard";
import BizGuard from "../Guard/BizGuard";
import MyCardsPage from "../pages/MyCardsPage/MyCardsPage";
import MyFavoritePage from "../pages/MyFavoritePage/MyFavoritePage";
import CardDetailPage from "../pages/CardDetailPage/CardDetailPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import AboutPage from "../pages/about/AboutPage";
import UsersPage from "../pages/users/UsersPage";
import EditUserPage from "../pages/EditUserPage/EditUserPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.USERSADMIN} element={<UsersPage />} />
      <Route path={ROUTES.ABOUTPAGE} element={<AboutPage />} />
      <Route path={ROUTES.MYCARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.MYFAVORITES} element={<MyFavoritePage />} />
      <Route
        path={`${ROUTES.CARDDETAIL}/:cardId`}
        element={<CardDetailPage />}
      />
      <Route
        path={ROUTES.CREATECARD}
        element={
          <AuthGuard>
            <BizGuard>
              <CreateCardPage />
            </BizGuard>
          </AuthGuard>
        }
      />
      <Route path={`${ROUTES.EDITCARD}/:id`} element={<EditCardPage />} />
      <Route path={`${ROUTES.EDITUSER}/:id`} element={<EditUserPage />} />

      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};
export default Router;
