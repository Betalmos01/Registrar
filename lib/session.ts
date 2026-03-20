"use server";

import crypto from "node:crypto";
import { cookies } from "next/headers";
import { env } from "./env";

export type SessionUser = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  display_name: string;
  profile_photo: string;
  profile_title: string;
  profile_bio: string;
  profile_accent: string;
  role: string;
};

type SessionPayload = {
  user: SessionUser;
  exp: number;
};

const COOKIE_NAME = "bpc_registrar_session";
const FLASH_COOKIE_NAME = "bpc_registrar_flash_success";
const MAX_AGE_SECONDS = 60 * 60 * 12;

function sign(value: string): string {
  return crypto.createHmac("sha256", env.SESSION_SECRET).update(value).digest("hex");
}

function encode(payload: SessionPayload): string {
  const base = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
  return `${base}.${sign(base)}`;
}

function decode(raw: string): SessionPayload | null {
  const [base, signature] = raw.split(".");
  if (!base || !signature) return null;
  if (sign(base) !== signature) return null;

  try {
    const payload = JSON.parse(Buffer.from(base, "base64url").toString("utf8")) as SessionPayload;
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const jar = await cookies();
  const raw = jar.get(COOKIE_NAME)?.value;
  if (!raw) return null;
  return decode(raw)?.user ?? null;
}

export async function setSession(user: SessionUser): Promise<void> {
  const jar = await cookies();
  const payload: SessionPayload = {
    user,
    exp: Math.floor(Date.now() / 1000) + MAX_AGE_SECONDS
  };

  jar.set(COOKIE_NAME, encode(payload), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE_SECONDS
  });
}

export async function clearSession(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
}

export async function setSuccessFlash(message: string): Promise<void> {
  const jar = await cookies();
  jar.set(FLASH_COOKIE_NAME, message, {
    httpOnly: false,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60
  });
}

export async function getSuccessFlash(): Promise<string> {
  const jar = await cookies();
  return jar.get(FLASH_COOKIE_NAME)?.value ?? "";
}
