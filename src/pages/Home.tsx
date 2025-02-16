import CanvasContainer from "../components/Home/CanvasContainer.tsx";
import LoadingModal from "../components/modals/LoadingMVR.tsx";
import { ProgressStepsProvider } from "../contexts/ProgressContext.tsx";
import Layout from "../components/Layout.tsx";
import Actions from "../components/Home/Actions.tsx";
import LeftBar from "../components/Home/LeftBar.tsx";
import RightBar from "../components/Home/RightBar.tsx";
import Introduction from "../components/modals/Introduction.tsx";

function Home() {
    return (
        <ProgressStepsProvider>
            <Layout>
                {/* Page elements */}
                <Actions />
                <div className="flex flex-grow min-h-0 bg-primary dark:text-white pt-4 pb-2">
                    <LeftBar />
                    <CanvasContainer />
                    <RightBar />
                </div>

                {/* Modals */}
                <Introduction />
                <LoadingModal />
            </Layout>
        </ProgressStepsProvider>
    );
}

export default Home;
