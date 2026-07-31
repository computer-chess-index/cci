# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2932<sub>(+34) | 3194<sub>(+36) | 3266<sub>(+17) |  |
| 2.0.0 | 2026-05-11 | 2898<sub>(+101) | 3158<sub>(+88) | 3249<sub>(+81) |  |
| 1.1.0 | 2026-02-28 | 2797<sub>(+353) | 3070<sub>(+361) | 3168<sub>(+321) |  |
| 1.0.4 | 2026-01-16 | 2444<sub>(+130) | 2709<sub>(+37) | 2847<sub>(+102) |  |
| 1.0.3 | 2026-01-04 | 2314<sub>(+26) | 2672<sub>(+115) | 2745<sub>(+75) |  |
| 1.0.2 | 2025-12-16 | 2288<sub>(+27) | 2557<sub>(+20) | 2670<sub>(-54) |  |
| 1.0.1 | 2025-12-10 | 2261<sub>(+36) | 2537<sub>(-13) | 2724<sub>(-54) |  |
| 1.0.0 | 2025-12-05 | 2225 | 2550 | 2778 |  |
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

Generated: 2026-07-31 06:25:34

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2225, 2261, 2288, 2314, 2444, 2797, 2898, 2932]
  line "STC (8.0+0.08s)" [2225, 2261, 2288, 2314, 2444, 2797, 2898, 2932]
  line "LTC (60.0+0.60s)" [2550, 2537, 2557, 2672, 2709, 3070, 3158, 3194]
  line "VLTC (2m24s+1.12s)" [2778, 2724, 2670, 2745, 2847, 3168, 3249, 3266]
  line "VLTC (2m24s+1.12s)" [2778, 2724, 2670, 2745, 2847, 3168, 3249, 3266]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3266 | 28 | 348 | 51% | 3255 | 57% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 27 | 364 | 50% | 3191 | 59% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2932 | 29 | 366 | 53% | 2909 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3249 | 29 | 316 | 51% | 3243 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3158 | 29 | 322 | 48% | 3170 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2898 | 29 | 352 | 52% | 2878 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3168 | 27 | 392 | 53% | 3148 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3070 | 28 | 356 | 51% | 3056 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2797 | 28 | 398 | 51% | 2786 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2847 | 34 | 272 | 49% | 2855 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2709 | 35 | 252 | 50% | 2712 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2444 | 31 | 348 | 55% | 2398 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2745 | 43 | 172 | 50% | 2749 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2672 | 45 | 160 | 51% | 2665 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2314 | 44 | 172 | 51% | 2307 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2670 | 38 | 214 | 50% | 2672 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2557 | 35 | 264 | 46% | 2595 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2288 | 41 | 212 | 55% | 2244 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2724 | 42 | 180 | 52% | 2709 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2537 | 40 | 202 | 53% | 2510 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2261 | 50 | 142 | 48% | 2280 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2778 | 61 | 92 | 42% | 2847 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2550 | 59 | 92 | 46% | 2584 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2225 | 67 | 82 | 59% | 2141 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |