import MVRContainer from "../components/MVRContainer.tsx";
import LoadingModal from "../components/LoadingModal.tsx";
import { ProgressStepsProvider } from "../contexts/ProgressContext.tsx";
import { MVRFileProvider } from "../contexts/MVRFileContext.tsx";
import FileUpload from "../components/FileUpload.tsx";

function Home() {
    return (
        <MVRFileProvider>
            <ProgressStepsProvider>
                <h1 className="text-3xl font-bold underline"> Hello world! </h1>
                <FileUpload />
                <LoadingModal />
                <MVRContainer />
            </ProgressStepsProvider>
        </MVRFileProvider>
    );
}

export default Home;
