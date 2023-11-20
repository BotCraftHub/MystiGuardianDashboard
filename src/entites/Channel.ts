import {Snowflake} from "./Snowflake";

export interface Channel extends Snowflake {
    /**
     * The name of this channel.
     *
     * @return the name of this channel
     */
    name: string;

    /**
     * The type of this channel.
     *
     * @return the type of this channel
     */
    type: number;
}