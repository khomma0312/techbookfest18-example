import { http } from "msw";

export const handlers = [
  http.get("/api/example", () => {
    return new Response(
      JSON.stringify({
        success: true,
        message: "Hello from MSW!",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }),

  http.post("/api/example", async ({ request }) => {
    // リクエストボディを取得してログに出力
    const data = await request.json();
    console.log("POSTリクエストデータ:", data);

    return new Response(
      JSON.stringify({
        success: true,
        message: "データが正常に受信されました",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }),
];
