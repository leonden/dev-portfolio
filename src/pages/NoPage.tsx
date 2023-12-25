function NoPage() {
  return (
    <>
      <div id="no-page" className="w-screen h-screen grid place-items-center">
        <div className="text-center">
          <h1 className="font-mentra font-bold italic text-6xl">404</h1>
          <h2 className="font-rota">The requested page doesn't exist :(</h2>
        </div>
      </div>
    </>
  );
}

export default NoPage;
