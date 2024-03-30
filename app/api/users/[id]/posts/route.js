import Prompt from "@models/prompts";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({ creator: params.id }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    const errorMessage = { error: "Failed to fetch all prompts" };
    return new Response(JSON.stringify(errorMessage), { status: 500 });
  }
  
};
