import React from "react";
import Home from "./pages/Home";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home></Home>
    </QueryClientProvider>
  );
}

function Example() {}
