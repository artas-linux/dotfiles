# Archon Memory System Guide

A comprehensive knowledge graph system for persistent information storage, retrieval, and relationship management.

## Overview

The Archon Memory System provides a structured knowledge graph for storing, organizing, and retrieving information through entities, relations, and observations. It serves as the persistent knowledge base for the Archon MCP ecosystem.

## Core Concepts

### Entities
Entities are the fundamental building blocks representing concepts, objects, or actors in your knowledge graph.

**Properties:**
- `name`: Unique identifier for the entity
- `entityType`: Category/classification (e.g., "person", "project", "technology")
- `observations`: Array of factual statements about the entity

### Relations
Relations define connections between entities, creating a network of interconnected knowledge.

**Properties:**
- `from`: Source entity name
- `to`: Target entity name
- `relationType`: Type of relationship (e.g., "works_on", "depends_on", "knows")

### Observations
Observations are timestamped facts or notes about entities that can evolve over time.

**Format:** Array of strings containing factual information

## Memory Operations

### Creating Entities

```json
{
  "entities": [
    {
      "name": "React",
      "entityType": "technology",
      "observations": [
        "JavaScript library for building user interfaces",
        "Developed by Meta (Facebook)",
        "Uses component-based architecture",
        "Released in 2013"
      ]
    },
    {
      "name": "TypeScript",
      "entityType": "language",
      "observations": [
        "Typed superset of JavaScript",
        "Developed by Microsoft",
        "Adds static typing to JavaScript",
        "Released in 2012"
      ]
    }
  ]
}
```

**Use Case:** Initialize new concepts in your knowledge base

### Creating Relations

```json
{
  "relations": [
    {
      "from": "React",
      "to": "TypeScript",
      "relationType": "compatible_with"
    },
    {
      "from": "React",
      "to": "JavaScript",
      "relationType": "built_with"
    },
    {
      "from": "TypeScript",
      "to": "JavaScript",
      "relationType": "extends"
    }
  ]
}
```

**Use Case:** Define relationships between concepts

### Adding Observations

```json
{
  "observations": [
    {
      "entityName": "React",
      "contents": [
        "React 18 introduced concurrent features",
        "React 19 planned for 2024 with server components"
      ]
    }
  ]
}
```

**Use Case:** Add new information to existing entities

### Querying the Graph

#### Reading the Entire Graph
```json
{
  "success": true,
  "graph": {
    "entities": [...],
    "relations": [...],
    "observations": {...}
  }
}
```

#### Searching Nodes
```json
{
  "query": "React JavaScript"
}
```

Returns entities, relations, and observations matching the search terms.

#### Opening Specific Nodes
```json
{
  "names": ["React", "TypeScript"]
}
```

Returns detailed information for specified entities.

## Best Practices

### Entity Naming
- Use consistent, descriptive names
- Prefer singular nouns (e.g., "Database" not "Databases")
- Use PascalCase for multi-word names (e.g., "MachineLearning")

### Entity Types
- `person`: Individuals
- `organization`: Companies, teams, groups
- `technology`: Tools, frameworks, languages
- `project`: Software projects, initiatives
- `concept`: Abstract ideas, methodologies
- `resource`: Documentation, articles, tutorials

### Relation Types
- `works_on`: Person works on project
- `depends_on`: Technology depends on another
- `part_of`: Entity is part of a larger entity
- `created_by`: Entity was created by another
- `uses`: Entity uses another technology
- `related_to`: General relationship

### Observation Guidelines
- Keep observations factual and objective
- Use present tense for current facts
- Include dates for time-sensitive information
- Break complex information into multiple observations

## Example Knowledge Graph

### Development Team
```
Entities:
- "Alice Johnson" (person)
  - Senior React Developer
  - Joined team in 2023
  - Specializes in frontend architecture

- "Bob Smith" (person)
  - Backend Engineer
  - Expert in Python/Django
  - Team lead for API development

- "AuthService" (project)
  - Microservice for user authentication
  - Built with Python and FastAPI
  - Currently in development

Relations:
- Alice → AuthService (works_on)
- Bob → AuthService (works_on)
- AuthService → Python (built_with)
- AuthService → FastAPI (uses)
```

## Advanced Usage

### Semantic Search
Use the search functionality to find related concepts:
```
Query: "authentication security"
Returns: Entities related to auth, security concepts, and their connections
```

### Graph Traversal
Navigate relationships to discover connections:
```
Start: "React"
→ compatible_with → "TypeScript"
→ built_with → "JavaScript"
→ extends → "TypeScript"
```

### Temporal Tracking
Observations maintain history of entity evolution:
```
2023: "React 17 released"
2024: "React 18 released with concurrent features"
2025: "React 19 in development with server components"
```

## Integration with MCP

The memory system integrates seamlessly with other MCP tools:

- **Project Management**: Link tasks to memory entities
- **Documentation**: Store research and findings
- **Knowledge Retrieval**: Use RAG search over memory content
- **Code Examples**: Associate code patterns with technologies

## Maintenance

### Regular Cleanup
- Remove outdated observations
- Consolidate duplicate entities
- Update relationship types as needed

### Backup Strategy
- Export graph regularly using `memory_read_graph`
- Store backups in version control
- Document major schema changes

## API Reference

### Endpoints
- `POST /memory/entities` - Create entities
- `POST /memory/relations` - Create relations
- `POST /memory/observations` - Add observations
- `DELETE /memory/entities` - Remove entities
- `DELETE /memory/observations` - Remove observations
- `DELETE /memory/relations` - Remove relations
- `GET /memory/graph` - Read entire graph
- `POST /memory/search` - Search nodes
- `POST /memory/open` - Get specific nodes

### Response Format
All operations return:
```json
{
  "success": boolean,
  "message": string,
  "data": object (operation-specific)
}
```

## Troubleshooting

### Common Issues
- **Duplicate Entities**: Use search before creating new entities
- **Inconsistent Naming**: Establish naming conventions
- **Over-relation**: Avoid creating unnecessary connections
- **Stale Observations**: Regularly review and update information

### Performance
- Large graphs may impact search performance
- Consider archiving old observations
- Use specific queries rather than full graph reads

## Examples in Action

### Technology Stack Mapping
```
Entity: "Next.js" (technology)
Observations:
- React framework for production
- Supports server-side rendering
- File-based routing system

Relations:
- Next.js → React (built_on)
- Next.js → Vercel (maintained_by)
- Next.js → TypeScript (supports)
```

### Project Documentation
```
Entity: "UserAuthAPI" (project)
Observations:
- REST API for user management
- JWT-based authentication
- PostgreSQL database
- Deployed on AWS ECS

Relations:
- UserAuthAPI → PostgreSQL (uses)
- UserAuthAPI → JWT (implements)
- UserAuthAPI → AWS (deployed_on)
```

This memory system provides a foundation for building comprehensive knowledge bases that evolve with your projects and understanding.