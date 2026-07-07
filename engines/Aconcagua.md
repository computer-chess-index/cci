# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2334<sub>(+155) | 2561<sub>(+119) | 2697<sub>(+137) |  |
| 5.1.0 | 2026-03-01 | 2179<sub>(+30) | 2442<sub>(+3) | 2560<sub>(+116) |  |
| 5.0.0 | 2026-01-25 | 2149<sub>(+197) | 2439<sub>(+187) | 2444<sub>(+88) |  |
| 4.1.0 | 2025-12-14 | 1952<sub>(+51) | 2252<sub>(+78) | 2356<sub>(+57) |  |
| 4.0.0 | 2025-11-09 | 1901<sub>(+new) | 2174<sub>(+new) | 2299<sub>(+new) |  |
| 3.4.0 | 2025-10-04 |  |  |  |  |
| 3.3.0 | 2025-09-14 |  |  |  |  |
| 3.2.0 | 2025-08-31 |  |  |  |  |
| 3.1.0 | 2025-08-16 |  |  |  |  |
| 3.0.0 | 2025-07-20 |  |  |  |  |
| 2.1.0 | 2025-06-28 |  |  |  |  |
| 2.0.0 | 2025-05-31 |  |  |  |  |
| 1.1.0 | 2025-05-17 |  |  |  |  |
| 1.0.0 | 2025-05-17 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aconcagua+<version>&body=###%20Engine%20name%0AAconcagua%0A%0A###%20Version%0A5.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-07 06:22:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "STC (8.0+0.08s)" [1901, 1952, 2149, 2179, 2334]
  line "STC (8.0+0.08s)" [1901, 1952, 2149, 2179, 2334]
  line "LTC (60.0+0.60s)" [2174, 2252, 2439, 2442, 2561]
  line "VLTC (2m24s+1.12s)" [2299, 2356, 2444, 2560, 2697]
  line "VLTC (2m24s+1.12s)" [2299, 2356, 2444, 2560, 2697]
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
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "STC (8.0+0.08s)" [1901, 1952, 2149, 2179, 2334]
  line "STC (8.0+0.08s)" [1901, 1952, 2149, 2179, 2334]
  line "LTC (60.0+0.60s)" [2174, 2252, 2439, 2442, 2561]
  line "VLTC (2m24s+1.12s)" [2299, 2356, 2444, 2560, 2697]
  line "VLTC (2m24s+1.12s)" [2299, 2356, 2444, 2560, 2697]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2697 | 33 | 278 | 53% | 2673 | 38% |
| 5.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2561 | 32 | 314 | 51% | 2553 | 32% |
| 5.2.0 | STC <sub>(8.0+0.08s)</sub> | 2334 | 35 | 278 | 49% | 2346 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2560 | 27 | 428 | 50% | 2564 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2442 | 29 | 376 | 51% | 2430 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2179 | 27 | 468 | 49% | 2180 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2444 | 42 | 196 | 51% | 2435 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2439 | 37 | 246 | 49% | 2445 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2149 | 34 | 290 | 50% | 2152 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2356 | 40 | 214 | 50% | 2361 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2252 | 40 | 222 | 51% | 2234 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1952 | 33 | 312 | 47% | 1978 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2299 | 46 | 172 | 41% | 2407 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2174 | 55 | 116 | 47% | 2202 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1901 | 62 | 92 | 47% | 1928 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |