"use client";

import CustomLayout from "@/layout/CustomLayout";
import Head from "next/head";
import Image from "next/image";
import ContentList from "./components/ContentList";
import { useEffect, useState } from "react";
import DriveList from "./components/DriveList";

export default function Home() {
  const [drives, setDrives] = useState([]);
  const [driveContent, setDriveContent] = useState([]);
  const [selectedDrive, setSelectedDrive] = useState(null);

  useEffect(() => {
    fetch("/api/explorer/drives/list")
      .then((res) => res.json())
      .then((data) => {
        setDrives(data);
      });
  }, []);

  async function handleSelectDrive(drive) {
    setSelectedDrive(drive);
    const result = await fetch(
      `/api/explorer/files/list?drivePath=${drive.path}`
    );
    const data = await result.json();

    setDriveContent(data);
  }

  return (
    <CustomLayout>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-3xl font-bold py-4">
            Custom File Explorer
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          {!driveContent.length ? (
            <DriveList content={drives} onSelect={handleSelectDrive} />
          ) : (
            <ContentList content={driveContent} />
          )}
        </div>
      </section>
    </CustomLayout>
  );
}
