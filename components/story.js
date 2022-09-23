export default function Story({ title, icon = 'bi-eye', children }) {
  // Define classes for icon visualization
  icon = 'btn bi ' + icon;

  let HEADER = (
    <header class="row pt-2">
      <div class="col text-center">
        <i class={icon}></i>
        <h2 class="fw-normal mt-2 mb-4 fs-3">{title}</h2>
      </div>
    </header>
  );

  if (title === undefined) HEADER = '';

  return (
    <div class="story container-fluid pt-3 mb-3 fs-5">
      {HEADER}
      <section class="row">{children}</section>
    </div>
  );
}
