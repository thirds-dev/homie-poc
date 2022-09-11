import PvRecorder from "@picovoice/pvrecorder-node";

const list = () => PvRecorder.getAudioDevices();

export default list;
