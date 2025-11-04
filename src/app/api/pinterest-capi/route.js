import { NextResponse } from "next/server";

const PINTEREST_TOKEN = "2613682240957";
const PINTEREST_TAG_ID = "2613682240957";

export async function POST(req) {
  try {
    const body = await req.json();

    const payload = {
      tag_id: PINTEREST_TAG_ID,
      event_name: body.event_name,
      event_time: Math.floor(Date.now() / 1000),
      action_source: "web",
      user_data: body.user_data || {},
      custom_data: body.custom_data || {},
    };

    const res = await fetch("https://api.pinterest.com/v5/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PINTEREST_TOKEN}`,
      },
      body: JSON.stringify({ data: [payload] }),
    });

    const response = await res.json();
    return NextResponse.json({ success: true, response });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
