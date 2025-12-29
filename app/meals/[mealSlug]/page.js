export default async function MealDetailsPage({ params }) {
  const { mealSlug } = await params;
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Meal details page {mealSlug}
      </h1>
    </main>
  );
}
