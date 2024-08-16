import { MyRequestContainer } from '../../components/MyRequestContainer/MyRequestContainer';
import './MyRequestsPage.css';
import { Layout } from './../../components/Layout/Layout';
import { MyRequestsNavigator } from '../../components/MyRequestsNavigator/MyRequestsNavigator';

export function MyRequestPage() {

    return (

        <Layout>

            <div className='my-request-page-content'>
                <MyRequestsNavigator />
                <MyRequestContainer />
            </div>
        </Layout>
    )
}