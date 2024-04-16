function post() {
  const postInput = document.getElementById('post-input');
  const postText = postInput.value.trim();

  if (postText !== '') {
    const timeline = document.getElementById('timeline');
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `<p>User123: ${postText}</p>`;
    timeline.appendChild(postElement);

    // Clear the input field
    postInput.value = '';
  } else {
    alert('Please enter a post before submitting.');
  }
}
