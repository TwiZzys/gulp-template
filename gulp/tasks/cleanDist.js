import {deleteAsync} from "del";
import {config} from "../../config.js";

export const cleanDist = () => {
    return deleteAsync(config.dist);
}