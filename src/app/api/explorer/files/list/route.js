import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const drivePath = url.searchParams.get("drivePath");

    const content = await getDriveContent(drivePath);

    return NextResponse.json(content, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Error reading drive content" },
      { status: 500 }
    );
  }
}

async function getDriveContent(drivePath) {
  try {
    const fullPath = path.join(drivePath);
    const items = await fs.promises.readdir(fullPath);
    const result = [];

    for (const item of items) {
      const itemPath = path.join(fullPath, item);
      const stats = await fs.statSync(itemPath);

      result.push({
        name: item,
        isDirectory: stats.isDirectory(),
      });
    }

    return result;
  } catch (error) {
    console.error("Error reading drive content:", error);
    throw new Error("Error reading drive content");
  }
}
