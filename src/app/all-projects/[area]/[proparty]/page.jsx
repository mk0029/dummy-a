"use client";
import DetailMain from "@/components/all-projects/detail/DetailMain";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const pathname = usePathname();
  const [title, setTitle] = useState("Loading...");

  useEffect(() => {
    if (!pathname) return;

    const segments = pathname.split("/").filter(Boolean);
    const property = segments[2] || "Unknown Product"; // Get product slug

    // Convert slug to readable title (replace '-' with spaces and capitalize)
    const formattedTitle = property
      .replace(/-/g, " ")
      .replace("lodha", "")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    setTitle(formattedTitle);
    document.title = `Lodha | ${formattedTitle}`; // ✅ Update page title
  }, [pathname]);

  return <DetailMain />;
};

export default Page;
