"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalProvider() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();

      cal("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#A3E635",
          },
        },
      });
    })();
  }, []);

  return null;
}