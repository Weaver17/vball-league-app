import CreatePlayerForm from "@/components/app/auth/create-player-form";
import { ThemeBtn } from "@/components/buttons/theme-btn";

function CreatePlayerPage() {
    return (
        <div className="flex flex-col justify-center items-center relative">
            <div className="absolute top-4 right-4">
                <ThemeBtn />
            </div>
            <CreatePlayerForm />
        </div>
    );
}

export default CreatePlayerPage;
