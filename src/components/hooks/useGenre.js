const useGenre = (selectedCategory) => {
  if (selectedCategory.length < 1) return "";
  const GenreId = selectedCategory.map((g) => g.id);
  return GenreId.reduce((acc, curr) => acc + "," + curr);
};

export default useGenre;
