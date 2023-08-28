import { createSignal } from "solid-js"
import { useNavigate } from "solid-start"

export default function Pricing() {
  const [planChosen, setPlanChosen] = createSignal("monthly")
  const navigate = useNavigate()

  return (
    <>
      <style></style>
      <div class="h-screen w-screen flex flex-col gap-10 bg-[#fafafa] text-black">
        <div class="h-[80px] w-full flex justify-center items-center gap-6 font-semibold">
          <div
            class="w-[30px] h-[30px] cursor-pointer"
            onClick={() => {
              navigate("/")
            }}
          >
            <img class="rounded-full" src="/logo.jpg" alt="" />
          </div>
          {/* <div>About</div> */}
          {/* TODO: conditional on user log in */}
          <div>Log In</div>
        </div>
        <div class="h-full w-full px-[15%] flex flex-col gap-6">
          <div class="flex items-center justify-between">
            <div class="font-bold text-2xl">Choose a plan</div>
            <div class="flex bg-[#f2f2f2] p-0.5 rounded-full items-center gap-1 text-sm font-light">
              <div class="bg-white p-0.5 px-2 rounded-full">Monthly</div>
              <div class="p-0.5 px-2">Yearly -20%</div>
            </div>
          </div>
          <div class="w-full h-[380px] border border-slate-400 border-opacity-30 rounded-xl bg-white flex">
            <div class="w-full h-full border-r border-slate-400 border-opacity-30 p-8 flex flex-col gap-6">
              <div class="border border-slate-400 border-opacity-30 px-2 p-0.5 w-fit rounded-full font-light text-sm">
                Free
              </div>
              <div class="w-full h-full flex flex-col gap-4">
                <div class="text-2xl font-semibold">
                  $0{" "}
                  <span class="opacity-90 font-light text-sm">per month</span>
                </div>
                <div class="font-light opacity-60 flex flex-col gap-3">
                  <div>
                    • Free{" "}
                    <a href="https://github.com/learn-anything/learn-anything.xyz">
                      open source
                    </a>{" "}
                    desktop app to edit your notes like Obsidian
                  </div>
                  <div>
                    • See parts of guides available. Explore the topic graph.
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center rounded-lg bg-black w-full h-16 opacity-80 text-white">
                Current plan
              </div>
            </div>
            <div class="w-full h-full p-8 flex flex-col gap-6">
              <div class="border border-slate-400 border-opacity-30 px-2 p-0.5 w-fit rounded-full font-light text-sm">
                Member
              </div>
              <div class="w-full h-full flex flex-col gap-4">
                <div class="text-2xl font-semibold gap-2">
                  $6{" "}
                  <span class="opacity-90 font-light text-sm">per month</span>
                </div>
                <div class="font-light opacity-60 flex flex-col gap-2">
                  <div>
                    • See in full 1,000+ high quality guides on various topics
                  </div>
                  <div>• Mark any topic as learned / to learn / learning</div>
                  <div>• Publish your notes to your own personal wiki page</div>
                  <div>
                    • Mark any link you find in LA as completed or to complete
                    later
                  </div>
                  <div>
                    • Sync all your private/public notes with a mobile app
                    (soon)
                  </div>
                  {/* <div>• AI interface to all your notes (soon) </div> */}
                </div>
              </div>
              <div class="flex items-center justify-center rounded-lg bg-black w-full h-16 opacity-80 text-white">
                Current plan
              </div>
            </div>
          </div>
          <div class="flex w-full h-full ">
            <div class="w-full font-light text-3xl">
              <div>Become a member</div>
              <div class="opacity-50 text-xl">
                Unlock premium features and help us build the future of
                education together ♥️
              </div>
            </div>
            <div class="w-full flex flex-col gap-2">
              <div>
                Learn Anything first came to existence in{" "}
                <a href="https://wiki.nikiv.dev/looking-back/2017">2017</a> to
                solve the problem of how does knowledge connect.
              </div>
              <div>
                Since day 1 it has been a{" "}
                <a href="https://github.com/learn-anything/learn-anything.xyz">
                  fully open source project
                </a>{" "}
                with an active community on{" "}
                <a href="https://discord.com/invite/bxtD8x6aNF">Discord</a>.
              </div>
              <div>
                The end goal of Learn Anything is to become the best place and
                tool for keeping track of what you know. What ideas you have.
                What you want to learn next. What you don't know yet. And how
                you can learn that in the most optimal way possible given what
                you know already.
              </div>
              <div>
                All this is achieved by using a powerful graph database that
                connects everything together. LA consists of many topics. Users
                create topics and connect them to other topics in their own
                notes. LA takes these connections and constructs a powerful
                graph. The first version of it you can already see on the site.
              </div>
              <div>
                Each topic has an official guide. This guide is contributed by
                the community. You. Each change you request is reviewed by
                experts of the topic and if the change is good it gets merged.
                You can create your own guides and publish them on your own too.
              </div>
              <div>
                Each topic has an official guide. This guide is contributed by
                the community. You. Each change you request is reviewed by
                experts of the topic and if the change is good it gets merged.
                You can create your own guides and publish them on your own too.
              </div>
              <div>
                This is all just the beginning. Learn Anything will be the first
                to create AGI in a fully open way. Not controlled by any entity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
