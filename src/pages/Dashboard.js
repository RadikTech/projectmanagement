import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
        setProjects(storedProjects);
        console.log(localStorage.getItem("projects"));
    }, []);

    const deleteProject = (index) => {
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
        localStorage.setItem("projects", JSON.stringify(updatedProjects));
    };

    const data = [
        { month: "Jan", earnings: 1200 },
        { month: "Feb", earnings: 1500 },
        { month: "Mar", earnings: 900 },
        { month: "Apr", earnings: 2000 },
        { month: "May", earnings: 1700 },
    ];

    return (
        <div className="p-6 space-y-6 md:p-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

            {/* Projects Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-200"
                    >
                        <h2 className="font-semibold text-xl text-gray-900">{project.name}</h2>
                        <p className="text-gray-600 text-sm">Due: {project.dueDate}</p>

                        <div className="flex justify-between items-center mt-2">
                            <span
                                className={`text-sm ${project.status === "Active" ? "text-green-500" : "text-gray-500"}`}
                            >
                                {project.status}
                            </span>

                            <button
                                onClick={() => deleteProject(index)}
                                className="text-sm text-red-500 hover:text-red-700"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Earnings Overview Section */}
            <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <h2 className="font-semibold text-xl text-gray-900 mb-4">Earnings Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        barSize={40}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="earnings" fill="#4F46E5" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;
