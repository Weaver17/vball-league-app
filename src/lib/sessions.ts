import "server-only"; // Ensure this file is only used on the server side
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const key = new TextEncoder().encode(process.env.JWT_SECRET);

const cookie = {
    name: "session",
    options: { httpOnly: true, sameSite: "lax", secure: true },
    duration: 1000 * 60 * 60 * 24,
};

export async function encrypt(payload: JWTPayload | undefined) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1day")
        .sign(key);
}

export async function decrypt(session: string | Uint8Array<ArrayBufferLike>) {
    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        console.log(error);
        return null;
    }
}

// CREATE SESSION
export async function createSession(userId: string) {
    const expires = new Date(Date.now() + cookie.duration);
    const session = await encrypt({ userId, expires: expires.toISOString() });

    (await cookies()).set(cookie.name, session, { expires });
}

// VERIFY SESSION
export async function verifySession() {
    const currentCookie = (await cookies()).get(cookie.name)?.value;
    const session = await decrypt(currentCookie ?? "");

    if (!session) {
        return null;
    }

    return { userId: session.userId };
}

// DELETE SESSION
export async function deleteSession() {
    (await cookies()).delete(cookie.name);
    revalidatePath("/");
}
