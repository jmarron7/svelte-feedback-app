<script>
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";

  let feedback = [
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
    },
  ];

  $: count = feedback.length;
  $: average =
    feedback.reduce((a, { rating }) => a + rating, 0) / feedback.length;
  const deleteFeedback = (e) => {
    const itemId = e.detail;

    feedback = feedback.filter((item) => item.id != itemId);
  };

  const addFeedback = (e) => {
    const newFeedback = e.detail;
    feedback = [newFeedback, ...feedback];
  };
</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback} />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>

<style>
</style>
