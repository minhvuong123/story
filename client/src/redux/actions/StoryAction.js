export const GET_STORIES = "GET_STORIES";
export const GET_STORY = "GET_STORY";
export const GET_CHAPTERS = "GET_CHAPTERS";


export const getStory = (story) => {
  return {
    type: GET_STORY,
    story
  }
}

export const getStories = (stories) => {
  return {
    type: GET_STORIES,
    stories
  }
}

export const getChapters = (chapters) => {
  return {
    type: GET_CHAPTERS,
    chapters
  }
}