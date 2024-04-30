"use client";
import React, { useState } from "react";
import { Badge } from "@/app/_components/badge";
import {
    IconChevronDown,
    IconChevronUp,
} from "@/app/_components/icons/icons";
import { CourseCurriculumProps } from "./course-curriculum.type";

export const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {data?.map((chapter, index) => (
                <div className="rounded-xl" key={`chapter-${chapter.id}`}>
                    <h2 className="accordion-title">
                        <button
                            onClick={() => toggleAccordion(index)}
                            type="button"
                            className={`${
                                index === activeIndex
                                    ? " text-white "
                                    : "text-base-content"
                            }`}
                        >
                            <span className="h-6 w-6  drop-shadow-md rounded-full flex items-center justify-center font-bold text-sm ml-2 bg-base-content/10">
                                {index}
                            </span>
                            <span className="ml-auto">{chapter.title}</span>
                            <div className="hidden md:flex gap-2 ml-3">
                                <Badge variant="info">
                                    {chapter.numOfLectures} مبحث{" "}
                                </Badge>
                                <Badge variant="accent">
                                    {chapter.duration}{" "}
                                </Badge>
                            </div>
                            {activeIndex === index ? (
                                <IconChevronUp width={18} />
                            ) : (
                                <IconChevronDown width={18} />
                            )}
                        </button>
                    </h2>
                    {activeIndex === index && (
                        <div className={`accordion-content`}>
                            <ol
                                className={`relative  pr-5 border-primary/20 ${
                                    chapter.lectures.length > 1
                                        ? "border-r-2"
                                        : ""
                                }`}
                            >
                                {chapter.lectures.map((lecture) => (
                                    <li
                                        className="py-5 border-b border-base-content/10 ml-4 border-dashed last-of-type:border-0"
                                        key={`lecture${lecture.title}`}
                                    >
                                        <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 rounded-full -right-2  bg-primary/30"></span>

                                        <h3 className="text-base font-semibold text-gray-900 flex items-center justify-between">
                                            {lecture.title}
                                            <div className="flex items-center gap-2">
                                                <Badge
                                                    variant="info"
                                                    className="!w-20 mt-1"
                                                >
                                                    {lecture.duration}{" "}
                                                </Badge>
                                            </div>
                                        </h3>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};