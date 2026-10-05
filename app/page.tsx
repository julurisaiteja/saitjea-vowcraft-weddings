"use client";
import Link from "next/link";
import data from "@/lib/data.json";
import { ProductCard } from "@/components/ProductCard";
import { NicheTool } from "@/components/NicheTool";
import { HeroFilm } from "@/components/HeroFilm";
import type { Product } from "@/lib/types";
import { Marquee } from "@/components/Marquee";
import { StatRow } from "@/components/StatRow";
import { FilmStrip } from "@/components/FilmStrip";
import { Newsletter } from "@/components/Newsletter";
import { MotionReveal } from "@/components/MotionReveal";
import { OfferSpot } from "@/components/OfferSpot";
import { ReviewRail } from "@/components/ReviewRail";
import { FaqBlock } from "@/components/FaqBlock";

const brand = data.brand;
const products = data.products as Product[];

export default function HomePage() {
  return (
    <>
      <Marquee />
      <section className="vw-hero">
        <div className="absolute inset-0">
          <HeroFilm video={brand.heroVideo} image={brand.heroImage} className="!relative min-h-full" />
        </div>
        <div className="invite-card text-center">
          <p className="font-script mt-2 text-4xl md:text-5xl" style={{ color: "var(--accent)" }}>You are invited</p>
          <h1 className="mt-4 font-display text-4xl uppercase md:text-5xl">{brand.name}</h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed" style={{ color: "var(--muted)" }}>{brand.tagline}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/shop" className="rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ background: "var(--accent)" }}>View packages</Link>
            <Link href="/celebrations" className="rounded-full border px-6 py-3 text-sm font-semibold" style={{ borderColor: "var(--border)" }}>Celebrations</Link>
          </div>
          <p className="font-script mt-8 text-2xl" style={{ color: "var(--accent2)" }}>with love & timeline craft</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="invite-card"><NicheTool /></div>
        <h2 className="mt-14 text-center font-display text-3xl uppercase">Celebration packages</h2>
        <p className="mt-2 text-center text-sm" style={{ color: "var(--muted)" }}>{products.length} invitation-grade options</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <div key={p.id} className="invite-card !p-4"><ProductCard product={p} /></div>
          ))}
        </div>
      </section>
      <OfferSpot />
      <StatRow />
      <FilmStrip />
      <ReviewRail />
      <FaqBlock />
      <MotionReveal className="mx-auto max-w-6xl px-4 pb-16 md:px-6"><Newsletter /></MotionReveal>
    </>
  );
}
