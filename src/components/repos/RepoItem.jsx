import { FaEye, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-3xl font-semibold">
          <a href={html_url} target="_blank" rel="noreferrer">
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div className="flex">
          <div className="mr-2 badge-info badge-lg flex items-center">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="mr-2 badge-success badge-lg flex items-center">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="mr-2 badge-error badge-lg flex items-center">
            <FaEye className="mr-2" /> {open_issues}
          </div>
          <div className="mr-2 badge-warning badge-lg flex items-center">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
