import React from 'react'

const Statistics = () => {
  return (
    <div className="container mx-auto px-6 py-8">
    <div className="mt-4">
        <div className="flex flex-wrap mx-6">
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                    <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.5 7c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202zm-1.441 3.506c.639 1.186.946 2.252.946 3.666 0 1.37-.397 2.533-1.005 3.981v1.847c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1h-13v1c0 .552-.448 1-1 1h-1.5c-.552 0-1-.448-1-1v-1.847c-.608-1.448-1.005-2.611-1.005-3.981 0-1.414.307-2.48.946-3.666.829-1.537 1.851-3.453 2.93-5.252.828-1.382 1.262-1.707 2.278-1.889 1.532-.275 2.918-.365 4.851-.365s3.319.09 4.851.365c1.016.182 1.45.507 2.278 1.889 1.079 1.799 2.101 3.715 2.93 5.252zm-16.059 2.994c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm10 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm2.941-5.527s-.74-1.826-1.631-3.142c-.202-.298-.515-.502-.869-.566-1.511-.272-2.835-.359-4.441-.359s-2.93.087-4.441.359c-.354.063-.667.267-.869.566-.891 1.315-1.631 3.142-1.631 3.142 1.64.313 4.309.497 6.941.497s5.301-.184 6.941-.497zm2.059 4.527c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-18.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2z" /></svg>
                    </div>
                    <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">4</h4>
                        <div className="text-gray-500">Total Cars</div>
                    </div>
                </div>
            </div>
           
            <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                    <div className="p-3 rounded-full bg-green-600  bg-opacity-75">
                    {/* <Bag size="32" color="#FF8A65"/> */}
                    </div>
                    <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">2</h4>
                        <div className="text-gray-500">Total types  </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                    <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M17.012 18.708l-4.318-1.07-3.981 3.871c-.326.317-.755.491-1.209.491-.85 0-1.504-.691-1.504-1.502v-4.519l-4.13-8.979h-1.37c-.311 0-.5-.26-.5-.5 0-.239.189-.5.5-.5h2.025l4.194 9.132 10.38 2.569c.363-1.544 1.75-2.695 3.404-2.695 1.93 0 3.497 1.567 3.497 3.497s-1.567 3.497-3.497 3.497c-1.861 0-3.385-1.457-3.491-3.292zm-10.012-2.481v4.271c0 .48.612.688 1.017.294l3.534-3.437-4.551-1.128zm13.503 1.026c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25zm1.497-9.25l-17.483-.003 2.454 5.367c.256.561.756.972 1.356 1.114l6.593 1.571c.805.192 1.644-.132 2.112-.814l4.968-7.235zm-10-1.003h-5v-2h5v2zm6 0h-5v-2h5v2zm-3-3h-5v-2h5v2z"/></svg>
                    </div>
                    <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">5</h4>
                        <div className="text-gray-500">Total orders </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Statistics