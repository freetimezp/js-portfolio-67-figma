/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import styles from "./Avatar.module.css";

export function Avatar({ name, otherStyles }: { otherStyles: string; name: string }) {
    return (
        <div className={`${styles.avatar} ${otherStyles} h-9 w-9`} data-tooltip={name}>
            <Image
                src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
                fill
                alt="random"
                className={styles.avatar_picture}
            />
        </div>
    );
}
