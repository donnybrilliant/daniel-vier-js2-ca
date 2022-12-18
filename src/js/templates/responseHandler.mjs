export async function responseHandler(response) {
  if (!response.ok) {
    return `<div class="alert alert-danger alert-dismissible" role="alert">
    <div>${response}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
  } else if (response.ok) {
    return `<div class="alert alert-danger alert-dismissible" role="alert">
  <div>${response}</div>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  }
}

export function renderResponse(data, parent) {
  parent.innerHTML += responseHandler(data);
}
