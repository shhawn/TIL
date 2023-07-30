/** 
 * Pick<T, K>
 * 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 컨텐츠'
}

/** 
 * Omit<T, K>
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 * Pick 타입을 쓰는데 만약 pick할 프로퍼티 갯수보다 생략할 프로퍼티 갯수가 적다면 Omit을 쓰는 게 더 효율적
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [],
  thumbnailURL: '',
}

/** 
 * Record<K, V>
 * 객체 타입을 만들어주는 유틸리티 타입
 */

type ThumbnailLegacy = {
  large: {
    url: string
  };
  medium: {
    url: string
  };
  small: {
    url: string
  };
}

type Record<K extends keyof any, V> = {
  [key in K]: V
}

type Thumbnail = Record<'large' | 'medium' | 'small', { url: string }>;
