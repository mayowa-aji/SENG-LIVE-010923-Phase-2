const ProjectListItem = ({project }) => {
  const {name, about, link, phase, image} = project
  return (
    <li>
      <br/>
      <h2>ProjectListItem Component</h2>
      <p>Title: {name}</p>
      <p>About: {about}</p>
      <a href = {link}>Project Link</a>
      <p>Phase: {phase}</p>
      {/* <img src={image}/> */}
    </li>

  );
}

export default ProjectListItem
