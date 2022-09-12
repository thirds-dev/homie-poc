import audio from "../audio";

const random = async () => audio.play.random({ path: "jokes" });

export default random;
