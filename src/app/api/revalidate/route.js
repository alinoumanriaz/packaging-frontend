import { revalidatePath } from "next/cache";

export async function POST(req) {
  const body = await req.json();
  const { paths, token } = body;
  console.log({ frontendRevalidaationAPIWork: paths });
  console.log({ frontendRevalidaationAPIWork: token });

  // Check for authorization token
  if (token !== process.env.FRONTEND_REVALIDATE_SECRET) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  // Check if paths are provided
  if (!paths || !Array.isArray(paths)) {
    return new Response(
      JSON.stringify({ message: "Paths are required and must be an array" }),
      { status: 400 }
    );
  }

  try {
    if (paths.length === 1 && paths[0] === "all") {
      await revalidatePath("/", "layout"); // revalidate root layout
      return new Response(
        JSON.stringify({ message: "Revalidated entire site via root layout" }),
        { status: 200 }
      );
    }
    // Revalidate all paths in parallel
    await Promise.all(
      paths.map(async (path) => {
        await revalidatePath(path);
        console.log(`✅ Revalidated ${path}`);
      })
    );

    return new Response(
      JSON.stringify({ message: `Revalidated ${paths.length} paths` }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Revalidate Error", error);
    return new Response(JSON.stringify({ message: "Error revalidating" }), {
      status: 500,
    });
  }
}
