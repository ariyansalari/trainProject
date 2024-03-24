"use client";

import { queryClient } from "@/lib";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
export const QueryProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
     {children}
     <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
};
