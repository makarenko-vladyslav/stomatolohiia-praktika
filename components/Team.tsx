
"use client";
import { useLocale } from "@/lib/i18n";

export default function Team() {
  const { t } = useLocale();

  interface Member {
    name: string;
    role: string;
    bio: string;
  }

  const members = t("team.members") as Member[] || [];

  // Consistent portraits seeded appropriately with role-matching dental images
  const getPortraitUrl = (idx: number) => {
    switch (idx) {
      case 0:
        return "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600";
      case 1:
        return "https://images.pexels.com/photos/3845815/pexels-photo-3845815.jpeg?auto=compress&cs=tinysrgb&w=600";
      case 2:
        return "https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=600";
      default:
        return "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600";
    }
  };

  return (
    <section id="team" className="py-12 md:py-20 lg:py-24 bg-bg-light relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">
            {t("team.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary leading-tight tracking-tight mb-6">
            {t("team.title") as string}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("team.subtitle") as string}
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-subtle rounded overflow-hidden group hover:border-accent/40 transition-colors"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={getPortraitUrl(idx)}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('img-fallback');
                  }}
                />
              </div>
              
              <div className="p-6">
                <span className="text-accent text-[10px] font-bold tracking-wider uppercase">
                  {member.role}
                </span>
                <h3 className="text-xl font-bold font-display text-primary mt-1 mb-3">
                  {member.name}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
