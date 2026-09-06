(function () {
  var STORAGE_KEY = "ouroSiteLang";
  var DEFAULT_LANG = "en";
  var LANGS = ["en", "es"];

  var text = {
    es: {
      /* story page */
      "Get to know me":
        "Conóceme",
      "Skip to the story":
        "Saltar a la historia",
      "How Alonso Rivera got from a Communications degree to high-voltage tender systems and applied AI, told as a story rather than a list.":
        "Cómo Alonso Rivera pasó de una carrera de Comunicaciones a sistemas de licitación de alta tensión e IA aplicada, contado como historia y no como lista.",
      "Get to know me — Alonso Rivera":
        "Conóceme — Alonso Rivera",
      "Email Alonso Rivera":
        "Escribir a Alonso Rivera",
      "Alonso Rivera on GitHub":
        "Alonso Rivera en GitHub",
      "About":
        "Sobre mí",
      "Where AI came in":
        "Dónde entró la IA",
      "Now":
        "Ahora",
      "2024 — now":
        "2024 — hoy",
      "I studied Communications. Nobody told me I would spend the next decade explaining machines to people who had no particular interest in machines.":
        "Estudié Comunicaciones. Nadie me dijo que pasaría la década siguiente explicando máquinas a gente sin ningún interés particular en las máquinas.",
      "That turned out to be the job. Not the technology. The distance between a tool that works and a person willing to change how they work.":
        "Ese resultó ser el trabajo. No la tecnología. La distancia entre una herramienta que funciona y una persona dispuesta a cambiar su forma de trabajar.",
      "I founded the first company in Peru dedicated entirely to 3D printing for digital dentistry.":
        "Fundé la primera empresa del Perú dedicada por completo a la impresión 3D para odontología digital.",
      "The printers were never the hard part. A dentist who has worked the same way for twenty years has no reason to believe you. So I stopped presenting and started demonstrating: printers in their labs, hands in the resin, training until they could run the workflow without me in the room.":
        "Las impresoras nunca fueron lo difícil. Un dentista que lleva veinte años trabajando igual no tiene por qué creerte. Así que dejé de presentar y empecé a demostrar: impresoras en sus laboratorios, las manos en la resina, formación hasta que pudieran usar el flujo sin mí en la sala.",
      "Around 200 dentists and technicians came through. Then 80 clinics and labs. They reported production times about a third shorter and operating costs a fifth lower.":
        "Pasaron unos 200 dentistas y técnicos. Después 80 clínicas y laboratorios. Reportaron tiempos de producción alrededor de un tercio más cortos y costes operativos un quinto más bajos.",
      "In 2021 I spent four months on a research collaboration with Oqton, testing biocompatible resin workflows and returning structured feedback from real prints. During the pandemic we designed a 3D-printed biocompatible prototype that placed second nationally in an innovation competition run by Fundación Telefónica.":
        "En 2021 pasé cuatro meses en una colaboración de investigación con Oqton, probando flujos de resina biocompatible y devolviendo retroalimentación estructurada a partir de impresiones reales. Durante la pandemia diseñamos un prototipo biocompatible impreso en 3D que quedó segundo a nivel nacional en un concurso de innovación de la Fundación Telefónica.",
      "I ran operations and sales for a clinic-lab printing invisible aligners, opening it in Lima across both B2B and B2C.":
        "Dirigí operaciones y ventas de un clinic-lab que imprimía alineadores invisibles, abriéndolo en Lima tanto en B2B como en B2C.",
      "More than 100 orthodontic treatments, a partner-clinic network 40% larger, and a redesigned Lima–Brazil workflow that cut delivery times by a fifth. Two countries, one process, and a lot of things that only break in production.":
        "Más de 100 tratamientos de ortodoncia, una red de clínicas asociadas un 40% más grande y un flujo Lima–Brasil rediseñado que recortó los tiempos de entrega un quinto. Dos países, un proceso y muchas cosas que solo se rompen en producción.",
      "High-voltage infrastructure. Eleven utilities, more than fifteen manufacturers, thirteen countries.":
        "Infraestructura de alta tensión. Once utilities, más de quince fabricantes, trece países.",
      "I arrived to find tender and certification work spread across inboxes and spreadsheets. Rather than tidy it, I interviewed the people actually doing it and rebuilt the model around what they were really tracking: case IDs, owners, priorities, deadlines, dependencies, next actions, data validation, integrity alerts.":
        "Llegué y encontré el trabajo de licitaciones y certificación repartido entre bandejas de correo y hojas de cálculo. En vez de ordenarlo, entrevisté a quienes lo hacían de verdad y reconstruí el modelo alrededor de lo que realmente seguían: IDs de caso, responsables, prioridades, fechas límite, dependencias, próximas acciones, validación de datos y alertas de integridad.",
      "The moment I keep coming back to: after fixing the date quality, 54 overdue cases became visible. They had always been overdue. Nobody could see them. That is what a system is for.":
        "El momento al que sigo volviendo: al corregir la calidad de las fechas, aparecieron 54 casos vencidos. Siempre habían estado vencidos. Nadie podía verlos. Para eso sirve un sistema.",
      "Today it holds 123 live cases across 13 countries, 23 technical-conformity cases, 7 manufacturer registrations and a catalog of 215 certificates, used by 8 to 10 people on the technical and commercial teams.":
        "Hoy sostiene 123 casos vivos en 13 países, 23 casos de conformidad técnica, 7 registros de fabricante y un catálogo de 215 certificados, y lo usan entre 8 y 10 personas de los equipos técnico y comercial.",
      "Alongside it I led more than 15 international tenders with ENEL, ISA REP, EPEC and Luz del Sur under IEC, IRAM and RETIE standards, securing over USD 4M in contracts. I opened the Argentine market with an Indian manufacturer, negotiated a 15% factory-price reduction and closed more than USD 720K in first-year sales.":
        "En paralelo lideré más de 15 licitaciones internacionales con ENEL, ISA REP, EPEC y Luz del Sur bajo normas IEC, IRAM y RETIE, asegurando más de USD 4M en contratos. Abrí el mercado argentino con un fabricante indio, negocié una reducción del 15% en precio de fábrica y cerré más de USD 720K en ventas del primer año.",
      "Not as a strategy. As a response to the same bottlenecks appearing every quarter.":
        "No como estrategia. Como respuesta a los mismos cuellos de botella que aparecían cada trimestre.",
      "I mapped the recurring tender and contract-review work into reusable LLM workflows for requirement analysis and technical translation in high-voltage terminology. Then I did the part that actually matters: structured the human review and wrote the operating rules, so the commercial team can reuse the workflows without depending on a single operator.":
        "Mapeé el trabajo recurrente de licitación y revisión de contratos a flujos LLM reutilizables para análisis de requisitos y traducción técnica en terminología de alta tensión. Después hice la parte que de verdad importa: estructuré la revisión humana y escribí las reglas de operación, para que el equipo comercial pueda reutilizar los flujos sin depender de un solo operador.",
      "This site is the lab. It is where I build products to test how AI, code, design and human judgment hold up against real work, from definition and prototyping through to testing and documentation.":
        "Este sitio es el laboratorio. Aquí construyo productos para probar cómo aguantan la IA, el código, el diseño y el criterio humano frente al trabajo real, desde la definición y el prototipado hasta las pruebas y la documentación.",
      "A Mandarin tutor that refuses to trust its own model without checking the transcript. A knowledge system that will not publish without human approval. A granular audio processor running across firmware and three plugin formats. None of them are demos.":
        "Un tutor de mandarín que se niega a confiar en su propio modelo sin revisar la transcripción. Un sistema de conocimiento que no publica sin aprobación humana. Un procesador de audio granular que corre sobre firmware y tres formatos de plugin. Ninguno es una demo.",
      "Based in Lima, Peruvian and Italian, available for frequent international travel or relocation. Spanish native, English fluent, French intermediate.":
        "Con base en Lima, peruano e italiano, disponible para viajar con frecuencia o reubicarme. Español nativo, inglés fluido, francés intermedio.",
      "If you have a workflow that is breaking down, or an idea that needs someone who can talk to both the users and the engineers, write to me.":
        "Si tienes un flujo de trabajo que se está rompiendo, o una idea que necesita a alguien capaz de hablar con los usuarios y con los ingenieros, escríbeme.",
      /* index direction, mono revision */
      "I design and build products around books, records, sound, and learning. For myself, and sometimes for other people.":
        "Diseño y construyo productos alrededor de libros, vinilos, sonido y aprendizaje. Para mí, y a veces para otras personas.",
      "Everything in the index is mine, and all of it opens.":
        "Todo lo que está en el índice es mío, y todo se puede abrir.",
      "MIRÓ Labs — 2026 — press G for the grid":
        "MIRÓ Labs — 2026 — pulsa G para ver la retícula",
      "Email":
        "Correo",
      "This page sits on twelve columns and a 26 pixel line. Press G to see it.":
        "Esta página se apoya en doce columnas y una línea de 26 píxeles. Pulsa G para verla.",
      /* index direction, grid revision */
      "I'm Alonso Rivera. A designer who codes, and a builder who thinks with aesthetics.":
        "Soy Alonso Rivera. Un diseñador que programa y un constructor que piensa con estética.",
      "MIRÓ Labs is my personal lab. It exists to reject the old model and explore the intersection of design, code, systems and AI. Through practice, not theory.":
        "MIRÓ Labs es mi laboratorio personal. Existe para rechazar el modelo viejo y explorar la intersección entre diseño, código, sistemas e IA. Desde la práctica, no desde la teoría.",
      "I turn complex systems into things you can use, and ideas into products that run. Everything in the index is mine, and all of it opens.":
        "Convierto sistemas complejos en cosas que se pueden usar, e ideas en productos que funcionan. Todo lo que está en el índice es mío, y todo se puede abrir.",
      "Systems. Tools. Code. And design.":
        "Sistemas. Herramientas. Código. Y diseño.",
      "Experimentation. Prototypes. And play.":
        "Experimentación. Prototipos. Y juego.",
      "Process. Practice. And what's next.":
        "Proceso. Práctica. Y lo que viene.",
      "Practice":
        "Práctica",
      /* index direction, white minimal */
      "I'm Alonso Rivera, and this is my personal lab.":
        "Soy Alonso Rivera y este es mi laboratorio personal.",
      "I design and build things around books, records, sound, and learning. Design, code, systems and AI, made by one person.":
        "Diseño y construyo cosas alrededor de libros, vinilos, sonido y aprendizaje. Diseño, código, sistemas e IA, hechos por una sola persona.",
      "Everything in the index is mine, and all of it opens.":
        "Todo lo que está en el índice es mío, y todo se puede abrir.",
      "About MIRÓ Labs":
        "Sobre MIRÓ Labs",
      /* index direction, 2026-09-06 */
      "A personal lab by Alonso Rivera. Design, code, systems and AI, in projects about books, records, sound and learning.":
        "Un laboratorio personal de Alonso Rivera. Diseño, código, sistemas e IA, en proyectos sobre libros, vinilos, sonido y aprendizaje.",
      "en_US":
        "es_ES",
      "Skip to the index":
        "Saltar al índice",
      "MIRÓ Labs, home":
        "MIRÓ Labs, inicio",
      "Language":
        "Idioma",
      "Switch theme":
        "Cambiar el tema",
      "Black":
        "Negro",
      "Paper":
        "Papel",
      "MIRÓ Labs — a personal lab by Alonso Rivera":
        "MIRÓ Labs, un laboratorio personal de Alonso Rivera",
      "I am Alonso Rivera. I build small, finished things, mostly around books, records, sound, and the way we learn.":
        "Soy Alonso Rivera. Construyo cosas pequeñas y terminadas, casi siempre alrededor de libros, vinilos, sonido y la forma en que aprendemos.",
      "MIRÓ Labs is my personal lab for design, code, systems and AI. Everything in the index is something I made, and every one of them opens.":
        "MIRÓ Labs es mi laboratorio personal de diseño, código, sistemas e IA. Todo lo que está en el índice lo hice yo, y todo se puede abrir.",
      "Some of it became a product. Some of it stayed an experiment. Open any line to read more about it.":
        "Algunas cosas se volvieron producto. Otras se quedaron en experimento. Abre cualquier línea para leer más.",
      "Write me":
        "Escríbeme",
      "Notes":
        "Notas",
      "Index":
        "Índice",
      "08 projects":
        "08 proyectos",
      "Open project":
        "Abrir proyecto",
      "Back to the top":
        "Volver arriba",
      "Books":
        "Libros",
      "Sound":
        "Sonido",
      "Knowledge":
        "Conocimiento",
      "Mandarin":
        "Mandarín",
      "Records":
        "Vinilos",
      "Physics":
        "Física",
      "Data":
        "Datos",
      "A personal library app for book cataloging at home, built around cover scanning and a searchable 3D bookshelf.":
        "Una app de biblioteca personal para catalogar libros en casa, construida alrededor del escaneo de portadas y una estantería 3D que se puede buscar.",
      "It turns a home library into something visible, structured, and easy to revisit, so books can live as a collection instead of disappearing into shelves, notes, or memory.":
        "Convierte una biblioteca doméstica en algo visible, ordenado y fácil de revisitar, para que los libros vivan como colección en lugar de desaparecer entre estantes, notas o memoria.",
      "A hybrid granular processor developed as firmware, an audio plugin, and a physical instrument.":
        "Un procesador granular híbrido desarrollado como firmware, plugin de audio e instrumento físico.",
      "One fixed signal chain — FRACTURE, BLOOM, and TIDE — runs across Daisy hardware and AU, VST3, and standalone software. Current validation includes 81 DSP checks, 102 plugin checks, and successful Apple Audio Unit validation.":
        "Una sola cadena de señal fija, FRACTURE, BLOOM y TIDE, corre sobre hardware Daisy y sobre software AU, VST3 y standalone. La validación actual incluye 81 comprobaciones de DSP, 102 del plugin y la validación de Apple Audio Unit superada.",
      "A human-in-the-loop system for capturing references, processing them with an agent, and publishing structured knowledge.":
        "Un sistema con revisión humana para capturar referencias, procesarlas con un agente y publicar conocimiento estructurado.",
      "A mobile web form sends notes and references to a Vercel Blob queue. A local agent reads pending items, organizes the source material, and regenerates navigable pages, with human review as the approval step.":
        "Un formulario web móvil envía notas y referencias a una cola en Vercel Blob. Un agente local lee los pendientes, organiza el material de origen y regenera páginas navegables, con la revisión humana como paso de aprobación.",
      "A daily Mandarin voice tutor built on ElevenLabs Agents, structured around HSK vocabulary and evidence-based progress.":
        "Un tutor diario de mandarín por voz, construido sobre ElevenLabs Agents y estructurado con vocabulario HSK y progreso con evidencia.",
      "A client-side validation layer rejects out-of-level vocabulary, unsupported progress, and corrections that cannot be traced back to the transcript.":
        "Una capa de validación en el cliente rechaza vocabulario fuera de nivel, progreso sin respaldo y correcciones que no se pueden rastrear hasta la transcripción.",
      "A vinyl cataloging experience for giving records the visual presentation they deserve.":
        "Una experiencia de catalogación de vinilos para darle a los discos la presentación visual que merecen.",
      "Capture a sleeve, catalog the album, and browse the collection in Shelf, Grid, and CoverFlow.":
        "Captura una funda, cataloga el álbum y recorre la colección en Shelf, Grid y CoverFlow.",
      "A generative 3D studio that turns prompts, photos, or voice into editable models.":
        "Un estudio 3D generativo que convierte texto, fotos o voz en modelos editables.",
      "Describe what you want, take a photo, or say it out loud, then refine the result and move it into the next stage of production.":
        "Describe lo que quieres, toma una foto o dilo en voz alta; luego refina el resultado y llévalo a la siguiente etapa de producción.",
      "An interactive edition of Six Easy Pieces where each chapter becomes an explorable simulation.":
        "Una edición interactiva de Six Easy Pieces donde cada capítulo se vuelve una simulación explorable.",
      "Feynman's concepts become visual systems, so abstract ideas can be tested through movement, state, and interaction.":
        "Los conceptos de Feynman se vuelven sistemas visuales, para que las ideas abstractas se puedan probar con movimiento, estado e interacción.",
      "A visual map of Peru's 2026 presidential candidates, sized by Polymarket win probability.":
        "Un mapa visual de las candidaturas presidenciales de Perú 2026, dimensionadas por su probabilidad de victoria en Polymarket.",
      "Thirty-five candidacies from the April 12, 2026 elections, each block sized by its probability of victory according to Polymarket at the cutoff date.":
        "Treinta y cinco candidaturas de las elecciones del 12 de abril de 2026, cada bloque dimensionado según su probabilidad de victoria en Polymarket a la fecha de corte.",
      "I work in short cycles: notice something, build a small version of it, keep whatever holds up. Most of what is here started as a question I could not answer by reading about it.":
        "Trabajo en ciclos cortos: noto algo, construyo una versión pequeña y me quedo con lo que aguanta. Casi todo lo que está aquí empezó como una pregunta que no pude responder leyendo.",
      "MIRÓ is also the name of my hardware and software work, MIRÓ Electronics, where the instrument sits. The lettering at the top of this page comes from there, unchanged.":
        "MIRÓ es también el nombre de mi trabajo de hardware y software, MIRÓ Electronics, donde vive el instrumento. El lettering de arriba viene de ahí, sin modificar.",
      "Written and built by one person, with AI in the loop. If something here is useful to you, or wrong, tell me.":
        "Escrito y construido por una sola persona, con IA en el proceso. Si algo de esto te sirve, o está mal, dímelo.",
      "Miró Labs | AI-Native Product Studio":
        "Miró Labs | Estudio de productos con IA",
      "We are a creative technology lab — designers who code and builders who think with aesthetics.":
        "Somos un laboratorio de tecnologia creativa: diseniadores que programan y builders que piensan con estetica.",
      "Page sections": "Secciones de la pagina",
      "Open menu": "Abrir menu",
      "Close menu": "Cerrar menu",
      Studio: "Estudio",
      Projects: "Proyectos",
      Contact: "Contacto",
      "Site links": "Enlaces del sitio",
      "Window controls": "Controles de ventana",
      "Close window": "Cerrar ventana",
      "Minimize window": "Minimizar ventana",
      "Zoom window": "Ampliar ventana",
      "Restore window size": "Restaurar tamano de ventana",
      "Want to learn how we made this site?":
        "Quieres saber como hicimos este sitio?",
      "# Want to learn how we made this site?":
        "# Quieres saber como hicimos este sitio?",
      "This site started the way most of our creative ideas do: with a feeling, a point of view, and a willingness to keep iterating until the experience felt right.":
        "Este sitio empezo como casi todas nuestras ideas creativas: con una sensacion, un punto de vista y ganas de iterar hasta que la experiencia se sintiera bien.",
      "But we didn't build it the way we used to. From concept to interface to code, we worked with AI as a copilot through the same workflows Miró Labs exists to explore.":
        "Pero no lo construimos como antes. Del concepto a la interfaz y al codigo, trabajamos con IA como copiloto en los mismos flujos que Miró Labs existe para explorar.",
      "It helped us move faster, explore wider, and refine with more ambition.":
        "Nos ayudo a avanzar mas rapido, explorar mas ampliamente y refinar con mas ambicion.",
      "AI accelerated the process. Human judgment made it unmistakably ours.":
        "La IA acelero el proceso. El criterio humano hizo que fuera inconfundiblemente nuestro.",
      "Over 29 days, we worked through roughly:":
        "Durante 29 dias, trabajamos aproximadamente:",
      "160 hours of AI-assisted build sessions across Codex and Claude Code":
        "160 horas de sesiones de construccion asistidas por IA en Codex y Claude Code",
      "85 conversations": "85 conversaciones",
      "117 commits": "117 commits",
      "30,600+ AI-attributed code edits":
        "30,600+ ediciones de codigo atribuidas a IA",
      "Tooling and models:": "Herramientas y modelos:",
      "Opus 4.6, Claude Code, and GPT-5.5 Codex.":
        "Opus 4.6, Claude Code y GPT-5.5 Codex.",
      "Run": "Ejecutar",
      "Run command": "Ejecutar comando",
      "type a command": "escribe un comando",
      "Story command input": "Entrada de comando de la historia",
      "Terminal Status: ": "Estado de terminal: ",
      Ready: "Listo",
      "# Want to open the AI build log?":
        "# Quieres abrir el registro de construccion con IA?",
      'Type "learn" and press Enter.':
        'Escribe "learn" y presiona Enter.',
      'Type "log" and press Enter.': 'Escribe "log" y presiona Enter.',
      "# Curious who made this site?": "# Quieres saber quien hizo este sitio?",
      'Type "makers" and press Enter.':
        'Escribe "makers" y presiona Enter.',
      "# Transmission complete.": "# Transmision completa.",
      'Type "restart" to replay.': 'Escribe "restart" para repetir.',
      "Unknown command. Try": "Comando desconocido. Prueba",
      "FATAL ERROR": "ERROR FATAL",
      "Restore miró site - origin.log window":
        "Restaurar ventana miró site - origin.log",
      "Mute interaction sound": "Silenciar sonido de interaccion",
      "Unmute interaction sound": "Activar sonido de interaccion",
      "SOUND ON": "SONIDO ON",
      "SOUND OFF": "SONIDO OFF",
      "Practice and purpose": "Practica y proposito",
      "Work and experiments": "Trabajo y experimentos",
      "A personal reading library for collecting books, organizing your shelves, and staying close to what you want to read next.":
        "Una biblioteca personal de lectura para coleccionar libros, organizar tus estantes y mantener cerca lo que quieres leer despues.",
      "Shelvd Books is a personal library experience for people who want their books to feel visible, organized, and alive instead of buried in scattered notes or forgotten tabs.":
        "Shelvd Books es una experiencia de biblioteca personal para quienes quieren que sus libros se sientan visibles, organizados y vivos, en lugar de quedar enterrados entre notas sueltas o pestanas olvidadas.",
      "It brings collection, catalog, and reading flow into one place, helping users keep track of the books they own, what they want to read next, and how their shelves evolve over time.":
        "Reune coleccion, catalogo y flujo de lectura en un solo lugar, ayudando a las personas a seguir los libros que tienen, lo que quieren leer despues y como evolucionan sus estantes con el tiempo.",
      "We are shaping it as a product that feels tactile and intentional, where browsing your library is part organization tool and part visual experience.":
        "Lo estamos construyendo como un producto tactil e intencional, donde recorrer tu biblioteca es parte herramienta de organizacion y parte experiencia visual.",
      "It is also part of our broader Shelvd ecosystem, exploring how personal collections can become richer, more useful, and more enjoyable through thoughtful product design.":
        "Tambien forma parte del ecosistema Shelvd, explorando como las colecciones personales pueden volverse mas ricas, utiles y disfrutables mediante un diseno de producto cuidadoso.",
      "Shelvd Books is currently in active development.":
        "Shelvd Books esta actualmente en desarrollo activo.",
      "Request early access": "Solicitar acceso anticipado",
      "Learn more": "Ver mas",
      Close: "Cerrar",
      "A hybrid granular processor developed as firmware, an audio plugin, and a physical instrument.":
        "Un procesador granular hibrido desarrollado como firmware, plugin de audio e instrumento fisico.",
      "MIRÓ 1 runs one fixed signal chain—FRACTURE, BLOOM, and TIDE—across Daisy hardware and AU, VST3, and standalone software.":
        "MIRÓ 1 ejecuta una cadena fija de senial —FRACTURE, BLOOM y TIDE— tanto en hardware Daisy como en software AU, VST3 y standalone.",
      "The project uses supervised AI-assisted development across product definition, DSP architecture, implementation, testing, and documentation.":
        "El proyecto usa desarrollo asistido por IA bajo supervision en la definicion del producto, la arquitectura DSP, la implementacion, las pruebas y la documentacion.",
      "Current validation includes 81 DSP checks, 102 plugin checks, and successful Apple Audio Unit validation.":
        "La validacion actual incluye 81 pruebas de DSP, 102 pruebas del plugin y la validacion exitosa de Apple Audio Unit.",
      "A human-in-the-loop system for capturing references, processing them with an agent, and publishing structured knowledge.":
        "Un sistema con revision humana para capturar referencias, procesarlas con un agente y publicar conocimiento estructurado.",
      "A mobile web form sends notes and references to a Vercel Blob queue.":
        "Un formulario web movil envia notas y referencias a una cola en Vercel Blob.",
      "A local agent reads pending items, organizes source material, and regenerates navigable pages from structured data and images.":
        "Un agente local lee los elementos pendientes, organiza el material fuente y regenera paginas navegables a partir de datos estructurados e imagenes.",
      "Human review remains the approval step, while API limits, cache controls, and fallbacks keep the workflow predictable.":
        "La revision humana se mantiene como paso de aprobacion, mientras los limites de API, los controles de cache y los mecanismos de respaldo mantienen el flujo predecible.",
      "A daily Mandarin voice tutor built on ElevenLabs Agents, structured around HSK vocabulary and evidence-based progress.":
        "Una profesora de mandarin por voz construida con ElevenLabs Agents, organizada alrededor del vocabulario HSK y progreso respaldado por evidencia.",
      "Each ten-minute session combines Mandarin conversation, brief Spanish explanations, limited new vocabulary, roleplay, corrections, and a closing quiz.":
        "Cada sesion de diez minutos combina conversacion en mandarin, explicaciones breves en espaniol, vocabulario nuevo limitado, roleplay, correcciones y un quiz final.",
      "The web app injects level, topic, approved vocabulary, review words, and the previous recommendation into the agent through dynamic variables.":
        "La aplicacion web inyecta el nivel, el tema, el vocabulario aprobado, las palabras de repaso y la recomendacion anterior al agente mediante variables dinamicas.",
      "A client-side validation layer rejects out-of-level vocabulary, unsupported progress, and corrections that cannot be traced to the transcript.":
        "Una capa de validacion en el cliente rechaza vocabulario fuera de nivel, progreso sin evidencia y correcciones que no puedan rastrearse hasta la transcripcion.",
      "Open project": "Abrir proyecto",
      "A workflow for designers to shape, query, and evolve design systems alongside agents.":
        "Un flujo para que diseniadores den forma, consulten y evolucionen sistemas de diseno junto a agentes.",
      "Overture gives design intent a structure agents can understand, without flattening the work into a rigid template.":
        "Overture le da a la intencion de diseno una estructura que los agentes pueden entender, sin aplanar el trabajo en una plantilla rigida.",
      "It creates a shared language for the system — tokens, components, patterns, rules, and rationale — so decisions can move between design, code, tools, teams, and the canvas of our choice.":
        "Crea un lenguaje compartido para el sistema: tokens, componentes, patrones, reglas y razones, para que las decisiones se muevan entre diseno, codigo, herramientas, equipos y el lienzo que elijamos.",
      "But it stays open. Every brand has its own soul and behavior. Every team has its own way of working. So the system has to be structured enough for agents to read, and flexible enough for designers to keep shaping visually when we need to.":
        "Pero se mantiene abierto. Cada marca tiene su propia alma y comportamiento. Cada equipo tiene su forma de trabajar. Por eso el sistema debe ser lo bastante estructurado para que los agentes lo lean y lo bastante flexible para que los diseniadores sigan dandole forma visual cuando haga falta.",
      "For us, JSON and YAML form the connective layer: machine-readable structure that tools and agents can parse, evolve, and keep in sync. That is where agents become useful. Not as a shortcut around design judgment, but as a way to help the system respond.":
        "Para nosotros, JSON y YAML forman la capa conectiva: estructura legible por maquinas que herramientas y agentes pueden interpretar, evolucionar y mantener sincronizada. Ahi es donde los agentes se vuelven utiles. No como atajo alrededor del criterio de diseno, sino como una forma de ayudar al sistema a responder.",
      "DESIGN_SYSTEM.MD carries the human layer: the foundational context, rationale, usage guidance, and design principles that help people understand not just what the system is, but why it works the way it does.":
        "DESIGN_SYSTEM.MD lleva la capa humana: contexto fundacional, razones, guia de uso y principios de diseno que ayudan a entender no solo que es el sistema, sino por que funciona como funciona.",
      "We're still early, but that's the point. The work is not just the design system. It is the way the design system gets made, used, and evolved.":
        "Todavia estamos temprano, y ese es el punto. El trabajo no es solo el sistema de diseno. Es la manera en que el sistema se crea, se usa y evoluciona.",
      "A personal experiment for understanding your health with more context and continuity.":
        "Un experimento personal para entender tu salud con mas contexto y continuidad.",
      "This effort started as a very personal project, born from our own frustration trying to hold a more holistic, longitudinal view of our health in a system that was never designed to hold the whole story.":
        "Este esfuerzo empezo como un proyecto muy personal, nacido de nuestra frustracion al intentar sostener una vision mas holistica y longitudinal de nuestra salud en un sistema que nunca fue disenado para guardar la historia completa.",
      "Health Atlas turns the records we already have into a personal health repo we can actually use. AI helps organize the details, surface patterns, notice what has changed, and prepare better questions for the next appointment.":
        "Health Atlas convierte los registros que ya tenemos en un repositorio personal de salud que realmente podemos usar. La IA ayuda a organizar detalles, revelar patrones, notar que cambio y preparar mejores preguntas para la proxima cita.",
      "The question we're trying to answer is simple, and one many people are also asking: what if a clear picture of our health didn't have to live behind expensive concierge medicine memberships or fragmented hospital portals?":
        "La pregunta que intentamos responder es simple, y mucha gente tambien se la hace: que pasaria si una imagen clara de nuestra salud no tuviera que vivir detras de membresias medicas costosas o portales hospitalarios fragmentados?",
      "Creative technology lab": "Laboratorio creativo-tecnologico",
      "We are a creative technology lab — designers who code and builders who think with aesthetics. We translate complex systems into intuitive experiences, and ideas into living, responsive products.":
        "Somos un laboratorio creativo-tecnologico: disenadores que programan y constructores que piensan con estetica. Traducimos sistemas complejos en experiencias intuitivas, e ideas en productos vivos y responsivos.",
      "Systems and experimentation": "Sistemas y experimentacion",
      "SYSTEMS. TOOLS. CODE. AND. DESIGN.":
        "SISTEMAS. HERRAMIENTAS. CODIGO. Y. DISENO.",
      "EXPERIMENTATION. PROTOTYPES. AND. PLAY.":
        "EXPERIMENTACION. PROTOTIPOS. Y. JUEGO.",
      "PROCESS. PRACTICE. AND. WHAT'S. NEXT.":
        "PROCESO. PRACTICA. Y. LO. QUE. VIENE.",
    },
  };

  var html = {
    es: {
      "#intro-contact-retired":
        'Escríbeme<a href="mailto:hello@mirolabs.com">aquí<svg class="arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false"><path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></a>, o lee las<a href="#notes">notas<svg class="arrow" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false"><path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></a>.',
      "#scroll-intro-below-statement .scroll-intro-below__statement":
        "Miró Labs existe para <em>rechazar el modelo viejo</em> y explorar la interseccion emergente entre diseno, codigo, sistemas e IA. Lo hacemos desde la practica, no desde la teoria.",
    },
  };

  var hero = {
    en: {
      primaryDesktop: [
        [{ k: "t", v: "Experimenting" }],
        [{ k: "t", v: "with new methods" }],
        [
          { k: "t", v: "of " },
          { k: "a", v: "creation." },
        ],
      ],
      primaryMobile: [
        [{ k: "t", v: "Experimenting" }],
        [{ k: "t", v: "with new" }],
        [{ k: "t", v: "methods" }],
        [
          { k: "t", v: "of " },
          { k: "a", v: "creation." },
        ],
      ],
      primaryTemplateDesktop: [
        "EXPERIMENTING",
        "WITH NEW METHODS",
        "OF CREATION.",
      ],
      primaryTemplateMobile: [
        "EXPERIMENTING",
        "WITH NEW",
        "METHODS",
        "OF CREATION.",
      ],
      secondDesktop: ["We are an AI-native", "product studio."],
      secondMobile: ["We are an", "AI-native", "product", "studio"],
      secondTemplateDesktop: ["WE ARE AN AI-NATIVE", "PRODUCT STUDIO."],
      secondTemplateMobile: ["WE ARE AN", "AI-NATIVE", "PRODUCT", "STUDIO"],
      thirdDesktop: ["Where play", "meets curiosity", "and craft."],
      thirdMobile: ["Where play", "meets", "curiosity", "and craft."],
    },
    es: {
      primaryDesktop: [
        [{ k: "t", v: "Experimentando" }],
        [{ k: "t", v: "con nuevos metodos" }],
        [
          { k: "t", v: "de " },
          { k: "a", v: "creacion." },
        ],
      ],
      primaryMobile: [
        [{ k: "t", v: "Experimentando" }],
        [{ k: "t", v: "con nuevos" }],
        [{ k: "t", v: "metodos" }],
        [
          { k: "t", v: "de " },
          { k: "a", v: "creacion." },
        ],
      ],
      primaryTemplateDesktop: [
        "EXPERIMENTANDO",
        "CON NUEVOS METODOS",
        "DE CREACION.",
      ],
      primaryTemplateMobile: [
        "EXPERIMENTANDO",
        "CON NUEVOS",
        "METODOS",
        "DE CREACION.",
      ],
      secondDesktop: ["Somos un estudio", "de producto con IA."],
      secondMobile: ["Somos un", "estudio", "de producto", "con IA"],
      secondTemplateDesktop: ["SOMOS UN ESTUDIO", "DE PRODUCTO CON IA."],
      secondTemplateMobile: ["SOMOS UN", "ESTUDIO", "DE PRODUCTO", "CON IA"],
      thirdDesktop: ["Donde el juego", "encuentra curiosidad", "y oficio."],
      thirdMobile: ["Donde el juego", "encuentra", "curiosidad", "y oficio."],
    },
  };

  function getStoredLang() {
    try {
      return window.localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (_) {
      return DEFAULT_LANG;
    }
  }

  function normalizeLang(lang) {
    return LANGS.indexOf(lang) >= 0 ? lang : DEFAULT_LANG;
  }

  function currentLang() {
    return normalizeLang(getStoredLang());
  }

  function t(value, lang) {
    var target = normalizeLang(lang || currentLang());
    if (target === DEFAULT_LANG) return value;
    return (text[target] && text[target][value]) || value;
  }

  function translateTextNodes(root, lang) {
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (/^(SCRIPT|STYLE|SVG|PATH|CANVAS)$/i.test(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.nodeValue && node.nodeValue.trim()
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var raw = node.nodeValue;
      var trimmed = raw.trim();
      var translated = t(trimmed, lang);
      if (translated === trimmed) return;
      node.nodeValue =
        raw.slice(0, raw.indexOf(trimmed)) +
        translated +
        raw.slice(raw.indexOf(trimmed) + trimmed.length);
    });
  }

  function translateAttributes(root, lang) {
    var attrs = [
      "aria-label",
      "placeholder",
      "title",
      "content",
      "data-typewriter",
    ];
    attrs.forEach(function (attr) {
      root.querySelectorAll("[" + attr + "]").forEach(function (el) {
        var value = el.getAttribute(attr);
        var translated = t(value, lang);
        if (translated !== value) el.setAttribute(attr, translated);
      });
    });
  }

  function translateSpecialHtml(lang) {
    var blocks = html[lang] || {};
    Object.keys(blocks).forEach(function (selector) {
      var el = document.querySelector(selector);
      if (el) el.innerHTML = blocks[selector];
    });
  }

  function syncControls(lang) {
    document.querySelectorAll("[data-lang-choice]").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang-choice") === lang;
      btn.classList.toggle("language-switch__btn--active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function apply(lang) {
    lang = normalizeLang(lang);
    document.documentElement.lang = lang;
    if (lang !== DEFAULT_LANG) {
      document.title = t(document.title, lang);
      translateTextNodes(document.body, lang);
      translateAttributes(document, lang);
      translateSpecialHtml(lang);
    }
    syncControls(lang);
  }

  function setLang(lang) {
    lang = normalizeLang(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
    window.location.reload();
  }

  window.OuroI18n = {
    lang: currentLang,
    t: t,
    hero: function () {
      return hero[currentLang()] || hero.en;
    },
    apply: apply,
    setLang: setLang,
  };

  document.addEventListener("click", function (event) {
    var btn = event.target.closest && event.target.closest("[data-lang-choice]");
    if (!btn) return;
    event.preventDefault();
    var lang = normalizeLang(btn.getAttribute("data-lang-choice"));
    if (lang === currentLang()) return;
    setLang(lang);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      apply(currentLang());
    });
  } else {
    apply(currentLang());
  }
})();
