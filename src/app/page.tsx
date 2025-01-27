import Login from "./login/page";

export default function Home() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {/* Background Section */}
      <section
        style={{
          backgroundImage: "url('/fct1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: -1,
        }}
      ></section>

      {/* Encapsulate login into a flex box */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Login/>

      </div>
    </div>
  );
}
