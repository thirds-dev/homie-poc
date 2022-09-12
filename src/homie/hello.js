import audio from "./audio";

const hello = async () => audio.play.random({ path: "hi" });

export default hello;