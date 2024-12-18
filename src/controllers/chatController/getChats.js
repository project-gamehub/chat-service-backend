import { customError } from "../../errors/errorUtils/index.js";
import chatService from "../../services/chatService.js";

const getChats = async (req, res) => {
    const userId = req.senderId;

    if (!userId) {
        throw new customError(400, "User Id is required");
    }

    const chats = await chatService.getChats(userId);

    return res.status(200).json({
        message: "Chats retrieved successfully",
        chats,
        success: true
    });
};

export default getChats;
