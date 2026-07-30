import {
    FaBrain,
    FaRobot,
    FaProjectDiagram
} from "react-icons/fa";

const projects = [

    {
        id:1,

        title:"Merchant Fraud Detection System",

        icon:FaBrain,

        description:
        "Designed an end-to-end fraud detection pipeline on 7M+ transactions using advanced feature engineering and ensemble machine learning models.",

        tech:[
            "Python",
            "TensorFlow",
            "XGBoost",
            "LightGBM",
            "SHAP",
            "Pandas"
        ],

        stats:[
            "7M+ Transactions",
            "25+ Features",
            "94%+ F1 Score"
        ],

        github:"https://github.com/atharvagaur",

        demo:"#"

    },

    {

        id:2,

        title:"RAG Learning Assistant",

        icon:FaRobot,

        description:
        "AI-powered adaptive learning assistant capable of understanding uploaded documents using semantic search and Retrieval-Augmented Generation.",

        tech:[
            "LangChain",
            "ChromaDB",
            "FAISS",
            "LLM",
            "Python"
        ],

        stats:[
            "Semantic Search",
            "PDF Upload",
            "Adaptive Learning"
        ],

        github:"https://github.com/Atharvagaur/Q_and_A_Chatbot_using_RAG",

        demo:"#"

    },

    {

        id:3,

        title:"Next Word Prediction",

        icon:FaProjectDiagram,

        description:
        "Deep Learning project using stacked LSTMs for intelligent next-word prediction with custom preprocessing and tokenization.",

        tech:[
            "TensorFlow",
            "LSTM",
            "NLP",
            "Python"
        ],

        stats:[
            "75-80% Accuracy",
            "Embedding Layer",
            "Tokenizer"
        ],

        github:"https://github.com/Atharvagaur/Next_Word_Prediction_LSTM",

        demo:"#"

    }

];

export default projects;