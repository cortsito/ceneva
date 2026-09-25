import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";
import { get_pilot_review_candidates } from "@/features/practice/pilot-review-candidates";
import { GlobalHomeGuidance } from "@/features/progress/global-home-guidance";
import { get_global_topic_definitions } from "@/features/progress/global-topic-definitions";

const study_promises = [
  "Una ruta clara a partir de la guía oficial.",
  "Lecciones breves con práctica y explicación.",
  "Progreso que indica qué estudiar después.",
];

export default async function HomePage() {
  const [areas, review_candidates] = await Promise.all([
    get_global_topic_definitions(),
    get_pilot_review_candidates(),
  ]);

  return (
    <section className="page-shell home-page">
      <div className="home-hero">
        <div className="home-hero__copy">
          <div className="home-hero__meta">
            <Eyebrow>Acuerdo 286</Eyebrow>
            <span aria-hidden="true" className="home-hero__rule" />
            <span className="home-hero__edition">Edición 01</span>
          </div>
          <div className="home-hero__message">
            <h1 className="page-heading page-heading--display">
              Estudia con una ruta, no solo con un simulador.
            </h1>
            <p className="page-intro">
              Ceneva convierte la guía oficial en una preparación clara, medible y
              práctica para acreditar el bachillerato.
            </p>
          </div>
          <div className="home-hero__actions">
            <Link className="button-primary" href="/onboarding">
              Comenzar mi preparación
            </Link>
            <Link className="button-secondary" href="/ruta">
              Explorar la ruta
            </Link>
          </div>
        </div>

        <aside className="home-dashboard">
          <div className="home-dashboard__next">
            <Eyebrow>Tu próxima acción</Eyebrow>
            <GlobalHomeGuidance areas={areas} review_candidates={review_candidates} />
          </div>
          <div className="home-dashboard__metrics">
            <div>
              <p className="home-dashboard__metric">7</p>
              <p className="home-dashboard__metric-label">áreas de estudio</p>
            </div>
            <div>
              <p className="home-dashboard__metric">{review_candidates.length}</p>
              <p className="home-dashboard__metric-label">reactivos explicados</p>
            </div>
          </div>
          <div className="home-dashboard__promises">
            <Eyebrow>Lo que encontrarás</Eyebrow>
            <ol>
              {study_promises.map((promise, index) => (
                <li key={promise}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>{promise}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}
