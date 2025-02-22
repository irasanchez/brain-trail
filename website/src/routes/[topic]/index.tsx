import GlobalGuide from "../../components/Topic/GlobalGuide"
// @ts-ignore
import { Motion } from "@motionone/solid"
import GuideSidebar from "../../components/Topic/GuideSidebar"
import TopicNav from "../../components/Topic/TopicNav"
import { useGlobalState } from "../../GlobalContext/global"
import { Match, Switch } from "solid-js"
import GuideLinks from "../../components/Topic/GuideLinks"

export default function GlobalTopic() {
  const global = useGlobalState()

  return (
    <>
      <style>{`
        #InfoSidebar {
          display: none;
        }
        #InfoMain {
          width: 100%;
        }
        #InfoOptions {
          display: none;
        }

      @media (min-width: 700px) {
        #InfoSidebar {
          display: flex;
        }
        #InfoMain {
          width: 75%;
        }
        #InfoOptions {
          display: flex
        }
      }
      `}</style>
      <div class="w-screen fixed top-0 right-0 h-screen text-black dark:text-white bg-white dark:bg-[#1C1C1C]">
        <TopicNav />

        <div class="h-[90%] w-full flex">
          <div
            id="InfoMain"
            class="h-full bg-white overflow-auto dark:bg-[#1C1C1C] flex  gap-6 flex-col"
            style={{ padding: "24px 20px 24px 20px" }}
          >
            <Switch>
              <Match when={global.state.guidePage === "Guide"}>
                <GlobalGuide />
              </Match>
              <Match when={global.state.guidePage === "Links"}>
                <GuideLinks />
              </Match>
            </Switch>
          </div>
          <Motion.div
            id="InfoSidebar"
            class="  dark:bg-[#161616] bg-[#F4F4F6] border-l-[0.5px] border-[#69696951] h-full w-[25%] min-w-[250px]"
          >
            <GuideSidebar></GuideSidebar>
          </Motion.div>
          {/* TODO: only here because commenting below block failed.. */}
          {/* add this when we have the data from server for who is learning the topic..  */}
        </div>
      </div>
    </>
  )
}
