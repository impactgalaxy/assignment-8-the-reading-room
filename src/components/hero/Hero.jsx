import { Button } from "@material-tailwind/react";

export default function Hero() {
    return (
        <div className="flex *:w-1/2 *:p-4 gap-4 border min-h-[500px] p-8 lg:p-12 bg-[#1313130D] container m-auto rounded-lg">
            <div className="flex items-center justify-center flex-col gap-5 lg:gap-3">
                <h1 className="text-xl lg:text-5xl font-bold">The man who does not read has no advantage over the man who cannot read</h1>
                <Button ripple={true} color="blue">
                    View The List
                </Button>
            </div>
            <div className="bg-hero-pattern bg-center bg-no-repeat bg-cover rounded-2xl">

            </div>

        </div>
    )
}
