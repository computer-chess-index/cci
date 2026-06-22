# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2921<sub>(+27) | 3195<sub>(+43) | 3263<sub>(+18) |  |
| 2.0.0 | 2026-05-11 | 2894<sub>(+99) | 3152<sub>(+86) | 3245<sub>(+82) |  |
| 1.1.0 | 2026-02-28 | 2795<sub>(+350) | 3066<sub>(+358) | 3163<sub>(+320) |  |
| 1.0.4 | 2026-01-16 | 2445<sub>(+130) | 2708<sub>(+38) | 2843<sub>(+100) |  |
| 1.0.3 | 2026-01-04 | 2315<sub>(+25) | 2670<sub>(+113) | 2743<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2290<sub>(+27) | 2557<sub>(+20) | 2670<sub>(-53) |  |
| 1.0.1 | 2025-12-10 | 2263<sub>(+37) | 2537<sub>(-12) | 2723<sub>(-51) |  |
| 1.0.0 | 2025-12-05 | 2226 | 2549 | 2774 |  |
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

Generated: 2026-06-22 06:25:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2226, 2263, 2290, 2315, 2445, 2795, 2894, 2921]
  line "STC (8.0+0.08s)" [2226, 2263, 2290, 2315, 2445, 2795, 2894, 2921]
  line "LTC (60.0+0.60s)" [2549, 2537, 2557, 2670, 2708, 3066, 3152, 3195]
  line "VLTC (2m24s+1.12s)" [2774, 2723, 2670, 2743, 2843, 3163, 3245, 3263]
  line "VLTC (2m24s+1.12s)" [2774, 2723, 2670, 2743, 2843, 3163, 3245, 3263]
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
  line "STC (8.0+0.08s)" [2226, 2263, 2290, 2315, 2445, 2795, 2894, 2921]
  line "STC (8.0+0.08s)" [2226, 2263, 2290, 2315, 2445, 2795, 2894, 2921]
  line "LTC (60.0+0.60s)" [2549, 2537, 2557, 2670, 2708, 3066, 3152, 3195]
  line "VLTC (2m24s+1.12s)" [2774, 2723, 2670, 2743, 2843, 3163, 3245, 3263]
  line "VLTC (2m24s+1.12s)" [2774, 2723, 2670, 2743, 2843, 3163, 3245, 3263]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3263 | 31 | 272 | 52% | 3247 | 59% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3195 | 32 | 268 | 52% | 3181 | 59% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2921 | 33 | 268 | 53% | 2898 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3245 | 29 | 316 | 51% | 3239 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3152 | 29 | 322 | 48% | 3164 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2894 | 29 | 352 | 52% | 2876 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3163 | 27 | 392 | 53% | 3144 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3066 | 28 | 356 | 51% | 3054 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2795 | 28 | 398 | 51% | 2784 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2843 | 34 | 272 | 49% | 2851 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2708 | 35 | 252 | 50% | 2709 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2445 | 31 | 348 | 55% | 2399 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2743 | 43 | 172 | 50% | 2746 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2670 | 45 | 160 | 51% | 2664 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2315 | 44 | 172 | 51% | 2310 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2670 | 38 | 214 | 50% | 2670 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2557 | 35 | 264 | 46% | 2595 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2290 | 41 | 212 | 55% | 2245 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2723 | 42 | 180 | 52% | 2708 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2537 | 40 | 202 | 53% | 2510 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2263 | 50 | 142 | 48% | 2282 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2774 | 61 | 92 | 42% | 2844 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2549 | 59 | 92 | 46% | 2584 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2226 | 67 | 82 | 59% | 2141 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |