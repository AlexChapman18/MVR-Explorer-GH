import CanvasContainer from "../components/CanvasContainer.tsx";
import LoadingModal from "../components/modals/LoadingMVR.tsx";
import { ProgressStepsProvider } from "../contexts/ProgressContext.tsx";
import Layout from "../components/Layout.tsx";
import Actions from "../components/Actions.tsx";
import LeftBar from "../components/LeftBar.tsx";
import RightBar from "../components/RightBar.tsx";

function Home() {
    return (
        <Layout>
            <ProgressStepsProvider>
                {/* Page elements */}
                <Actions />
                <div className="flex flex-grow min-h-0 bg-primary dark:text-white pt-4 pb-2">
                    <LeftBar />
                    <CanvasContainer />
                    <RightBar />
                </div>

                {/* Modals */}
                <LoadingModal />
            </ProgressStepsProvider>
        </Layout>
    );
}

export default Home;
