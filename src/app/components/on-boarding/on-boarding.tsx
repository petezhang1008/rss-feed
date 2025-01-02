import HowWork from "./how-work";
import Introduction from "./introduction";
import KeyFeature from "./key-feature";
import Reason from "./reason";
import StartTrial from "./start-trail";

export default function OnBoarding() {
    return (
        <div className='flex flex-col gap-4 w-full justify-center items-center bg-white pt-8 gap-8'>
            <Reason />
            <KeyFeature />
            <HowWork />
            <StartTrial />
        </div>
    )
}