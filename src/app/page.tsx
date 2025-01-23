import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Home</h1>
      <Button>Click me</Button>
    </div>
  );
}
