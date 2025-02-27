import CalendarIcon from "../../assets/images/calendarIcon.svg";
import TaskIcon from "../../assets/images/taskIcon.svg";
import KanbanIcon from "../../assets/images/kanbanIcon.svg";
import ProjectsIcon from "../../assets/images/projectsIcon.svg";
import NotesIcon from "../../assets/images/notesIcon.svg";
import CalendarImg from "../../assets/images/bordio-calendar-s.webp";
import TaskImg from "../../assets/images/table-view-s.webp";
import KanbanImg from "../../assets/images/kanban-s.webp";
import ProjectsImg from "../../assets/images/all-projects-s.webp";
import NotesImg from "../../assets/images/notes-s.webp";

export const data = [
  { id: 1, name: "Calendar planner", icon: CalendarIcon,  imgSrc: CalendarImg,   path: "calendarPlanner"},
  { id: 2, name: "Task List",        icon: TaskIcon,      imgSrc: TaskImg,       path: "tasklist"},
  { id: 3, name: "Kanban board",     icon: KanbanIcon,    imgSrc: KanbanImg,     path: "kanbanBoard"},
  { id: 4, name: "Projects",         icon: ProjectsIcon,  imgSrc: ProjectsImg,   path: "projects"},
  { id: 5, name: "Notes",            icon: NotesIcon,     imgSrc: NotesImg,      path: "notes"},
];