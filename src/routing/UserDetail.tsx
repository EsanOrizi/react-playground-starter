import {useLocation, useParams, useSearchParams} from "react-router-dom";
import usersPage from "./UsersPage";

const UserDetail = () => {

  const params = useParams();
  const [searchParams, setSearchParams ] = useSearchParams();
  const location =  useLocation();

  return <p>User {params.id}</p>;
};

export default UserDetail;
