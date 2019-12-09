export const GET_STORIES = "GET_STORIES";
export const GET_CHAPTERS_NEW = "GET_CHAPTERS_NEW";
export const GET_STORY = "GET_STORY";
export const GET_CHAPTERS = "GET_CHAPTERS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_STORY_CATEGORIES = "GET_STORY_CATEGORIES";


export const  getStoryCategories = (stories) => {
  return {
    type: GET_STORY_CATEGORIES,
    stories,
  }
}

export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories,
  }
}

export const getChaptersNew = (chapters) => {
  return {
    type: GET_CHAPTERS_NEW,
    chapters,
  }
}

export const getStory = (story) => {
  return {
    type: GET_STORY,
    story,
  }
}

export const getStories = (stories) => {
  return {
    type: GET_STORIES,
    stories,
  }
}

export const getChapters = (chapters) => {
  return {
    type: GET_CHAPTERS,
    chapters,
  }
}