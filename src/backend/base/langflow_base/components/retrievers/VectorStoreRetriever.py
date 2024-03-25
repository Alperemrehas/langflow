from langchain_core.vectorstores import VectorStoreRetriever

from langflow_base.interface.custom.custom_component import CustomComponent

from langflow_base.field_typing import VectorStore


class VectoStoreRetrieverComponent(CustomComponent):
    display_name = "VectorStore Retriever"
    description = "A vector store retriever"

    def build_config(self):
        return {
            "vectorstore": {"display_name": "Vector Store", "type": VectorStore},
        }

    def build(self, vectorstore: VectorStore) -> VectorStoreRetriever:
        return vectorstore.as_retriever()
