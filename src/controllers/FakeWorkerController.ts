import { ref, type Ref } from 'vue'
import type Worker from '../types/Worker'

export default class FakeWorkerController {
  public fakeWorkers: Ref<Worker[]> = ref([
    { filename: 'notTheBees.mp4', progress: 100, status: 'Finished' },
    { filename: 'test.mp4', progress: 40, status: 'Running' },
    { filename: 'bushhidthefacts.mp4', progress: 10, status: 'Failed' },
  ])

  public addWorker(worker: Worker) {
    this.fakeWorkers.value.push(worker)
  }

  public removeWorker(worker: Worker) {
    const workerIdx = this.fakeWorkers.value.findIndex((w) => w == worker)
    if (workerIdx == -1) {
      return false
    }
    this.fakeWorkers.value.splice(workerIdx, 1)
    return true
  }

  public updateWorker(worker: Worker, obj: Partial<Worker>) {
    // Since the Workers are fake for now, this is perfectly fine
    Object.assign(worker, obj)
    // If the objects were always correctly passed by
    // reference, the reactivity should just work™
  }

  private tickWorkers() {
    for (const worker of this.fakeWorkers.value.filter((w) => w.status == 'Running')) {
      const givenProgress = Math.random() * 5
      worker.progress = Math.min(worker.progress + givenProgress, 100) // cap to 100%

      if (worker.progress >= 100) {
        worker.status = 'Finished'
      }

      // bushhidthefacts.mp4 is cursed to always fail at random points
      // and the chance increases the closer it gets to finish :)
      // (just for the sake of demoing failed Workers)
      if (worker.filename == 'bushhidthefacts.mp4' && worker.progress >= Math.random() * 90) {
        worker.status = 'Failed'
      }
    }
  }

  constructor(tickInterval = 1000) {
    setInterval(() => {
      this.tickWorkers()
    }, tickInterval)
  }
}
