# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2947<sub>(+36) | 3214<sub>(+43) | 3283<sub>(+19) |  |
| 2.0.0 | 2026-05-11 | 2911<sub>(+102) | 3171<sub>(+88) | 3264<sub>(+82) |  |
| 1.1.0 | 2026-02-28 | 2809<sub>(+355) | 3083<sub>(+361) | 3182<sub>(+323) |  |
| 1.0.4 | 2026-01-16 | 2454<sub>(+128) | 2722<sub>(+38) | 2859<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2326<sub>(+26) | 2684<sub>(+115) | 2758<sub>(+74) |  |
| 1.0.2 | 2025-12-16 | 2300<sub>(+27) | 2569<sub>(+20) | 2684<sub>(-54) |  |
| 1.0.1 | 2025-12-10 | 2273<sub>(+36) | 2549<sub>(-13) | 2738<sub>(-54) |  |
| 1.0.0 | 2025-12-05 | 2237 | 2562 | 2792 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:38:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "" [2237, 2273, 2300, 2326, 2454, 2809, 2911, 2947]
  line "STC (8.0+0.08s)" [2237, 2273, 2300, 2326, 2454, 2809, 2911, 2947]
  line "LTC (60.0+0.60s)" [2562, 2549, 2569, 2684, 2722, 3083, 3171, 3214]
  line "" [2792, 2738, 2684, 2758, 2859, 3182, 3264, 3283]
  line "VLTC (2m24s+1.12s)" [2792, 2738, 2684, 2758, 2859, 3182, 3264, 3283]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3283 | 26 | 416 | 51% | 3272 | 57% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3214 | 25 | 424 | 51% | 3206 | 60% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2947 | 25 | 460 | 52% | 2928 | 45% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3264 | 29 | 316 | 51% | 3258 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3171 | 29 | 322 | 48% | 3183 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2911 | 29 | 352 | 52% | 2892 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3182 | 27 | 392 | 53% | 3162 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3083 | 28 | 356 | 51% | 3071 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2809 | 28 | 398 | 51% | 2799 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2859 | 34 | 272 | 49% | 2867 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2722 | 35 | 252 | 50% | 2724 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2454 | 31 | 348 | 55% | 2410 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2758 | 43 | 172 | 50% | 2762 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2684 | 45 | 160 | 51% | 2678 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2326 | 44 | 172 | 51% | 2319 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2684 | 38 | 214 | 50% | 2685 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2569 | 35 | 264 | 46% | 2607 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2300 | 41 | 212 | 55% | 2256 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2738 | 42 | 180 | 52% | 2723 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2549 | 40 | 202 | 53% | 2522 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2273 | 50 | 142 | 48% | 2291 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2792 | 61 | 92 | 42% | 2862 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2562 | 59 | 92 | 46% | 2597 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2237 | 67 | 82 | 59% | 2153 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |