function filterfiles(e) {
    const files = document.querySelectorAll(".docs div");
    const e = e.target.dataset.filter
    if (e === "all") {
        files.forEach(files => files.classList.remove('hidden'));
} 
else {
    files.forEach(files => {
      files.classList.contains(e) ? 
      files.classList.remove('hidden') : 
      files.classList.add('hidden');
    });
  };
}