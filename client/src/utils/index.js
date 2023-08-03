import { surpriseMePrompts } from "../constants"

export const getRandomPrompt = (promt) => {
  const randomindex = Math.floor(Math.random() * surpriseMePrompts.length)

  const randomPromt = surpriseMePrompts[randomindex]

  if (randomPromt === promt) {
    return getRandomPrompt(promt)
  }

  return randomPromt
}
