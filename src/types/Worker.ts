// just holding some placeholder data to display
export default interface Worker {
  filename: string,
  progress: number,
  status: "Finished" | "Running" | "Idle" | "Failed",
}
