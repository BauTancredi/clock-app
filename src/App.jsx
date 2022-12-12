import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Clock from "./components/Clock";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Clock />
    </QueryClientProvider>
  );
}

export default App;
