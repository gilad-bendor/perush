import { basename, dirname, join } from "path";
import { mkdir, rename, unlink, writeFile } from "fs/promises";

// Like fs.promises.writeFile() with these differences:
// 1. "Safe": will never write half-file.
// 2. Will auto-create the directory if it does not exist.
// We first write to a temporary file, and then rename it to the final file -
//  so the operation is atomic (more thread-safe and crash-resilient).
export async function writeFileSafe(filePath: string, fileContents: string): Promise<void> {
    const tmpFilePath = join(
        dirname(filePath),
        `.tmp.${basename(filePath)}.${Math.random().toString(36).substring(2)}`,
    );

    // Write the temporary file - with auto-creation of the directory.
    try {
        await writeFile(tmpFilePath, fileContents, 'utf-8');
    } catch (error) {
        if ((error as any).code !== 'ENOENT') {
            throw error;
        }
        // Maybe the directory does not exist - create the directory and try to write the temporary file again.
        await mkdir(dirname(tmpFilePath), { recursive: true });
        await writeFile(tmpFilePath, fileContents, 'utf-8');
    }

    // Move the temporary file over the final file - this is atomic and thread-safe.
    try {
        await rename(tmpFilePath, filePath);
    } catch (error) {
        // Something went wrong when moving the temporary file over the final file: cleanup and throw.
        try {
            await unlink(tmpFilePath);
        } catch {}
        throw error;
    }
}
