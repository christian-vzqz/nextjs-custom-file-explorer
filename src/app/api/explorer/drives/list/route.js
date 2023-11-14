import { NextResponse } from "next/server";
import { list } from "drivelist";

export async function GET(req) {
  const url = new URL(req.url);
  const usbOnly = url.searchParams.get("usbOnly");

  const driveList = await list();
  const usbDrives = driveList.filter((drive) => drive.isUSB);
  const drives = usbOnly === "true" ? usbDrives : driveList;
  const mountpoints = drives.flatMap((d) => d.mountpoints.map((mp) => mp));

  return NextResponse.json(mountpoints, { status: 200 });
}
