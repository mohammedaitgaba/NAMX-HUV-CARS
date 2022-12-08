import img from "../../assets/images/cars/namx-tank-600w.webp";
import PrimaryButton from "../../layouts/button/PrimaryButton.jsx";

const PreOrder = () => {
    const Order = () => {
        console.log("Pre Order");
    };

    const Update = () => {
        console.log("Update");
    };

    return (
        <div className=" h-screen max-w-full  flex justify-center">
            <div className="h-5/6 w-4/6 mt-8 mb-24 flex justify-around bg-gray">
                <div className="">
                    <img className="h-full" src={img} alt="img" />
                </div>
                <div className="content flex flex-col gap-8 w-3/5 py-4">
                    <div className="content-ele flex justify-around">
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-xl">Name</label>
                            <h1 className="">namx 34565Y</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-xl">Color</label>
                            <h1>#34565Y</h1>
                        </div>
                    </div>
                    <div className="content-ele content-ele flex justify-around">
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-xl">Name</label>
                            <h1>namx 34565Y</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-xl">Color</label>
                            <h1>#34565Y</h1>
                        </div>
                    </div>
                    <div className="content-ele content-ele flex justify-around">
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-xl">Name</label>
                            <h1>namx 34565Y</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-xl">Color</label>
                            <h1>#34565Y</h1>
                        </div>
                    </div>
                    <div className="content-ele content-ele flex justify-around">
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-xl">Name</label>
                            <h1>namx 34565Y</h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold text-xl">Color</label>
                            <h1>#34565Y</h1>
                        </div>
                    </div>
                    <div className="mt-auto flex justify-around">
                        <div className="">
                            <PrimaryButton
                                children={"Update !"}
                                onClick={() => Update()}
                                width={"w-32"}
                            />
                        </div>
                        <div className="">
                            <PrimaryButton
                                children={"Pre Order"}
                                onClick={() => Order()}
                                width={"w-40"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreOrder;
