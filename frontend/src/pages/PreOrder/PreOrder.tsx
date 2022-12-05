import img from '../../assets/images/cars/namx-tank-600w.webp'


const PreOrder = () => {
    return (
        <div className='p-4 h-screen max-w-full  flex justify-center'>
            <div className='h-5/6 w-4/6 mt-8 mb-24 flex justify-around gap-8 bg-primary rounded-lg p-6'>
                <div className=''>
                    <img className='h-full rounded-lg' src={img} alt="img" />
                </div>
                <div className='content flex flex-col gap-8 w-1/2'>
                    <div className='content-ele flex justify-around'>
                        <div className=''>
                            <label className='font-bold text-sm text-quinary'>Name</label>
                            <h1 className=''>namx 34565Y</h1>
                        </div>
                        <div>
                            <label className='font-bold text-sm text-quinary'>Color</label>
                            <h1>#34565Y</h1>
                        </div>
                    </div>
                    <div className='content-ele content-ele flex justify-around'>
                        <div className=''>
                            <label className='font-bold text-quinary'>Name</label>
                            <h1>namx 34565Y</h1>
                        </div>
                        <div className=''>
                            <label className='font-bold text-sm text-quinary'>Color</label>
                            <h1>#34565Y</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreOrder;
