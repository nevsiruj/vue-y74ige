<template>
  <!-- Navbar -->

  <nav class="bg-purple-700 shadow">
    <div class="container mx-auto px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div
            class="
              bg-purple-500
              rounded-full
              h-8
              w-8
              flex
              items-center
              justify-center
              mr-2
            "
          >
            <div class="text-white text-2xl font-bold">V</div>
          </div>
          <h1 class="text-lg font-bold text-white font-montserrat">Vylaris</h1>
        </div>

        <div class="flex md:hidden">
          <button
            @click="showMenu = !showMenu"
            class="
              border border-gray-500
              rounded
              px-3
              py-2
              text-white
              mr-2
              focus:outline-none
            "
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div class="hidden md:flex md:items-center">
          <a class="text-lg text-white font-roboto mr-4" href="#">Inicio</a>
          <a class="text-lg text-white font-roboto mr-4" href="#">Servicios</a>
          <a class="text-lg text-white font-roboto mr-4" href="#metodologia"
            >Metodologia</a
          >
          <a class="text-lg text-white font-roboto" href="#contacto"
            >Contacto</a
          >
        </div>
      </div>
      <div class="md:hidden" :class="{ block: showMenu, hidden: !showMenu }">
        <a
          class="
            block
            text-lg text-white
            font-roboto
            py-2
            px-4
            hover:bg-purple-800
          "
          href="#"
          >Inicio</a
        >
        <a
          class="
            block
            text-lg text-white
            font-roboto
            py-2
            px-4
            hover:bg-purple-800
          "
          href="#servicios"
          >Servicios</a
        >
        <a
          class="
            block
            text-lg text-white
            font-roboto
            py-2
            px-4
            hover:bg-purple-800
          "
          href="#metodologia"
          >Metodologia</a
        >
        <a
          class="
            block
            text-lg text-white
            font-roboto
            py-2
            px-4
            hover:bg-purple-800
          "
          href="#contacto"
          >Contacto</a
        >
      </div>
    </div>
  </nav>

  <!-- Sección de contenido -->
  <section
    class="bg-gray-100 py-12"
    style="
      background-image: url('https://img.freepik.com/vector-premium/conexiones-red-global-puntos-lineas-fondo-estructura-metalica-estructura-conexion-abstracta-fondo-espacio-poligonal_230610-123.jpg');
    "
  >
    <div class="container mx-auto px-6">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-black mb-4 font-sans">
          Soluciones creativas para tu negocio
        </h2>
        <p class="text-black leading-relaxed mb-8">
          En Vylaris nos especializamos en ofrecer soluciones creativas a medida
          para empresas y organizaciones, desde el diseño de marcas y
          estrategias de marketing, hasta el desarrollo de aplicaciones web y
          móviles. Nos aseguramos de que cada solución sea única y se adapte a
          las necesidades específicas de cada cliente.
        </p>
        <a href="#contacto">
          <button
            class="
              bg-purple-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              focus:outline-none focus:shadow-outline
            "
          >
            <i class="fas fa-envelope mr-2"></i>
            Contáctanos
          </button>
        </a>
      </div>
    </div>
  </section>

  <!-- Sección de servicios -->
  <section class="bg-gray-100 py-8">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-purple-500 mb-8">
        Nuestros servicios creativos
      </h2>
      <div class="flex flex-wrap -mx-3">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div class="rounded-lg p-6 shadow-md h-full">
            <h3 class="text-xl font-bold text-black mb-2">
              <i class="fas fa-palette"></i> Diseño de marcas
            </h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Creamos marcas únicas y memorables, que reflejen la personalidad y
              los valores de tu empresa o proyecto. Ofrecemos desde la
              concepción de la idea hasta la implementación de la identidad
              corporativa completa.
            </p>
            <a class="text-purple-500 font-bold hover:underline" href="#"
              >Leer más</a
            >
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div class="rounded-lg p-6 shadow-md h-full">
            <h3 class="text-xl font-bold text-black mb-2">
              Diseño de Landing Pages
            </h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Creamos landing pages que se adapten a tu negocio para que puedas
              convertir visitas en clientes potenciales.
            </p>
            <a class="text-purple-500 font-bold hover:underline" href="#"
              >Leer más</a
            >
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div class="rounded-lg p-6 shadow-md h-full">
            <h3 class="text-xl font-bold text-black mb-2">Tiendas Online</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Creamos tiendas online personalizadas, con un diseño atractivo y
              funcionalidades que te ayudarán a vender tus productos de forma
              efectiva.
            </p>
            <a class="text-purple-500 font-bold hover:underline" href="#"
              >Leer más</a
            >
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div class="rounded-lg p-6 shadow-md h-full">
            <h3 class="text-xl font-bold text-black mb-2">
              Desarrollo de aplicaciones web
            </h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Desarrollamos aplicaciones web a medida, desde la concepción de la
              idea hasta la implementación y mantenimiento del sistema, con
              diseños y funcionalidades personalizadas según tus necesidades.
            </p>
            <a class="text-purple-500 font-bold hover:underline" href="#"
              >Leer más</a
            >
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div class="rounded-lg p-6 shadow-md h-full">
            <h3 class="text-xl font-bold text-black mb-2">
              Mantenimiento de redes sociales
            </h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              Ofrecemos servicios de mantenimiento de redes sociales para
              empresas y organizaciones, con el objetivo de mantener una
              presencia activa en las principales plataformas y mejorar el
              engagement con los seguidores.
            </p>
            <a class="text-purple-500 font-bold hover:underline" href="#"
              >Leer más</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección de proceso o metodología de trabajo -->
  <section class="bg-white py-8" id="metodologia">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-purple-500 mb-8">
        Proceso o metodología de trabajo
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-purple-500 rounded-lg overflow-hidden shadow-md">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="rounded-full bg-white px-4 py-3">
                <i class="fas fa-lightbulb text-purple-500"></i>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-white">Brainstorming</h3>
              </div>
            </div>
            <p class="text-white leading-relaxed">
              En esta fase, trabajamos en estrecha colaboración con nuestros
              clientes para entender sus necesidades y objetivos de negocio.
            </p>
          </div>
        </div>
        <div class="bg-purple-500 rounded-lg overflow-hidden shadow-md">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="rounded-full bg-white px-4 py-3">
                <i class="fas fa-palette text-purple-500"></i>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-white">Diseño</h3>
              </div>
            </div>
            <p class="text-white leading-relaxed">
              Con base en los requisitos y objetivos, creamos diseños atractivos
              y funcionales para nuestros clientes.
            </p>
          </div>
        </div>
        <div class="bg-purple-500 rounded-lg overflow-hidden shadow-md">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="rounded-full bg-white px-4 py-3">
                <i class="fas fa-code text-purple-500"></i>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-white">Desarrollo</h3>
              </div>
            </div>
            <p class="text-white leading-relaxed">
              Nuestro equipo de desarrolladores se encarga de llevar los diseños
              a la vida, asegurándose de que cada proyecto tenga la
              funcionalidad y el rendimiento necesarios.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-purple-700 to-indigo-800 py-12">
    <div class="container mx-auto px-4">
      <div
        class="
          flex flex-col
          md:flex-row
          items-center
          justify-center
          md:justify-between
        "
      >
        <div class="md:w-1/2 lg:w-1/3 text-center md:text-left">
          <h2 class="text-4xl font-bold text-white leading-tight mb-4">
            Soluciones creativas para tu negocio
          </h2>
          <p class="text-xl text-gray-200 mb-8">
            En Vylaris te ofrecemos soluciones a medida para tu negocio, desde
            el desarrollo de aplicaciones web y móviles, hasta el diseño de
            tiendas online y landing pages atractivas y funcionales. ¡Impulsa tu
            negocio hoy mismo con Vylaris!
          </p>
          <div class="flex justify-center md:justify-start">
            <a
              href="#"
              class="
                bg-white
                hover:bg-gray-100
                text-purple-700
                font-bold
                py-2
                px-4
                rounded-lg
                mr-4
              "
              >Contáctanos</a
            >
            <a
              href="#"
              class="
                text-white
                hover:text-gray-200
                font-bold
                py-2
                px-4
                rounded-lg
              "
              >Nuestros servicios</a
            >
          </div>
        </div>
        <div class="md:w-1/2 lg:w-2/3 mt-8 md:mt-0">
          <img
            src="https://img.freepik.com/fotos-premium/imagen-abstracta-conexion-posiciones-red-sirve-como-representacion-fondo-3d_537132-1623.jpg"
            alt="Soluciones creativas para tu negocio"
            class="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white" id="contacto">
    <div
      class="
        container
        mx-auto
        px-4
        py-12
        md:flex md:items-center md:justify-center
      "
    >
      <div class="md:w-1/2 lg:w-1/3 text-center md:text-left">
        <h2 class="text-4xl font-bold text-gray-700 leading-tight mb-4">
          ¡Contáctanos hoy mismo!
        </h2>
        <p class="text-xl text-gray-500 mb-8">
          ¿Tienes preguntas sobre nuestros servicios de diseño y creatividad?
          ¿Quieres que te ayudemos a materializar tu proyecto? ¡Estamos aquí
          para ayudarte! Contáctanos a través de WhatsApp o completando nuestro
          formulario de contacto.
        </p>
        <div class="flex justify-center md:justify-start">
          <a
            href="https://wa.me/+2664255928"
            class="
              bg-purple-700
              hover:bg-purple-800
              text-white
              font-bold
              py-2
              px-4
              rounded-lg
              mr-4
            "
            >Contactar por WhatsApp</a
          >
          <a
            href="#"
            class="
              bg-purple-500
              hover:bg-purple-600
              text-white
              font-bold
              py-2
              px-4
              rounded-lg
            "
            >Formulario de contacto</a
          >
        </div>
      </div>
      <div class="md:w-1/2 lg:w-2/3 mt-8 md:mt-0">
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/684/291/non_2x/technology-geometric-abstract-background-violet-pink-background-pattern-geometric-structure-hexagon-background-free-vector.jpg"
          alt="Contacto"
          class="rounded-lg shadow-md"
        />
      </div>
    </div>
  </section>

  <!-- Sección de formulario -->
  <section class="bg-white py-8">
    <div class="container mx-auto px-6">
      <div class="rounded-lg p-6">
        <h2 class="text-2xl font-bold text-gray-700 mb-8">
          Suscríbete para recibir más información
        </h2>
        <form class="mb-4">
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                class="
                  appearance-none
                  bg-transparent
                  border-b-2 border-purple-600
                  w-full
                  py-2
                  px-3
                  text-black
                  leading-tight
                  focus:outline-none focus:border-purple-800
                "
                id="nombre"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <input
                class="
                  appearance-none
                  bg-transparent
                  border-b-2 border-purple-600
                  w-full
                  py-2
                  px-3
                  text-black
                  leading-tight
                  focus:outline-none focus:border-purple-800
                "
                id="email"
                type="email"
                placeholder="Correo electrónico"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-4">
            <div class="w-full px-3">
              <textarea
                class="
                  appearance-none
                  bg-transparent
                  border-b-2 border-purple-600
                  w-full
                  py-2
                  px-3
                  text-black
                  leading-tight
                  focus:outline-none focus:border-purple-800
                "
                id="mensaje"
                rows="5"
                placeholder="Escribe tu mensaje aquí"
              ></textarea>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mt-4">
            <div class="w-full px-3">
              <button
                class="
                  bg-purple-500
                  hover:bg-purple-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                  focus:outline-none focus:shadow-outline
                  border-b-4 border-purple-800
                "
                type="button"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>

  <a
    href="https://wa.me/+2664255928"
    target="_blank"
    rel="noopener"
    class="
      fixed
      bottom-8
      right-7
      bg-green-500
      hover:bg-green-600
      text-white
      rounded-full
      px-3
      py-2
    "
  >
    <i class="fab fa-whatsapp fa-2x"></i>
  </a>

  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto py-8 px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-2">
          <h3 class="text-2xl font-bold mb-4">Sobre nosotros</h3>
          <p class="mb-4">
            Somos una agencia creativa enfocada en ofrecer soluciones
            personalizadas para cada cliente. Nos especializamos en diseño de
            marcas, desarrollo de sitios web, marketing digital y mucho más.
          </p>
          <p class="mb-4">
            Nuestro objetivo es ayudar a que tu negocio crezca y alcance su
            máximo potencial en línea.
          </p>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-4">Contáctanos</h3>
          <ul class="mb-4">
            <li>
              <i class="fas fa-map-marker-alt mr-2"></i>Villa Dolores, Córdoba,
              Argentina
            </li>
            <li><i class="fas fa-phone-alt mr-2"></i>+51 999 999 999</li>
            <li><i class="fas fa-envelope mr-2"></i>info@vylaris.com</li>
          </ul>
          <h3 class="text-2xl font-bold mb-4">Síguenos</h3>
          <div class="flex">
            <a href="#" class="mr-4"><i class="fab fa-facebook fa-2x"></i></a>
            <a href="#" class="mr-4"><i class="fab fa-twitter fa-2x"></i></a>
            <a href="#" class="mr-4"><i class="fab fa-instagram fa-2x"></i></a>
            <a href="#" class="mr-4"><i class="fab fa-linkedin fa-2x"></i></a>
          </div>
        </div>
      </div>
      <hr class="border-gray-600 my-8" />
      <div class="text-center">
        <p class="text-gray-500 mb-4">
          © 2023 Vylaris. Todos los derechos reservados.
        </p>
        <!-- <a href="#" class="text-purple-500 font-bold hover:underline">Política de privacidad</a> -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  padding: 10px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  font-size: 24px;
  text-align: center;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
}

.whatsapp-float i {
  margin-top: 6px;
}
</style>
