// src/models/User.ts
export type UserRole = 'ADMIN' | 'STUDENT' | 'CLIENT';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  progress?: Record<string, number>; // courseId -> completion percentage
  badges?: string[];
}

// src/models/Course.ts
export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  lessons: string[]; // lesson IDs
  category: string;
  instructorId: string;
}

// src/models/Lesson.ts
export type LessonType = 'VIDEO' | 'READING' | 'LISTENING' | 'QUIZ' | 'FLASHCARD' | 'CHALLENGE';

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  type: LessonType;
  content: any;
  order: number;
  duration?: number; // in minutes
}
