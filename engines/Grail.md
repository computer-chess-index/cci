# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2923<sub>(+27) | 3194<sub>(+40) | 3264<sub>(+17) |  |
| 2.0.0 | 2026-05-11 | 2896<sub>(+100) | 3154<sub>(+87) | 3247<sub>(+83) |  |
| 1.1.0 | 2026-02-28 | 2796<sub>(+351) | 3067<sub>(+358) | 3164<sub>(+320) |  |
| 1.0.4 | 2026-01-16 | 2445<sub>(+128) | 2709<sub>(+37) | 2844<sub>(+99) |  |
| 1.0.3 | 2026-01-04 | 2317<sub>(+26) | 2672<sub>(+115) | 2745<sub>(+75) |  |
| 1.0.2 | 2025-12-16 | 2291<sub>(+27) | 2557<sub>(+19) | 2670<sub>(-54) |  |
| 1.0.1 | 2025-12-10 | 2264<sub>(+38) | 2538<sub>(-12) | 2724<sub>(-52) |  |
| 1.0.0 | 2025-12-05 | 2226 | 2550 | 2776 |  |
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

Generated: 2026-06-24 06:24:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2226, 2264, 2291, 2317, 2445, 2796, 2896, 2923]
  line "STC (8.0+0.08s)" [2226, 2264, 2291, 2317, 2445, 2796, 2896, 2923]
  line "LTC (60.0+0.60s)" [2550, 2538, 2557, 2672, 2709, 3067, 3154, 3194]
  line "VLTC (2m24s+1.12s)" [2776, 2724, 2670, 2745, 2844, 3164, 3247, 3264]
  line "VLTC (2m24s+1.12s)" [2776, 2724, 2670, 2745, 2844, 3164, 3247, 3264]
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
  line "STC (8.0+0.08s)" [2226, 2264, 2291, 2317, 2445, 2796, 2896, 2923]
  line "STC (8.0+0.08s)" [2226, 2264, 2291, 2317, 2445, 2796, 2896, 2923]
  line "LTC (60.0+0.60s)" [2550, 2538, 2557, 2672, 2709, 3067, 3154, 3194]
  line "VLTC (2m24s+1.12s)" [2776, 2724, 2670, 2745, 2844, 3164, 3247, 3264]
  line "VLTC (2m24s+1.12s)" [2776, 2724, 2670, 2745, 2844, 3164, 3247, 3264]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3264 | 31 | 272 | 52% | 3248 | 59% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3194 | 31 | 276 | 51% | 3183 | 59% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2923 | 33 | 268 | 53% | 2900 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3247 | 29 | 316 | 51% | 3240 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3154 | 29 | 322 | 48% | 3167 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2896 | 29 | 352 | 52% | 2877 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3164 | 27 | 392 | 53% | 3146 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3067 | 28 | 356 | 51% | 3055 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2796 | 28 | 398 | 51% | 2785 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2844 | 34 | 272 | 49% | 2853 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2709 | 35 | 252 | 50% | 2711 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2445 | 31 | 348 | 55% | 2400 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2745 | 43 | 172 | 50% | 2747 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2672 | 45 | 160 | 51% | 2665 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2317 | 44 | 172 | 51% | 2310 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2670 | 38 | 214 | 50% | 2672 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2557 | 35 | 264 | 46% | 2595 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2291 | 41 | 212 | 55% | 2246 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2724 | 42 | 180 | 52% | 2709 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2538 | 40 | 202 | 53% | 2511 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2264 | 50 | 142 | 48% | 2282 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2776 | 61 | 92 | 42% | 2846 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2550 | 59 | 92 | 46% | 2585 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2226 | 67 | 82 | 59% | 2142 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |