import { For, createEffect } from "solid-js"
import { useGlobalTopic } from "../GlobalContext/global-topic"
import {
  useDragDropContext,
  createDraggable,
  createDroppable,
} from "@thisbeyond/solid-dnd"

export default function EditGuideSidebar() {
  const topic = useGlobalTopic()
  const [, { onDragEnd }] = useDragDropContext()!

  onDragEnd(({ draggable, droppable }) => {
    if (!droppable) return

    const sections = topic.globalTopic.latestGlobalGuide.sections

    console.log(sections, "sections")

    const sectionTitleBeingDropped = droppable.id
    const sectionTitleDroppedInto = draggable.id

    const section_idx_being_dragged = sections.findIndex(
      (s) => s.title === sectionTitleBeingDropped,
    )
    if (section_idx_being_dragged === -1) return

    const section_idx_being_dropped_into = sections.findIndex(
      (s) => s.title === sectionTitleDroppedInto,
    )
    if (section_idx_being_dropped_into === -1) return

    topic.set("latestGlobalGuide", "sections", (s) => {
      const copy = [...s]
      /*
        Swap indexes
      */
      ;[copy[section_idx_being_dragged], copy[section_idx_being_dropped_into]] =
        [
          copy[section_idx_being_dropped_into]!,
          copy[section_idx_being_dragged]!,
        ]
      return copy
    })
  })

  return (
    <>
      <div class="flex flex-col gap-2 p-5">
        <For each={topic.globalTopic.latestGlobalGuide.sections}>
          {(section) => {
            return (
              <div
                ref={(el) => {
                  createEffect(() => {
                    createDraggable(section.title)(el)
                    createDroppable(section.title)(el)
                  })
                }}
                class="cursor-pointer"
              >
                {section.title}
              </div>
            )
          }}
        </For>
      </div>
    </>
  )
}
