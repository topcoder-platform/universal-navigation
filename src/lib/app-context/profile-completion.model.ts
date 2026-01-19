export interface ProfileCompletionData {
  completed: boolean
  handle: string
  percentComplete: number
  showToast: string
  dateFields?: [string, Date][]
}
