import Container from "../shared/Container";
import Section from "../shared/Section";

export default function YagaSeparation() {
  return (
    <Section className="bg-surface-deep border-y border-line">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              How Yaga Calls Separates Free and Premium Access
            </h2>
            <p className="text-xl text-text-muted leading-relaxed">
              Yaga Calls separates free and premium access clearly. The free Telegram group is the observation layer, while the premium access is the deeper signal and research layer.
            </p>
            <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
              <p className="text-sm font-bold text-red-500 uppercase tracking-widest mb-2">Important Note on Filtering</p>
              <p className="text-xs text-text-muted leading-relaxed">
                Yaga Calls premium access is not built for users looking for cheap lifetime VIP access, guaranteed monthly profit, or random pump alerts. It is built for serious traders who want structured market research and risk-aware Telegram signal notes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-background border border-line space-y-6 shadow-lg">
              <h3 className="text-lg font-black uppercase tracking-widest text-primary">Free Telegram</h3>
              <ul className="space-y-4">
                {["General market updates", "Selected educational ideas", "Community announcements", "Public signal-style examples", "Basic commentary", "Style preview"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text-muted">
                    <span className="text-primary">/</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-background border border-primary/20 space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-bl-xl">Premium</div>
              <h3 className="text-lg font-black uppercase tracking-widest text-primary">Premium Access</h3>
              <ul className="space-y-4">
                {["Private premium delivery", "Deeper setup notes", "Entry and target context", "Invalidation and risk notes", "Priority watchlists", "Trade-planning notes", "Manual onboarding"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-text">
                    <span className="text-primary font-bold">+</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
