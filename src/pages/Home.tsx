import MVRContainer from "../components/MVRContainer.tsx";
import LoadingModal from "../components/LoadingModal.tsx";
import { ProgressStepsProvider } from "../contexts/ProgressContext.tsx";
import FileUpload from "../components/FileUpload.tsx";

function Home() {
    return (
        <ProgressStepsProvider>
            <h1 className="text-3xl font-bold underline"> Hello world! </h1>
            <FileUpload />
            <LoadingModal />
            <MVRContainer />
        </ProgressStepsProvider>
    );
}

export default Home;
