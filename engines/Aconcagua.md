# Engine: Aconcagua

Author: Tarifa Gabriel

Home: https://github.com/gabtar/aconcagua

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2.0 | 2026-05-31 | 2323<sub>(+147) | 2572<sub>(+134) | 2693<sub>(+137) |  |
| 5.1.0 | 2026-03-01 | 2176<sub>(+29) | 2438<sub>(+3) | 2556<sub>(+117) |  |
| 5.0.0 | 2026-01-25 | 2147<sub>(+198) | 2435<sub>(+187) | 2439<sub>(+86) |  |
| 4.1.0 | 2025-12-14 | 1949<sub>(+51) | 2248<sub>(+79) | 2353<sub>(+58) |  |
| 4.0.0 | 2025-11-09 | 1898<sub>(+new) | 2169<sub>(+new) | 2295<sub>(+new) |  |
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

Generated: 2026-07-16 06:22:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.0.0", "4.1.0", "5.0.0", "5.1.0", "5.2.0"]
  y-axis "Elo Rating" 1800 --> 2700
  line "STC (8.0+0.08s)" [1898, 1949, 2147, 2176, 2323]
  line "STC (8.0+0.08s)" [1898, 1949, 2147, 2176, 2323]
  line "LTC (60.0+0.60s)" [2169, 2248, 2435, 2438, 2572]
  line "VLTC (2m24s+1.12s)" [2295, 2353, 2439, 2556, 2693]
  line "VLTC (2m24s+1.12s)" [2295, 2353, 2439, 2556, 2693]
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
  y-axis "Elo Rating" 1800 --> 2700
  line "STC (8.0+0.08s)" [1898, 1949, 2147, 2176, 2323]
  line "STC (8.0+0.08s)" [1898, 1949, 2147, 2176, 2323]
  line "LTC (60.0+0.60s)" [2169, 2248, 2435, 2438, 2572]
  line "VLTC (2m24s+1.12s)" [2295, 2353, 2439, 2556, 2693]
  line "VLTC (2m24s+1.12s)" [2295, 2353, 2439, 2556, 2693]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2693 | 32 | 298 | 53% | 2670 | 39% |
| 5.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2572 | 31 | 348 | 52% | 2552 | 32% |
| 5.2.0 | STC <sub>(8.0+0.08s)</sub> | 2323 | 33 | 304 | 48% | 2349 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2556 | 27 | 428 | 50% | 2561 | 38% |
| 5.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2438 | 29 | 376 | 51% | 2427 | 34% |
| 5.1.0 | STC <sub>(8.0+0.08s)</sub> | 2176 | 27 | 468 | 49% | 2176 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2439 | 42 | 196 | 51% | 2431 | 22% |
| 5.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2435 | 37 | 246 | 49% | 2441 | 26% |
| 5.0.0 | STC <sub>(8.0+0.08s)</sub> | 2147 | 34 | 290 | 50% | 2149 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2353 | 40 | 214 | 50% | 2358 | 27% |
| 4.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2248 | 40 | 222 | 51% | 2232 | 23% |
| 4.1.0 | STC <sub>(8.0+0.08s)</sub> | 1949 | 33 | 312 | 47% | 1975 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2295 | 46 | 172 | 41% | 2403 | 28% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2169 | 55 | 116 | 47% | 2198 | 23% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1898 | 62 | 92 | 47% | 1925 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |