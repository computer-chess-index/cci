# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2927<sub>(+29) | 3195<sub>(+40) | 3262<sub>(+14) |  |
| 2.0.0 | 2026-05-11 | 2898<sub>(+101) | 3155<sub>(+85) | 3248<sub>(+81) |  |
| 1.1.0 | 2026-02-28 | 2797<sub>(+352) | 3070<sub>(+359) | 3167<sub>(+320) |  |
| 1.0.4 | 2026-01-16 | 2445<sub>(+128) | 2711<sub>(+38) | 2847<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2317<sub>(+26) | 2673<sub>(+115) | 2746<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2291<sub>(+28) | 2558<sub>(+20) | 2673<sub>(-53) |  |
| 1.0.1 | 2025-12-10 | 2263<sub>(+37) | 2538<sub>(-14) | 2726<sub>(-51) |  |
| 1.0.0 | 2025-12-05 | 2226 | 2552 | 2777 |  |
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

Generated: 2026-07-10 06:26:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2226, 2263, 2291, 2317, 2445, 2797, 2898, 2927]
  line "STC (8.0+0.08s)" [2226, 2263, 2291, 2317, 2445, 2797, 2898, 2927]
  line "LTC (60.0+0.60s)" [2552, 2538, 2558, 2673, 2711, 3070, 3155, 3195]
  line "VLTC (2m24s+1.12s)" [2777, 2726, 2673, 2746, 2847, 3167, 3248, 3262]
  line "VLTC (2m24s+1.12s)" [2777, 2726, 2673, 2746, 2847, 3167, 3248, 3262]
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
  line "STC (8.0+0.08s)" [2226, 2263, 2291, 2317, 2445, 2797, 2898, 2927]
  line "STC (8.0+0.08s)" [2226, 2263, 2291, 2317, 2445, 2797, 2898, 2927]
  line "LTC (60.0+0.60s)" [2552, 2538, 2558, 2673, 2711, 3070, 3155, 3195]
  line "VLTC (2m24s+1.12s)" [2777, 2726, 2673, 2746, 2847, 3167, 3248, 3262]
  line "VLTC (2m24s+1.12s)" [2777, 2726, 2673, 2746, 2847, 3167, 3248, 3262]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3262 | 29 | 312 | 51% | 3251 | 59% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3195 | 30 | 304 | 50% | 3191 | 58% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2927 | 32 | 296 | 53% | 2903 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3248 | 29 | 316 | 51% | 3241 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3155 | 29 | 322 | 48% | 3168 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2898 | 29 | 352 | 52% | 2878 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3167 | 27 | 392 | 53% | 3147 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3070 | 28 | 356 | 51% | 3056 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2797 | 28 | 398 | 51% | 2786 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2847 | 34 | 272 | 49% | 2855 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2711 | 35 | 252 | 50% | 2714 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2445 | 31 | 348 | 55% | 2400 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2746 | 43 | 172 | 50% | 2749 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2673 | 45 | 160 | 51% | 2666 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2317 | 44 | 172 | 51% | 2310 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2673 | 38 | 214 | 50% | 2673 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2558 | 35 | 264 | 46% | 2596 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2291 | 41 | 212 | 55% | 2246 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2726 | 42 | 180 | 52% | 2711 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2538 | 40 | 202 | 53% | 2511 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2263 | 50 | 142 | 48% | 2282 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2777 | 61 | 92 | 42% | 2847 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2552 | 59 | 92 | 46% | 2585 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2226 | 67 | 82 | 59% | 2141 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |