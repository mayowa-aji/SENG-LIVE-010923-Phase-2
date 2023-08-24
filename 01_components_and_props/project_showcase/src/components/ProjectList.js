import ProjectListItem from "./ProjectListItem";
const ProjectList = ({ projects }) => {
  const ProjectListItems = projects.map(project => {
    return <ProjectListItem
            key={project.id}
            project={project}
            />
  })
  return (
    <>
      <h1>ProjectList Component</h1>
      <ul>{ProjectListItems}</ul>
    </>


  );
}
export default ProjectList
