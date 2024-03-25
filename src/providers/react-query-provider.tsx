"use client";

import { queryClient } from "@/lib";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export const QueryProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
     {children}
     <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
};
