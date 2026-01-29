"use client";

import { useEffect } from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Error({ error, reset }) {
   useEffect(() => {
      console.error(error);
   }, [error]);

   return (
      <div className="min-h-screen flex items-center justify-center">
         <Container>
            <div className="text-center">
               <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
               <h2 className="text-3xl font-bold text-white mb-4">Something went wrong</h2>
               <p className="text-gray-400 mb-8 text-lg">We're sorry for the inconvenience. Please try again.</p>
               <div className="flex gap-4 justify-center">
                  <Button onClick={() => reset()} variant="primary">
                     Try Again
                  </Button>
                  <Button href="/" variant="outline">
                     Go Home
                  </Button>
               </div>
            </div>
         </Container>
      </div>
   );
}
