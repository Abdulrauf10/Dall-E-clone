import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { preview } from "../assets"
import { FormField, Loader } from "../components"
import { getRandomPrompt } from "../utils"

const CreatePost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    promt: "",
    photo: ""
  })
  const [generatingImag, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {}

  const handleChange = (e) => {}

  const handleSurpriseMe = () => {}
  return (
    <section className=" max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px] ">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Create Imaginative and visually stunning images through Dall-E
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            lableName={"Your Name"}
            type={"text"}
            name={"name"}
            placeHolder={"John Doe"}
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            lableName={"Prompt"}
            type={"text"}
            name={"promt"}
            placeHolder={"a painting of a fox in the style of Starry Night"}
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost
