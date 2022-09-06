import PvRecorder from "@picovoice/pvrecorder-node";

export const list = () => PvRecorder.getAudioDevices();
