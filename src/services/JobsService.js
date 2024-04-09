import { dbContext } from "../db/DbContext.js"


class JobsService {
  async getJobs() {
    const jobs = await dbContext.Jobs.find()
    return jobs
  }

  async getJobById(jobId) {
    const job = await dbContext.Jobs.findById(jobId)
    if (!job) throw new Error(`Cannot find job with is: ${jobId}`)
    return job
  }

  async searchJobs(searchQuery) {
    const jobs = await dbContext.Jobs.find(searchQuery)
    return jobs
  }
}

export const jobsService = new JobsService()