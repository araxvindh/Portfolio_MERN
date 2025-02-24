import "../css/project.css";

const Project = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title"></h1>

            <div className="projects-grid">
                <div className="project-card">
                    <h2 className="project-name">LangChain with RAG Vector DB</h2>
                    <ul className="project-list">
                        <li>Integrated <strong>LangChain</strong> with Retrieval-Augmented Generation (RAG) for an advanced query-answering system.</li>
                        <li>Utilized a <strong>vector database</strong> and <strong>Gemini AI</strong> to enhance retrieval accuracy.</li>
                        <li>Leveraged <strong>Hugging Face embeddings</strong> for efficient document similarity matching.</li>
                        <li>Designed a pipeline for <strong>efficient and accurate document retrieval</strong>.</li>
                    </ul>
                </div>

                <div className="project-card">
                    <h2 className="project-name">Word Search Application (JavaScript, HTML, CSS)</h2>
                    <ul className="project-list">
                        <li>Developed a <strong>comprehensive word search application</strong> using JavaScript, HTML, and CSS.</li>
                        <li>Implemented <strong>grid generation</strong> and a <strong>backtracking-based puzzle-solving</strong> algorithm.</li>
                        <li>Integrated <strong>state management</strong> functionalities for smooth gameplay.</li>
                        <li>Designed and implemented <strong>test case generation</strong> for robust validation.</li>
                        <li>Demonstrated expertise in <strong>interactive puzzle creation</strong> and solving mechanisms.</li>
                        <li>Delivered an <strong>engaging and functional user experience</strong> with a visually appealing UI.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project;
