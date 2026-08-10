# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-04 | 3119<sub>(+108) | 3333<sub>(+150) | 3359<sub>(+100) |  |
| 3.5 | 2026-06-02 | 3011<sub>(+98) | 3183<sub>(+51) | 3259<sub>(+96) |  |
| 3.3.1 | 2026-02-10 | 2913<sub>(-26) | 3132<sub>(-28) | 3163<sub>(-19) |  |
| 3.3 | 2026-02-09 | 2939<sub>(+31) | 3160<sub>(+58) | 3182<sub>(+24) |  |
| 3.2 | 2025-12-21 | 2908<sub>(+86) | 3102<sub>(+98) | 3158<sub>(+69) |  |
| 3.1 | 2025-11-28 | 2822<sub>(+75) | 3004<sub>(+72) | 3089<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2747<sub>(+534) | 2932<sub>(+533) | 2957<sub>(+485) |  |
| 2.1 | 2025-10-13 | 2213 | 2399 | 2472 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-10 07:04:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "STC (8.0+0.08s)" [2213, 2747, 2822, 2908, 2939, 2913, 3011, 3119]
  line "STC (8.0+0.08s)" [2213, 2747, 2822, 2908, 2939, 2913, 3011, 3119]
  line "LTC (60.0+0.60s)" [2399, 2932, 3004, 3102, 3160, 3132, 3183, 3333]
  line "VLTC (2m24s+1.12s)" [2472, 2957, 3089, 3158, 3182, 3163, 3259, 3359]
  line "VLTC (2m24s+1.12s)" [2472, 2957, 3089, 3158, 3182, 3163, 3259, 3359]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3359 | 31 | 262 | 51% | 3355 | 73% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3333 | 31 | 254 | 51% | 3328 | 72% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3119 | 34 | 232 | 48% | 3132 | 59% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3259 | 27 | 368 | 49% | 3266 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3183 | 27 | 364 | 51% | 3171 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3011 | 28 | 364 | 49% | 3017 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3163 | 35 | 228 | 52% | 3147 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3132 | 42 | 158 | 53% | 3113 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2913 | 41 | 170 | 49% | 2924 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3182 | 104 | 24 | 58% | 3119 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3160 | 102 | 24 | 54% | 3124 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2939 | 110 | 24 | 50% | 2942 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3158 | 35 | 226 | 49% | 3168 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3102 | 33 | 260 | 52% | 3087 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2908 | 33 | 264 | 50% | 2911 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3089 | 35 | 232 | 51% | 3082 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3004 | 36 | 212 | 52% | 2986 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2822 | 37 | 224 | 48% | 2840 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2957 | 51 | 128 | 57% | 2878 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2932 | 43 | 184 | 59% | 2843 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2747 | 56 | 108 | 53% | 2704 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2472 | 57 | 110 | 48% | 2503 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2399 | 58 | 108 | 48% | 2418 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2213 | 62 | 88 | 51% | 2207 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |