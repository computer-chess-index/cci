# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2292<sub>(+39) | 2564<sub>(+80) | 2630<sub>(+54) |  |
| 1.4.0 | 2026-04-01 | 2253<sub>(+214) | 2484<sub>(+131) | 2576<sub>(+199) |  |
| 1.3.2 | 2026-03-14 | 2039<sub>(+27) | 2353<sub>(+26) | 2377<sub>(+2) |  |
| 1.3.1 | 2026-03-10 | 2012<sub>(+153) | 2327<sub>(+113) | 2375<sub>(+134) |  |
| 1.3.0 | 2026-03-08 | 1859<sub>(+185) | 2214<sub>(+308) | 2241<sub>(+239) |  |
| 1.2.1 | 2026-03-07 | 1674<sub>(+new) | 1906<sub>(+new) | 2002<sub>(+new) |  |
| 1.2.0 | 2026-03-05 |  |  |  |  |
| 1.1.0 | 2026-03-05 |  |  |  |  |
| 1.0.0 | 2026-03-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chal+<version>&body=###%20Engine%20name%0AChal%0A%0A###%20Version%0A1.4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-24 06:23:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1674, 1859, 2012, 2039, 2253, 2292]
  line "STC (8.0+0.08s)" [1674, 1859, 2012, 2039, 2253, 2292]
  line "LTC (60.0+0.60s)" [1906, 2214, 2327, 2353, 2484, 2564]
  line "VLTC (2m24s+1.12s)" [2002, 2241, 2375, 2377, 2576, 2630]
  line "VLTC (2m24s+1.12s)" [2002, 2241, 2375, 2377, 2576, 2630]
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
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1674, 1859, 2012, 2039, 2253, 2292]
  line "STC (8.0+0.08s)" [1674, 1859, 2012, 2039, 2253, 2292]
  line "LTC (60.0+0.60s)" [1906, 2214, 2327, 2353, 2484, 2564]
  line "VLTC (2m24s+1.12s)" [2002, 2241, 2375, 2377, 2576, 2630]
  line "VLTC (2m24s+1.12s)" [2002, 2241, 2375, 2377, 2576, 2630]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2630 | 28 | 392 | 51% | 2619 | 35% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2564 | 28 | 400 | 51% | 2556 | 34% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2292 | 30 | 372 | 49% | 2298 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2576 | 30 | 360 | 50% | 2573 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2484 | 32 | 320 | 49% | 2489 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2253 | 31 | 360 | 52% | 2236 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2377 | 34 | 296 | 49% | 2387 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2353 | 32 | 312 | 51% | 2346 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2039 | 32 | 320 | 48% | 2057 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2375 | 37 | 244 | 51% | 2363 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2327 | 37 | 240 | 51% | 2319 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2012 | 40 | 212 | 52% | 1995 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2241 | 44 | 188 | 54% | 2206 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2214 | 41 | 204 | 55% | 2171 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1859 | 42 | 196 | 50% | 1859 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2002 | 39 | 254 | 50% | 2013 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1906 | 45 | 192 | 46% | 1975 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1674 | 44 | 200 | 47% | 1747 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |