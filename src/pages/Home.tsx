import MVRContainer from "../components/MVRContainer.tsx";
import LoadingModal from "../components/LoadingModal.tsx";
import { ProgressStepsProvider } from "../contexts/ProgressContext.tsx";
import Layout from "../components/Layout.tsx";
import Actions from "../components/Actions.tsx";

function Home() {
    return (
        <Layout>
            <ProgressStepsProvider>
                <Actions />
                <LoadingModal />
                <MVRContainer />
            </ProgressStepsProvider>
        </Layout>
    );
}

export default Home;
