import classNames from "classnames"
import { useGetLessonsQuery } from "../graphql/generated"
import { Lesson } from "./Lesson"




interface SidebarProps {
    sidebarStatus: boolean
}

export function Sidebar( props: SidebarProps) {
    const { data } = useGetLessonsQuery()

    return (
        <aside 
            className={classNames('w-[348px] bg-gray-700 p-6 border-l border-gray-600 md:right-0 z-50 absolute md:relative h-full md:h-auto transition-all', {
                'right-0' : props.sidebarStatus,
                '-right-[348px]' : !props.sidebarStatus
            })}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de Aulas
            </span>
            <div className="flex flex-col gap-8 overflow-auto">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug!}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}

            </div>
        </aside>
    )
}