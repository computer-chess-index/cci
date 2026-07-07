# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2925<sub>(+28) | 3194<sub>(+39) | 3259<sub>(+11) |  |
| 2.0.0 | 2026-05-11 | 2897<sub>(+101) | 3155<sub>(+86) | 3248<sub>(+82) |  |
| 1.1.0 | 2026-02-28 | 2796<sub>(+351) | 3069<sub>(+360) | 3166<sub>(+320) |  |
| 1.0.4 | 2026-01-16 | 2445<sub>(+130) | 2709<sub>(+37) | 2846<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2315<sub>(+25) | 2672<sub>(+115) | 2745<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2290<sub>(+27) | 2557<sub>(+19) | 2672<sub>(-52) |  |
| 1.0.1 | 2025-12-10 | 2263<sub>(+37) | 2538<sub>(-12) | 2724<sub>(-53) |  |
| 1.0.0 | 2025-12-05 | 2226 | 2550 | 2777 |  |
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

Generated: 2026-07-07 06:25:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2226, 2263, 2290, 2315, 2445, 2796, 2897, 2925]
  line "STC (8.0+0.08s)" [2226, 2263, 2290, 2315, 2445, 2796, 2897, 2925]
  line "LTC (60.0+0.60s)" [2550, 2538, 2557, 2672, 2709, 3069, 3155, 3194]
  line "VLTC (2m24s+1.12s)" [2777, 2724, 2672, 2745, 2846, 3166, 3248, 3259]
  line "VLTC (2m24s+1.12s)" [2777, 2724, 2672, 2745, 2846, 3166, 3248, 3259]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2226, 2263, 2290, 2315, 2445, 2796, 2897, 2925]
  line "STC (8.0+0.08s)" [2226, 2263, 2290, 2315, 2445, 2796, 2897, 2925]
  line "LTC (60.0+0.60s)" [2550, 2538, 2557, 2672, 2709, 3069, 3155, 3194]
  line "VLTC (2m24s+1.12s)" [2777, 2724, 2672, 2745, 2846, 3166, 3248, 3259]
  line "VLTC (2m24s+1.12s)" [2777, 2724, 2672, 2745, 2846, 3166, 3248, 3259]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3259 | 30 | 300 | 51% | 3251 | 59% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 31 | 288 | 51% | 3189 | 59% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2925 | 32 | 288 | 53% | 2903 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3248 | 29 | 316 | 51% | 3241 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3155 | 29 | 322 | 48% | 3167 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2897 | 29 | 352 | 52% | 2878 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3166 | 27 | 392 | 53% | 3147 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3069 | 28 | 356 | 51% | 3055 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2796 | 28 | 398 | 51% | 2786 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2846 | 34 | 272 | 49% | 2854 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2709 | 35 | 252 | 50% | 2712 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2445 | 31 | 348 | 55% | 2399 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2745 | 43 | 172 | 50% | 2749 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2672 | 45 | 160 | 51% | 2665 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2315 | 44 | 172 | 51% | 2309 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2672 | 38 | 214 | 50% | 2672 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2557 | 35 | 264 | 46% | 2595 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2290 | 41 | 212 | 55% | 2245 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2724 | 42 | 180 | 52% | 2709 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2538 | 40 | 202 | 53% | 2511 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2263 | 50 | 142 | 48% | 2280 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2777 | 61 | 92 | 42% | 2846 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2550 | 59 | 92 | 46% | 2585 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2226 | 67 | 82 | 59% | 2141 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |