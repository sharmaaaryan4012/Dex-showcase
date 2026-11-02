from fastapi import FastAPI, UploadFile, File

app = FastAPI(
    title="Dex Backend Orchestration",
    description="Structural scaffold for Dex Personal CRM routing"
)


@app.post("/capture")
async def capture_voice_memo(file: UploadFile = File(...)):
    """Accepts unstructured audio dump and routes to transcription/extraction."""
    pass


@app.get("/contacts/{contact_id}/briefing")
async def get_briefing_card(contact_id: str):
    """Fetches prioritized briefing card context for pre-meeting prep."""
    pass


@app.post("/search")
async def semantic_search(query: str):
    """Natural language semantic retrieval over pgvector contact embeddings."""
    pass


@app.post("/enrichment/trigger")
async def trigger_passive_enrichment():
    """Trigger background job to verify/update contact career data."""
    pass
