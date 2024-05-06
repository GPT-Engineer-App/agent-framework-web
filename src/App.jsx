import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription
} from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle>Agent Framework Dashboard</CardTitle>
            <CardDescription>Interact and monitor the agent framework performance.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Visualize agent performance and system health monitoring here.</p>
            <hr className="my-4" />
            <Button onClick={() => setCount(count + 1)}>Interact</Button>
            <div>Interactions Count: {count}</div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;