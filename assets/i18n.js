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
      "Alonso Rivera's entrepreneurial journey: digital dentistry, international business, and prototypes built with AI.":
        "La trayectoria emprendedora de Alonso Rivera: odontología digital, negocios internacionales y prototipos creados con IA.",
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
      "May 2024 — now":
        "Mayo 2024 — hoy",
      "I've been starting things since my teens. Studying Communications gave me a grounding in how people think and communicate; building businesses taught me to listen, make decisions, and take responsibility for what happened next.":
        "Emprendo desde adolescente. Estudiar Comunicaciones me dio una base para entender cómo piensa y se comunica la gente; crear empresas me enseñó a escuchar, tomar decisiones y hacerme cargo de lo que venía después.",
      "Over the past decade, I've worked close to both customers and technology. I enjoy understanding a problem well enough to explain it clearly, sketch a solution, and build a prototype that helps everyone decide what to do next.":
        "Durante la última década he trabajado cerca de los clientes y de la tecnología. Me gusta entender un problema hasta poder explicarlo con claridad, plantear una solución y crear un prototipo que ayude a decidir cómo seguir.",
      "I founded Teqvita to help dentists and dental technicians bring digital tools into their daily work. We sold 3D printers and scanners, but our work also involved helping people adopt a different way of producing.":
        "Fundé Teqvita para ayudar a odontólogos y técnicos dentales a incorporar herramientas digitales en su trabajo diario. Vendíamos impresoras 3D y escáneres, y también acompañábamos a las personas a adoptar una nueva forma de producir.",
      "I created our experience and training center, where we trained more than 200 dentists and dental technicians in digital workflows. We covered exocad, NemoCast, Blue Sky Bio, 3D printing, scanning, and milling. I also sold Medit and Shining desktop and intraoral scanners and personally handled customer onboarding.":
        "Creé nuestro centro de experiencia y capacitación, donde formamos a más de 200 odontólogos y técnicos dentales en flujos digitales. Ofrecíamos capacitación en exocad, NemoCast, Blue Sky Bio, impresión 3D, escaneo y fresado. También vendía escáneres de escritorio e intraorales Medit y Shining, y yo mismo acompañaba al cliente en la puesta en marcha.",
      "That experience shaped how I work today: understand the existing routine, demonstrate what could change, and help people feel comfortable using the tools themselves.":
        "Esa experiencia marcó mi forma de trabajar: entender la rutina existente, mostrar qué podía cambiar y ayudar a que las personas se sintieran cómodas usando las herramientas por su cuenta.",
      "In 2021, I spent four months collaborating with Oqton through Teqvita, testing material settings, positioning, and automatic supports with biocompatible resins and sharing feedback from the prints. During the pandemic, our team also developed a 3D-printed adapter for dental suction equipment, intended to limit aerosol spread during procedures. The project won second place nationally in a Fundación Telefónica competition.":
        "En 2021 colaboré durante cuatro meses con Oqton desde Teqvita, probando parámetros de materiales, posicionamiento y soportes automáticos con resinas biocompatibles y aportando feedback de las impresiones. Durante la pandemia, nuestro equipo también desarrolló un adaptador impreso en 3D para suctores dentales, pensado para limitar la dispersión de aerosoles durante las intervenciones. El proyecto obtuvo el segundo lugar a nivel nacional en un concurso de Fundación Telefónica.",
      "At Realigner Perú, a digital dental laboratory focused on clear aligners, I brought that experience into operations and commercial development. I worked with clinics and the production team to connect what the customer needed with the steps required to deliver it.":
        "En Realigner Perú, un laboratorio dental digital especializado en alineadores invisibles, llevé esa experiencia a las operaciones y al desarrollo comercial. Trabajaba con las clínicas y el equipo de producción para conectar lo que necesitaba el cliente con los pasos necesarios para entregarlo.",
      "It gave me a closer view of the whole workflow: communication with clinics, coordination with the lab, and follow-through on each case. I learned how much the customer experience depends on what happens between those steps.":
        "Ahí conocí más de cerca el flujo completo: la comunicación con las clínicas, la coordinación con el laboratorio y el seguimiento de cada caso. Aprendí cuánto depende la experiencia del cliente de lo que ocurre entre esos pasos.",
      "Since May 2024, I've worked in operations and business development at Skaiteks America Corp., which supplies medium- and high-voltage electrical equipment. The sector changed, but the work still brings together customers, manufacturers, and technical teams.":
        "Desde mayo de 2024 trabajo en operaciones y desarrollo de negocios en Skaiteks America Corp., empresa que suministra equipos eléctricos de media y alta tensión. Cambió el sector, pero el trabajo sigue conectando a clientes, fabricantes y equipos técnicos.",
      "International tenders and customer development have taken me to Colombia, Argentina, and Italy. Those conversations help me understand both the commercial opportunity and the technical requirements that determine whether a proposal can work.":
        "Las licitaciones internacionales y el desarrollo de clientes me han llevado a Colombia, Argentina e Italia. Esas conversaciones me ayudan a entender tanto la oportunidad comercial como los requisitos técnicos que determinan si una propuesta es viable.",
      "I also built a shared technical-commercial control system around the team's need for clearer follow-up. It brings cases, responsibilities, priorities, deadlines, and next steps into one place, giving the team a common view of the work.":
        "También creé un sistema compartido de control técnico-comercial a partir de la necesidad del equipo de mejorar el seguimiento. Reúne casos, responsables, prioridades, fechas y próximos pasos en un solo lugar, para que el equipo tenga una visión común del trabajo.",
      "The system connects tender tracking with technical approvals, certifications, and manufacturer information. Building it meant understanding how those activities depend on each other and making that relationship visible in the daily workflow.":
        "El sistema conecta el seguimiento de licitaciones con aprobaciones técnicas, certificaciones e información de fabricantes. Construirlo implicó entender cómo dependen unas actividades de otras y hacer visible esa relación en el trabajo diario.",
      "Working across sales and operations has taught me to carry a customer's request through negotiation, technical coordination, and follow-up. That is the experience I draw on when I build a new tool.":
        "Trabajar entre ventas y operaciones me ha enseñado a acompañar una necesidad del cliente a través de la negociación, la coordinación técnica y el seguimiento. Esa es la experiencia que llevo conmigo cuando construyo una herramienta nueva.",
      "AI has become part of how I explore ideas and solve recurring problems. At Skaiteks, I created reusable agent instructions to help analyze technical and commercial tender documents and translate them using the terminology of the energy sector.":
        "La IA se ha vuelto parte de cómo exploro ideas y resuelvo problemas recurrentes. En Skaiteks creé instrucciones reutilizables para agentes que ayudan a analizar las bases técnicas y comerciales de licitaciones y a traducir documentación con la terminología del sector energético.",
      "I use agents to build prototypes, test a workflow, and make an idea concrete enough to discuss. When a project needs production engineering, I can bring the customer context, process, and prototype to the engineers who will define the architecture and make it robust.":
        "Uso agentes para construir prototipos, probar un flujo y darle a una idea una forma concreta que podamos discutir. Cuando un proyecto necesita ingeniería para producción, puedo llevar el contexto del cliente, el proceso y el prototipo a los ingenieros que definirán la arquitectura y le darán solidez.",
      "MIRÓ Labs is where I keep building on that experience. Some projects start with a problem at work; others with my own curiosity about books, records, sound, or learning. I use design, AI, and experimentation to see how far an idea can go.":
        "MIRÓ Labs es donde sigo construyendo a partir de esa experiencia. Algunos proyectos empiezan con un problema del trabajo; otros, con mi curiosidad por los libros, los vinilos, el sonido o el aprendizaje. Uso diseño, IA y experimentación para descubrir hasta dónde puede llegar una idea.",
      "A Mandarin voice tutor came from wanting to practice every day. My book and vinyl projects came from wanting a better way to enjoy my collections. Building things I use gives me a reason to keep testing, noticing what gets in the way, and improving them.":
        "Un tutor de mandarín por voz nació de querer practicar todos los días. Los proyectos de libros y vinilos, de querer disfrutar mejor mis colecciones. Construir cosas que uso me da un motivo para seguir probándolas, detectar qué estorba y mejorarlas.",
      "I'm based in Lima, with Peruvian and Italian citizenship, and open to international travel and relocation. I'm interested in working with teams that want to bring useful technology into people's everyday work.":
        "Vivo en Lima, tengo nacionalidad peruana e italiana y estoy abierto a viajar y mudarme. Me interesa trabajar con equipos que quieran llevar tecnología útil al trabajo cotidiano de las personas.",
      "If you have a problem worth exploring or an idea you'd like to put to the test, I'd love to hear about it.":
        "Si tienes un problema que vale la pena explorar o una idea que te gustaría poner a prueba, me encantará conocerla.",
      /* index direction, mono revision */
      "That approach grew through building businesses in digital dentistry and working in the energy sector. Today I bring it to MIRÓ Labs, using AI to explore ideas and put them into practice.":
        "Esa forma de trabajar nació emprendiendo en odontología digital y trabajando en el sector energético. Hoy la llevo a MIRÓ Labs, donde uso IA para explorar ideas y ponerlas en práctica.",
      "The projects here come from work, curiosity, and things I want to use myself. Open one and take a look.":
        "Estos proyectos nacen del trabajo, de la curiosidad y de cosas que quiero usar yo mismo. Abre uno y explóralo.",
      "MIRÓ Labs — 2026 — press G for the grid":
        "MIRÓ Labs — 2026 — pulsa G para ver la retícula",
      "Email":
        "Correo",
      "This page sits on twelve columns and a 26 pixel line. Press G to see it.":
        "Esta página se apoya en doce columnas y una línea de 26 píxeles. Pulsa G para verla.",
      /* index direction, grid revision */
      "I'm Alonso Rivera. An entrepreneur who turns everyday problems into working prototypes.":
        "Soy Alonso Rivera. Un emprendedor que convierte problemas cotidianos en prototipos que funcionan.",
      "I start by listening: how people work, where they get stuck, and what would make their day easier. Then I map the process and build something they can try.":
        "Empiezo por escuchar: cómo trabaja la gente, dónde se traba y qué le haría el día más fácil. Después ordeno el proceso y construyo algo que pueda probar.",
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
      "Alonso Rivera's personal lab. An entrepreneur exploring real problems through design, AI, and working prototypes.":
        "El laboratorio personal de Alonso Rivera. Un emprendedor que explora problemas reales a través del diseño, la IA y prototipos funcionales.",
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
      "11 projects":
        "11 proyectos",
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
      "Hardware":
        "Hardware",
      "Robotics":
        "Robótica",
      "Experiments":
        "Experimentos",
      "Color":
        "Color",
      "The 348 color combinations of Sanzo Wada's 1933 dictionary, rebuilt from a scan of the book into a page you can search, filter and copy from.":
        "Las 348 combinaciones de color del diccionario de Sanzo Wada de 1933, reconstruidas desde un escaneo del libro como una página que se puede buscar, filtrar y copiar.",
      "Every plate is set the way the book sets it, cross layout and all, with the names printed underneath. Each swatch is identified by that printed name and never by its scanned color: a scanner dulls the inks, and matching by appearance confuses a Jasper Red with an English Red. Of the 1,032 swatches, 834 came from the printed captions and 198 were transcribed by hand, then 84 plates were checked against the original page one by one. Hex values come from the CMYK formulas the book prints in its own index. The combinations and the 159 colors download as CSV, JSON, ASE and GPL.":
        "Cada lámina está montada como la monta el libro, montaje en cruz incluido, con los nombres impresos debajo. Cada muestra se identifica por ese nombre impreso y nunca por su color escaneado: el escáner apaga las tintas, y emparejar por apariencia confunde un Jasper Red con un English Red. De las 1.032 muestras, 834 salieron de los pies impresos y 198 se transcribieron a mano; después se verificaron 84 láminas contra la página original, una por una. Los hex vienen de las fórmulas CMYK que el propio libro imprime en su índice. Las combinaciones y los 159 colores se descargan en CSV, JSON, ASE y GPL.",
      "Nine posters by Jacqueline Casey, animated in the browser so they arrive one by one, stack, and collapse into a single image.":
        "Nueve carteles de Jacqueline Casey, animados en el navegador para que lleguen uno a uno, se apilen y se derrumben en una sola imagen.",
      "The motion is a study of someone else's work: an existing WebGL opening was taken apart and kept whole — its shaders, its camera path, its timing — with the five photographs it shipped replaced by posters Casey designed at MIT between 1955 and 1989. Forty-five posters were pulled from the archive and laid out on contact sheets before nine were chosen, weighted toward how each one holds up in grayscale: the sequence drains the color out and only gives it back to the cover as it fills the screen. Built with Three.js and GSAP, with no build step. Poster images from the MIT Museum collection.":
        "El movimiento es un estudio del trabajo de otro: se desarmó una secuencia de apertura en WebGL y se conservó entera — sus shaders, su recorrido de cámara, sus tiempos — cambiando las cinco fotografías originales por carteles que Casey diseñó en el MIT entre 1955 y 1989. Se bajaron cuarenta y cinco carteles del archivo y se ordenaron en hojas de contacto antes de elegir nueve, pesando sobre todo cómo aguanta cada uno en escala de grises: la secuencia le saca el color y solo se lo devuelve a la portada cuando llena la pantalla. Hecho con Three.js y GSAP, sin paso de build. Imágenes de los carteles de la colección del MIT Museum.",
      "A catalog of components for building physical AI and robotics, organized by function and filtered by the specifications that actually decide a choice.":
        "Un catálogo de componentes para construir IA física y robótica, organizado por función y filtrado por las especificaciones que de verdad deciden una elección.",
      "215 components across 131 families, each carrying the supplier's public reference price, the date it was observed, and a link back to the manufacturer. Nothing is sold here yet: the call to action is a quote list, and a part with no public price says so instead of guessing one.":
        "215 componentes en 131 familias, cada uno con el precio público de referencia del proveedor, la fecha en que se observó y un enlace de vuelta al fabricante. Aquí todavía no se vende nada: la acción es una lista de cotización, y la pieza que no tiene precio público lo dice en lugar de inventarlo.",
      "A price research engine for second-hand and new computer hardware, which finds the best price on the market and delivers the part to your door.":
        "Un motor de investigación de precios de hardware nuevo y de segunda mano, que encuentra el mejor precio del mercado y te lleva la pieza a casa.",
      "Every price on the site carries where it was found, when it was observed, and what the part actually sells for, as opposed to what sellers ask. Observations expire on purpose: when a quote is no longer fresh the site withholds the figure and re-checks it, rather than resetting a countdown.":
        "Cada precio del sitio lleva dónde se encontró, cuándo se observó y a cuánto se vende de verdad la pieza, frente a lo que piden los vendedores. Las observaciones caducan a propósito: cuando una cotización deja de estar fresca, el sitio retiene la cifra y vuelve a comprobarla, en lugar de reiniciar una cuenta atrás.",
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
