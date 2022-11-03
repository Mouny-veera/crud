import { Route, Routes } from 'react-router-dom';
import AllComments from './AllComments/AllComments';
import ViewComments from './Dashboard/ViewComments';
import UserForm from './UserForm/UserForm';

const MainRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<ViewComments/>}/>
            <Route path="/form" element={<UserForm/>}/>
            <Route path="/comments" element={<AllComments/>}/>

        </Routes>
    )

}

export default MainRoutes;