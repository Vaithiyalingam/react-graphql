export const RepoInfo = ({ repo }) => {
  const license = (repo) => {
    switch (repo.licenseInfo?.spdxId) {
      case undefined:
        return (
          <span
            className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-danger"
            style={{ fontSize: "0.6em" }}
          >
            NO LICENSE
          </span>
        );
        break;
      case "NOASSERTION":
        return (
          <span
            className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-warning"
            style={{ fontSize: "0.6em" }}
          >
            {repo.licenseInfo.spdxId}
          </span>
        );
        break;
      default:
        return (
          <span
            className="px-1 py-0 ms-1 d-inline-block btn btn-sm btn-success"
            style={{ fontSize: "0.6em" }}
          >
            {repo.licenseInfo.spdxId}
          </span>
        );
    }
  };

  return (
    <li className="list-group-item" key={repo.id.toString()}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
          <a className="h5 mb-0 text-decoration-none" href={repo.url}>
            {repo.name}
          </a>
          <p className="small">{repo.description}</p>
        </div>
        <div className="text-nowrap ms-1">
          {license(repo)}
          <span
            className={`px-1 py-1 ms-1 d-inline-block btn btn-sm ${
              repo.viewerSubscription === "SUBSCRIBED"
                ? "btn-success"
                : "btn-outline-secondary"
            }`}
          >
            {repo.viewerSubscription}
          </span>
        </div>
      </div>
    </li>
  );
};
