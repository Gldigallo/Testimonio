import './App.css';
import Testimonio from './Componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Proyecto basado en Testimonios diversos</h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          desImg='Foto de  Shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones que fui estudiando a mi ritmo. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. La programación cambió mi vida.'
        />
        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          desImg='Foto de Sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='Imaginar un futuro mejor fue la motivación para estudiar una carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        />
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          desImg='Foto de Emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el dejar de intentar fue el motor para no abandonar. Estudiar JavaScript, así como estructuras de datos y algoritmos fueron metas que logre superar y  me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />
      </div>
    </div>
  );
}

export default App;