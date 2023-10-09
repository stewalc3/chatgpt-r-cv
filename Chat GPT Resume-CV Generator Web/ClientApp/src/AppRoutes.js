import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Create from "./components/Pages/Create/Create"
import  UserInfo from "./components/Pages/UserInfo/UserInfo"

const AppRoutes = [
  {
        index: true,
        element: <Home />
  },
  {
      path: '/create',
      element: <Create />
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
