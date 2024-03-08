// components/CryptoNews/loading.js

import { Skeleton } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {Array.from({ length: 5 }, (_, index) => (
        <Skeleton key={index} height={200} />
      ))}
    </div>
  );
}
