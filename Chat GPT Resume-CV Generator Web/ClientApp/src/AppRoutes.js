import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import  UserInfo from "./components/Pages/UserInfo/UserInfo"

const AppRoutes = [
  {
        index: true,
        element: <Home />
  },
  {
        path: '/counter',
        element: <Counter />
  },
  {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/user-info',
        element: <UserInfo/>
    }
];

export default AppRoutes;
