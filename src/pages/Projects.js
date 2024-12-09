import React, { useState, useEffect } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [form, setForm] = useState({ name: "", dueDate: "", status: "Active" });

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
        setProjects(storedProjects);
    }, []);

    const addProject = () => {
        if (!form.name || !form.dueDate) {
            alert("Please fill in all fields.");
            return;
        }
        const updatedProjects = [...projects, form];
        setProjects(updatedProjects);
        localStorage.setItem("projects", JSON.stringify(updatedProjects));
        setForm({ name: "", dueDate: "", status: "Active" });
    };

    return (
        <div className="p-6 space-y-6 md:p-8">
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>

            <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <h2 className="font-semibold text-lg mb-4 text-gray-800">Add New Project</h2>
                <div className="space-y-4">
                    {/* Project Name Input */}
                    <input
                        type="text"
                        placeholder="Project Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {/* Due Date Input */}
                    <input
                        type="date"
                        value={form.dueDate}
                        onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {/* Status Select */}
                    <select
                        value={form.status}
                        onChange={(e) => setForm({ ...form, status: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
                    </select>
                    {/* Add Project Button */}
                    <button
                        onClick={addProject}
                        className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Add Project
                    </button>
                </div>
            </div>

            {/* Project List */}
            <div>
                {projects.length > 0 ? (
                    <ul className="space-y-4">
                        {projects.map((project, index) => (
                            <li key={index} className="p-4 bg-white shadow rounded-lg border border-gray-200">
                                <h3 className="font-semibold text-lg">{project.name}</h3>
                                <p className="text-sm text-gray-600">Due: {project.dueDate}</p>
                                <p className={`text-sm ${project.status === "Active" ? "text-green-500" : "text-gray-500"}`}>
                                    {project.status}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No projects yet. Add a new project.</p>
                )}
            </div>
        </div>
    );
};

export default Projects;
