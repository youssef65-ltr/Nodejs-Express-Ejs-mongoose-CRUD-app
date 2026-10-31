// this code for change the finalization of a task.
document.querySelectorAll('input[type="checkbox"]').forEach(box => {
  box.addEventListener('change', async () => {
    const id = box.dataset.id;

    const res = await fetch(`/tasks/${id}/toggle`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isFinished: box.checked })
    });

  });
});