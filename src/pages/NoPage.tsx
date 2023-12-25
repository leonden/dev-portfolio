import Blob from "../components/Blob";

function NoPage() {
  return (
    <>
      <div
        id="no-page"
        className="relative w-screen h-screen grid place-items-center overflow-hidden"
      >
        <Blob />
        <div className="grid place-items-center text-center z-10">
          <h1 className="font-mentra font-bold italic text-6xl z-10">404</h1>
          <h2 className="font-rota z-10">
            The requested page does not exist :(
          </h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            fill="none"
            viewBox="0 0 200 200"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2
          -translate-y-1/2 z-0"
          >
            <path
              fill="url(#paint0_linear_105_296)"
              fill-rule="evenodd"
              d="M200 98.523A41.9 41.9 0 0 1 188.941 100h-44.708c-23.116 0-41.855 18.739-41.855 41.854v49.465c0 2.976-.311 5.88-.901 8.681A41.888 41.888 0 0 1 100 188.941v-44.708c0-23.116-18.739-41.855-41.854-41.855H8.68a42.08 42.08 0 0 1-8.68-.901A41.888 41.888 0 0 1 11.06 100h44.707c23.116 0 41.855-18.739 41.855-41.854V8.68c0-2.976.31-5.88.901-8.681A41.9 41.9 0 0 1 100 11.06v44.707c0 23.116 18.739 41.855 41.855 41.855h49.464c2.976 0 5.88.31 8.681.901Z"
              clip-rule="evenodd"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_105_296"
                x1="100"
                x2="100"
                y1="0"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DF99F7"></stop>
                <stop offset="1" stop-color="#FFDBB0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}

export default NoPage;
