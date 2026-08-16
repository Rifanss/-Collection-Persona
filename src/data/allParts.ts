import { Part, Chapter } from '../types';
import { partsData } from './publicationData';
import { parts3to5Data } from './partsData3to5';
import { parts6to8Data } from './partsData6to8';

export const allParts: Part[] = [
  ...partsData,
  ...parts3to5Data,
  ...parts6to8Data,
];

export const allChapters: Chapter[] = allParts.flatMap((p) => p.chapters);

export const getChapterById = (id: string): Chapter | undefined => {
  return allChapters.find((ch) => ch.id === id);
};

export const getChapterByNum = (num: number): Chapter | undefined => {
  return allChapters.find((ch) => ch.num === num);
};

export const getPartByChapterId = (chapterId: string): Part | undefined => {
  return allParts.find((p) => p.chapters.some((ch) => ch.id === chapterId));
};
