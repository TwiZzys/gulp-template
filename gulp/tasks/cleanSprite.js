import {deleteAsync} from "del";
import {config} from "../../config.js";
import {bs} from "./server.js";

const {spriteFile} = config.sprite;

export const cleanSprite = async () => {
    await deleteAsync(spriteFile);
    bs.reload();
};
