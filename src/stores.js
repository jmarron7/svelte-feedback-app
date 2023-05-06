import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Lorem ea occaecat commodo laboris quis cillum amet consequat. Cillum sit consequat dolore voluptate cillum pariatur ut proident cupidatat. Consectetur reprehenderit ullamco velit pariatur.",
      },
      {
        id: 2,
        rating: 5,
        text: "Lorem ea occaecat commodo laboris quis cillum amet consequat. Cillum sit consequat dolore voluptate cillum pariatur ut proident cupidatat. Consectetur reprehenderit ullamco velit pariatur.",
      },
      {
        id: 3,
        rating: 8,
        text: "Lorem ea occaecat commodo laboris quis cillum amet consequat. Cillum sit consequat dolore voluptate cillum pariatur ut proident cupidatat. Consectetur reprehenderit ullamco velit pariatur.",
      }
])